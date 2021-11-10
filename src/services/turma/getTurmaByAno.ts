import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Turma from "../../schemas/Turma";

/**
 * 
 * @return Select documents by atribute passed on query
 * 
 */
 export const getTurmaByAno = async (req: Request, res: Response): Promise<Response> => {

    // Parse the codigo to Number
    const ano = Number(req.query.ano);

    try{
        const dbRes = await Turma.find({ "ano": ano });

        console.log("Sucessfully found registers with the given param: ",dbRes);

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