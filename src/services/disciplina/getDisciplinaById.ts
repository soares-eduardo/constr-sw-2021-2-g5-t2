import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Disciplina from "../../schemas/Disciplina";

/**
 * 
 * @return Select documents based on ID.
 * 
 */
export const getDisciplinaById = async (req: Request, res: Response, id: string): Promise<Response> => {

    // Execute the query

    try {

        const dbRes = await Disciplina.findById(id);

        console.log("Successfully found registers with the given id: ", id);

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