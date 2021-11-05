import { Schema, model } from "mongoose";

interface Disciplina {

    nome: string;
    validade: string;
    objetivos: string;
    ementa: string;

    codigo: number;
    creditos: number;
    cargaHoraria: number;
}

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