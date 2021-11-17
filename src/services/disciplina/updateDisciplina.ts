import { Request, Response } from "express";

import Disciplina from "../../schemas/Disciplina";
import StatusCodes from "http-status-codes";
import { newDisciplina } from "../../schemas/validate-schemas";

export const updateDisciplina = async (req: Request, res: Response): Promise<Response> => {

    const updatedDisciplina = newDisciplina(req.body);

    if (updatedDisciplina.statusCode != StatusCodes.OK) {

        console.log("Error updating disciplina instance for MongoDB", updatedDisciplina.message);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(updatedDisciplina.message);
    }

    let disciplina = await Disciplina.findOneAndUpdate({
        where: {
            _id: req.params.id
        }
    });

    try {

        if (disciplina) {

            disciplina.set(updatedDisciplina.disciplina);
            disciplina._id = req.params.id

            await disciplina.save();
            return res
                .status(StatusCodes.OK)
                .json(disciplina);

        } else {

            return res
                .status(StatusCodes.NOT_FOUND)
                .json("No records found with the given ID.");
                
        }

    } catch (err) {

        console.log('Error editing data from MongoDB.', err);

        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(err);
    }
}