import { Request, Response } from "express";

import Turma from "../../schemas/Turma";
import StatusCodes from 'http-status-codes';
import { newTurma } from "../../schemas/validate-schemas";
import Disciplina from "../../schemas/Disciplina";
import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();

/**
 * 
 * @returns Creates a new turma and return its data.
 * 
 */
export const createTurma = async (req: Request, res: Response): Promise<Response> => {

    // Verify if the field is empty

    if (!req.body.disciplina) {

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json("Field {disciplina} is a required.")
    }

    // Check if the given discipline exists

    try {

        const dbRes = await Disciplina.findById(req.body.disciplina);

        if (dbRes == null) {

            console.log("No records found with the given discipline.")

            return res
                .status(StatusCodes.NOT_FOUND)
                .json("No records found with the given discipline.");
        }
    } catch (err) {

        console.log('Error returning a MongoDB instance.', err);

        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(err);
    }

    /**
     * 
     * Get request to Aulas/Reservar microservice 
     * in order to validade the given aula id
     * 
     */

    const baseUrl = process.env.AULA_RESERVA_MS;
    const requestUrl = `${baseUrl}/${req.body.aula}`;

    try {

        const axiosResponse = await axios.get(requestUrl);

        if (axiosResponse.status != 200) {

            return res
                .status(StatusCodes.NOT_FOUND)
                .json("No records found with the given aula id.")
        }

        console.log('Successfully found the given aula on Aula/Reserva microservice: ', axiosResponse.data);

    } catch (err) {

        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(err);
    }

    // Creates a new Turma instance

    const turma = newTurma(req.body);

    if (turma.statusCode != StatusCodes.OK) {

        console.log("Error creating Turma instance for MongoDB", turma.message);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(turma.message);
    }

    // Register the document on MongoDB

    try {

        const dbRes = await Turma.create(turma.turma);
        console.log('Successfully inserted a new turma.', dbRes);

        return res
            .status(StatusCodes.CREATED)
            .json(dbRes);

    } catch (err) {

        console.log('Error creating a MongoDB instance.', err);

        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(err);
    }
}