import { Request, Response } from "express";

import Disciplina from "../../schemas/Disciplina";
import { StatusCodes } from 'http-status-codes';

/**
 * 
 * @returns Returns a list of all disciplines with their data.
 * 
 */
export const getDisciplinas = async (req: Request, res: Response): Promise<Response> => {

    const listDisciplinas = await Disciplina.find();

    return res.status(StatusCodes.CREATED).json(listDisciplinas);
}