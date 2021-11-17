import { Request, Response } from "express";

import Disciplina from "../../schemas/Disciplina";
import StatusCodes from "http-status-codes";
import { newDisciplina } from './../../schemas/validate-schemas';

/**
 * 
 * @returns Creates a new disciplina and return its data.
 *  
 */
export const createDisciplina = async (req: Request, res: Response): Promise<Response> => {

    // Create a Disciplina instance

    const disciplina = newDisciplina(req.body);

    if (disciplina.statusCode != StatusCodes.OK) {

        console.log("Error creating disciplina instance for MongoDB", disciplina.message);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(disciplina.message);
    }

    // Register the instance on MongoDB

    try {

        const dbRes = await Disciplina.create(disciplina.disciplina);
        console.log('Successfully inserted a new disciplina.', dbRes);

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