import { Request, Response } from "express";
import Disciplina from "../../schemas/Disciplina";
import Turma from "../../schemas/Turma";
import { StatusCodes } from 'http-status-codes';

/**
 * 
 * @returns Deletes the document with the given ID after checking if it's not linked to a turma.
 * 
 */
export const deleteDisciplina = async (req: Request, res: Response, id: string): Promise<Response> => {

    // Verify if the given id is linked to a turma

    try {

        const dbRes = await Turma.find({ "disciplina": id });

        if (dbRes.length > 0) {
            return res
                .status(StatusCodes.BAD_REQUEST)
                .json("This ID is linked to one or more turmas.");
        }

        console.log("No records found when looking for this ID on turmas collection.", dbRes)

    } catch (err) {

        console.log('Error returning data from MongoDB.', err);

        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(err);
    }

    // Delete document with the given ID

    try {

        const dbRes = await Disciplina.findByIdAndRemove(id);

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