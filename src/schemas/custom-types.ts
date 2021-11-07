
export interface Turma {
    numero: number;
    ano: number;
    semestre: number;
    disciplina: string;
    horario: string;
}

export interface Disciplina {
    nome: string;
    validade: string;
    objetivos: string;
    ementa: string;

    codigo: number;
    creditos: number;
    cargaHoraria: number;
}

export interface ValidationResult {
    statusCode: number,
    message: string,
    disciplina?: Disciplina,
    turma?: Turma
}