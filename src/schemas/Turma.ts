import { Schema, model } from "mongoose";
import Disciplina from "./Disciplina";

interface Turma {

    numero: number;
    ano: number;
    semestre: number;
    disciplina: string;
    horario: string;
}

const TurmaSchema = new Schema({
    numero: Number,
    ano: Number,
    semestre: Number,
    disciplina: String,
    horario: String
});

export default model<Turma>('Turma', TurmaSchema);