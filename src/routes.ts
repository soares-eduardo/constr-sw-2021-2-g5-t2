import { Router } from "express";
import { createDisciplina } from './services/disciplina/createDisciplina';
import { deleteDisciplina } from "./services/disciplina/deleteDisciplina";
import { getDisciplinas } from "./services/disciplina/getDisciplinas";
import { getDisciplinasByValidade } from "./services/disciplina/getDisciplinasByValidade";
import { createTurma } from "./services/turma/createTurma";
import { deleteTurma } from "./services/turma/deleteTurma";
import { getTurmas } from "./services/turma/getTurmas";
import { getTurmasByHorario } from './services/turma/getTurmasByHorario';


const router = Router();

// Disciplina routes

router.get('/disciplina', (request, response) => {
    return getDisciplinas(request, response);
});

router.get('/disciplina/:id', (request, response) => {
    return getDisciplinasByValidade(request, response, request.params.id);
});

router.post('/disciplina', (request, response) => {
    return createDisciplina(request, response);
});

router.delete('/disciplina/:id', (request, response) => {
    return deleteDisciplina(request, response, request.params.id);
});

// Turma routes

router.get('/turma', (request, response) => {
    return getTurmas(request, response);
});

router.get('/turma/:id', (request, response) => {
    return getTurmasByHorario(request, response, request.params.id);
});

router.post('/turma', (request, response) => {
    return createTurma(request, response);
});

router.delete('/turma/:id', (request, response) => {
    return deleteTurma(request, response, request.params.id);
});

export { router }