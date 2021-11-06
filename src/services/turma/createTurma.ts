import { Request, Response } from "express"

import Turma from "../../schemas/Turma";
import { StatusCodes } from 'http-status-codes';
import { newTurma } from "../../schemas/validate-schemas";

/**
 * 
 * @returns Creates a new turma and return its data.
 * 
 */
export const createTurma = async (req: Request, res: Response): Promise<Response> => {

    const turma = newTurma(req.body);

    if (turma.statusCode != StatusCodes.OK) {

        console.log("Error creating Turma instance for MongoDB", turma.message);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(turma.message);
    }

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