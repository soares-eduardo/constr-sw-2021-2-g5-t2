import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Turma from "../../schemas/Turma";

/**
 * 
 * @return Select documents based on semestre, horario and ID.
 * 
 */
export const getTurmasByHorario = async (req: Request, res: Response): Promise<Response> => {

    // Parse the given params to Number and String


    const semestre = Number(req.query.semestre);
    const horario = String(req.query.horario);

    // Execute the query


    try {

        const dbRes = await Turma.find({
            $and: [
                { "semestre": semestre },
                { "horario": horario }
            ]
        });

        console.log("Successfully found registers with the given params: ", dbRes);

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