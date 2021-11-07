import { Request, Response } from "express";

import Disciplina from "../../schemas/Disciplina";
import StatusCodes from "http-status-codes";

export const updateDisciplina = async (req: Request, res: Response): Promise<Response> => {

    const disciplina = await Disciplina.findOneAndUpdate({
        where: {
            _id: req.params.id
        }
    });

    try{
        if(disciplina) {
            disciplina._id = req.params.id
            
            if(req.body.nome){
                disciplina.nome = req.body.nome;
            }
            
            if(req.body.validade){
                disciplina.validade = req.body.validade;
            }
            
            if(req.body.objetivos){
                disciplina.objetivos = req.body.objetivos;
            }
            
            if(req.body.ementa){
                disciplina.ementa = req.body.ementa;
            }
            
            if(req.body.codigo){
                disciplina.codigo = req.body.codigo;
            }
            
            if(req.body.creditos){
                disciplina.creditos = req.body.creditos;
            }
            
            if(req.body.cargaHoraria){
                disciplina.cargaHoraria = req.body.cargaHoraria;
            }
            
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