import { Request, Response } from "express";

import Disciplina from "../../schemas/Disciplina";
import StatusCodes from "http-status-codes";
import { setPatchDisciplina } from "../../schemas/validate-schemas";

export const patchDisciplina = async (req: Request, res: Response): Promise<Response> => {

    let disciplina = await Disciplina.findOneAndUpdate({
        where: {
            _id: req.params.id
        }
    });

    try{
        if(disciplina) {
            disciplina = setPatchDisciplina(req.body, disciplina);
            disciplina._id = req.params.id
            
            await disciplina.save();
            return res
            .status(StatusCodes.OK)
            .json(disciplina);
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