import { Request, Response } from "express";

import Disciplina from "../../schemas/Disciplina";
import StatusCodes from "http-status-codes";

/**
 * 
 * @returns Creates a new discipline and return its data.
 *  
 */
export const createDisciplina = async (req: Request, res: Response): Promise<Response> => {

    const disciplina = await Disciplina.create(req.body);

    return res.status(StatusCodes.OK).json(disciplina);
}