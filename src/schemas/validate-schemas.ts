import { StatusCodes } from "http-status-codes";
import { ValidationResult } from "./custom-types";

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