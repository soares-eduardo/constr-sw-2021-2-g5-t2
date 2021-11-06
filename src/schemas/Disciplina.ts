import { Schema, model } from "mongoose";
import { Disciplina } from "./custom-types";

const DisciplinaSchema = new Schema({
    nome: String,
    codigo: Number,
    creditos: Number,
    cargaHoraria: Number,
    validade: String,
    objetivos: String,
    ementa: String
});

export default model<Disciplina>('Disciplina', DisciplinaSchema);