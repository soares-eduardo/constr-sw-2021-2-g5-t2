import { Router } from "express";
import { createDisciplina } from './services/disciplina/createDisciplina';
import { updateDisciplina } from "./services/disciplina/updateDisciplina";
import { getDisciplinas } from "./services/disciplina/getDisciplinas";
import { createTurma } from "./services/turma/createTurma";
import { getTurmas } from "./services/turma/getTurmas";
import { updateTurma } from "./services/turma/updateTurma";
import { deleteDisciplina } from "./services/disciplina/deleteDisciplina";
import { getDisciplinasByValidade } from "./services/disciplina/getDisciplinasByValidade";
import { deleteTurma } from "./services/turma/deleteTurma";
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

router.put('/disciplina/:id', (request,response) => {
    return updateDisciplina(request,response);
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

router.put('/turma/:id', (request,response) => {
     return updateTurma(request,response);

});

router.delete('/turma/:id', (request, response) => {
    return deleteTurma(request, response, request.params.id);
});

export { router }