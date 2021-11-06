import { Schema, model } from "mongoose";
import { Turma } from "./custom-types";

const TurmaSchema = new Schema({
    numero: Number,
    ano: Number,
    semestre: Number,
    disciplina: String,
    horario: String
});

export default model<Turma>('Turma', TurmaSchema);