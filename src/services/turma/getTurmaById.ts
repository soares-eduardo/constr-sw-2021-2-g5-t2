import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Turma from "../../schemas/Turma";

/**
 * 
 * @return Select documents based on ID.
 * 
 */
export const getTurmaById = async (req: Request, res: Response, id: string): Promise<Response> => {

    // Execute the query

    try {

        const dbRes = await Turma.findById(id);

        if (dbRes == null) {

            return res
                .status(StatusCodes.NOT_FOUND)
                .json("No records found.");
        }

        console.log("Successfully found registers with the given id: ", dbRes);

        return res
            .status(StatusCodes.OK)
            .json(dbRes);

    } catch (err) {

        console.log('Error returning data from MongoDB.', err);

        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(err);
    }
}