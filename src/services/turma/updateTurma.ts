import { Request, Response } from "express";

import Turma from "../../schemas/Turma";
import StatusCodes from "http-status-codes";
import { newTurma } from "../../schemas/validate-schemas";

export const updateTurma = async (req: Request, res: Response): Promise<Response> => {

    const updatedTurma = newTurma(req.body);
    if (updatedTurma.statusCode != StatusCodes.OK) {

        console.log("Error updating turma instance for MongoDB", updatedTurma.message);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(updatedTurma.message);
    }

    let turma = await Turma.findOneAndUpdate({
        where: {
            _id: req.params.id
        }
    });

    try{
        if(turma) {
            turma.set(updatedTurma.turma);
            turma._id = req.params.id
            
            await turma.save();
            return res
            .status(StatusCodes.OK)
            .json(turma);
        }else{
            return res
            .status(StatusCodes.NOT_FOUND)
            .json("No records found with the given ID.");
        }
    }catch (err) {
        
        console.log('Error editing data from MongoDB.', err);

        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(err);
    }
}