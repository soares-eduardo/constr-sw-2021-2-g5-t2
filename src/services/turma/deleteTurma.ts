import { Request, Response } from "express";
import Turma from "../../schemas/Turma";
import StatusCodes from 'http-status-codes';

/**
 * 
 * @returns Deletes a document with the given ID.
 * 
 */
export const deleteTurma = async (req: Request, res: Response, id: string): Promise<Response> => {

    // Delete data with the given id from MongoDB collection.

    try {

        const dbRes = await Turma.findByIdAndRemove(id);

        if (dbRes == null) {

            console.log("No records found with the given ID.")

            return res
                .status(StatusCodes.NOT_FOUND)
                .json("No records found with the given ID.")
        }

        console.log("Successfully deleted the request data from MongoDB.", dbRes);

        return res
            .status(StatusCodes.NO_CONTENT)
            .json(dbRes);

    } catch (err) {

        console.log('Error deleting data from MongoDB.', err);

        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(err);
    }
}