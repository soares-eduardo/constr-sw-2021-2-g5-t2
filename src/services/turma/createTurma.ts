import { Request, Response } from "express"

import Turma from "../../schemas/Turma";
import { StatusCodes } from 'http-status-codes';

/**
 * 
 * @returns
 * 
 */
export const createTurma = async (req: Request, res: Response): Promise<Response> => {
    
    const turma = await Turma.create(req.body);

    return res.status(StatusCodes.CREATED).json(turma);
}