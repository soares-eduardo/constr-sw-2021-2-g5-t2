import { Request, Response } from "express";

import Turma from "../../schemas/Turma";
import { StatusCodes } from "http-status-codes";
import { setPatchTurma } from "../../schemas/validate-schemas";

export const patchTurma = async (req: Request, res: Response): Promise<Response> => {
    
    let turma = await Turma.findOneAndUpdate({
        where: {
            _id: req.params.id
        }
    });
    
    try{
        if(turma) {
            turma = setPatchTurma(req.body, turma);
            turma._id = req.params.id
    
            await turma.save();
            return res.status(StatusCodes.OK).json(turma);
        }else{
            return res.status(StatusCodes.NOT_FOUND).json("No records found with the given ID.");
        }
    }catch(err){
        console.log('Error editing data from MongoDB.', err);

        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(err);
    }
}