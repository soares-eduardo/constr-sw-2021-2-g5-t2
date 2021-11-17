import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Disciplina from "../../schemas/Disciplina";

/**
 * 
 * @return Select documents based on carga horaria, validade and ID.
 * 
 */
export const getDisciplinasByValidade = async (req: Request, res: Response): Promise<Response> => {

    // Parse the given params to Number and String

    const cargaHoraria = Number(req.query.cargaHoraria);
    const validade = String(req.query.validade);

    // Execute the query

    try {

        const dbRes = await Disciplina.find({
            $and: [
                { "cargaHoraria": { $gt: cargaHoraria } },
                { "validade": validade }
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