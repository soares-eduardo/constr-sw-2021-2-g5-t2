import { Request, Response } from "express"

import Turma from "../../schemas/Turma";
import { StatusCodes } from 'http-status-codes';

/**
 * 
 * @returns Returns a list of all turmas with their data.
 * 
 */
export const getTurmas = async (req: Request, res: Response): Promise<Response> => {

    const listTurmas = await Turma.find();

    return res.status(StatusCodes.OK).json(listTurmas);
}