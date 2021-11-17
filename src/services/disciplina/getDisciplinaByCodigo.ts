import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Disciplina from "../../schemas/Disciplina";

/**
 * 
 * @return Select documents by atribute passed on query
 * 
 */
export const getDisciplinaByCodigo = async (req: Request, res: Response): Promise<Response> => {

    // Parse the codigo to Number
    const codigo = Number(req.query.codigo);

    try {

        const dbRes = await Disciplina.find({ "codigo": codigo });

        console.log("Sucessfully found registers with the given param: ", dbRes);

        return res
            .status(StatusCodes.OK)
            .json(dbRes);

    } catch (err) {
        
        console.log("Error returning data from MongoDB.", err);

        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(err);
    }
}