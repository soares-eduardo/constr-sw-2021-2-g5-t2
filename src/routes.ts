import { Router } from "express";
import { createDisciplina } from './services/disciplina/createDisciplina';
import { updateDisciplina } from "./services/disciplina/updateDisciplina";
import { patchDisciplina } from "./services/disciplina/patchDisciplina";
import { getDisciplinas } from "./services/disciplina/getDisciplinas";
import { getDisciplinaById } from "./services/disciplina/getDisciplinaById";
import { getDisciplinasByValidade } from "./services/disciplina/getDisciplinasByValidade";
import { deleteDisciplina } from "./services/disciplina/deleteDisciplina";
import { createTurma } from "./services/turma/createTurma";
import { updateTurma } from "./services/turma/updateTurma";
import { patchTurma } from "./services/turma/patchTurma";
import { getTurmas } from "./services/turma/getTurmas";
import { getTurmaById } from './services/turma/getTurmaById';
import { getTurmasByHorario } from './services/turma/getTurmasByHorario';
import { deleteTurma } from "./services/turma/deleteTurma";


const router = Router();

// Disciplina routes

router.get('/disciplina', (request, response) => {
    return getDisciplinas(request, response);
});

router.get('/disciplina/:id', (request, response) => {
    return getDisciplinaById(request, response, request.params.id);
});

router.get('/disciplinas/validade', (request, response) => {
    return getDisciplinasByValidade(request, response);
});

router.post('/disciplina', (request, response) => {
    return createDisciplina(request, response);
});

router.put('/disciplina/:id', (request,response) => {
    return updateDisciplina(request,response);
});

router.patch('/disciplina/:id', (request,response) => {
    return patchDisciplina(request,response);
});

router.delete('/disciplina/:id', (request, response) => {
    return deleteDisciplina(request, response, request.params.id);
});

// Turma routes

router.get('/turma', (request, response) => {
    return getTurmas(request, response);
});

router.get('/turma/:id', (request, response) => {
    return getTurmaById(request, response, request.params.id);
});

router.get('/turmas/horario', (request, response) => {
    return getTurmasByHorario(request, response);
});

router.post('/turma', (request, response) => {
    return createTurma(request, response);
});

router.put('/turma/:id', (request,response) => {
     return updateTurma(request,response);
});

router.patch('/turma/:id', (request,response) => {
    return patchTurma(request,response);
});

router.delete('/turma/:id', (request, response) => {
    return deleteTurma(request, response, request.params.id);
});

export { router }