import { Request, Response } from "express";

import Turma from "../../schemas/Turma";
import { StatusCodes } from "http-status-codes";

export const updateTurma = async (req: Request, res: Response): Promise<Response> => {
    
    const turma = await Turma.findOneAndUpdate({
        where: {
            _id: req.params.id
        }
    });
    
    if(turma) {
        turma._id = req.params.id

        if(req.body.numero){
            turma.numero = req.body.numero;
        }

        if(req.body.ano){
            turma.ano = req.body.ano;
        }

        if(req.body.semestre){
            turma.semestre = req.body.semestre;
        }

        if(req.body.disciplina){
            turma.disciplina = req.body.disciplina;
        }

        if(req.body.horario){
            turma.horario = req.body.horario;
        }

        await turma.save();
        return res.status(StatusCodes.OK).json(turma);
    }else{
        return res.status(StatusCodes.NOT_FOUND).json(turma);
    }
}