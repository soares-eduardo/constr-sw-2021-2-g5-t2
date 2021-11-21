import { StatusCodes } from "http-status-codes";
import { Turma, ValidationResult } from "./custom-types";

export const newDisciplina = (body): ValidationResult => {

    let res = validateFieldsDisciplina(body);

    if (res.statusCode == StatusCodes.OK) {
        res.disciplina = {
            nome: body.nome,
            codigo: body.codigo,
            creditos: body.creditos,
            cargaHoraria: body.cargaHoraria,
            validade: body.validade,
            objetivos: body.objetivos,
            ementa: body.ementa
        }
    }

    return res;
}

export const newTurma = (body): ValidationResult => {

    let res = validateFieldsTurma(body);

    if (res.statusCode == StatusCodes.OK) {
        res.turma = {
            numero: body.numero,
            ano: body.ano,
            semestre: body.semestre,
            disciplina: body.disciplina,
            aula: body.aula,
            horario: body.horario
        }
    }

    return res;
}

export const validateFieldsTurma = (body): ValidationResult => {

    if (!body.numero || body.numero.length == 0) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: '{Numero} is a required field.'
        }
    }

    if (!body.ano || body.ano.length == 0) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: '{Ano} is a required field.'
        }
    }

    if (!body.semestre || body.semestre.length == 0) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: '{Semestre} is a required field.'
        }
    }

    if (!body.disciplina || body.disciplina.length == 0) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: '{Disciplina} is a required field.'
        }
    }

    if (!body.aula || body.aula.length == 0) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: '{Aula} is a required field.'
        }
    }

    if (!body.horario || body.horario.length == 0) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: '{Horario} is a required field.'
        }
    }

    return {
        statusCode: StatusCodes.OK,
        message: ''
    }
}

export const validateFieldsDisciplina = (body): ValidationResult => {

    if (!body.nome || body.nome.length == 0) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: '"{Nome} is a required field."'
        };
    }

    if (!body.codigo || body.codigo.length == 0) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: '"{Codigo} is a required field."'
        };
    }

    if (!body.creditos || body.creditos.length == 0) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: '"{Creditos} is a required field."'
        };
    }

    if (!body.cargaHoraria || body.cargaHoraria.length == 0) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: '"{Carga Horaria} is a required field."'
        };
    }

    if (!body.validade || body.validade.length == 0) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: '"{Validade} is a required field."'
        };
    }

    if (!body.objetivos || body.objetivos.length == 0) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: '"{Objetivos} is a required field."'
        };
    }

    if (!body.ementa || body.ementa.length == 0) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: '"{Ementa} is a required field."'
        };
    }

    return {
        statusCode: StatusCodes.OK,
        message: ''
    }
}

export const setModifiedTurma = (body, turma) => {

    if (body.numero) {
        turma.numero = body.numero;
    }

    if (body.ano) {
        turma.ano = body.ano;
    }

    if (body.semestre) {
        turma.semestre = body.semestre;
    }

    if (body.disciplina) {
        turma.disciplina = body.disciplina;
    }

    if (body.horario) {
        turma.horario = body.horario;
    }

    return turma;
}

export const setModifiedDisciplina = (body, disciplina) => {

    if (body.nome) {
        disciplina.nome = body.nome;
    }

    if (body.validade) {
        disciplina.validade = body.validade;
    }

    if (body.objetivos) {
        disciplina.objetivos = body.objetivos;
    }

    if (body.ementa) {
        disciplina.ementa = body.ementa;
    }

    if (body.codigo) {
        disciplina.codigo = body.codigo;
    }

    if (body.creditos) {
        disciplina.creditos = body.creditos;
    }

    if (body.cargaHoraria) {
        disciplina.cargaHoraria = body.cargaHoraria;
    }

    return disciplina;
}