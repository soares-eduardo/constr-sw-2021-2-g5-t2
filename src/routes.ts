import { Router } from "express";
import { createDisciplina } from './services/disciplina/createDisciplina';
import { updateDisciplina } from "./services/disciplina/updateDisciplina";
import { getDisciplinas } from "./services/disciplina/getDisciplinas";
import { createTurma } from "./services/turma/createTurma";
import { getTurmas } from "./services/turma/getTurmas";
import { updateTurma } from "./services/turma/updateTurma";


const router = Router();

// Disciplina routes

router.get('/disciplina', (request, response) => {
    return getDisciplinas(request, response);
});

router.post('/disciplina', (request, response) => {
    return createDisciplina(request, response);
});

router.put('/disciplina/:id', (request,response) => {
    return updateDisciplina(request,response);
});

// Turma routes

router.get('/turma', (request, response) => {
    return getTurmas(request, response);
});

router.post('/turma', (request, response) => {
    return createTurma(request, response);
});

router.put('/turma/:id', (request,response) => {
     return updateTurma(request,response);
});

export { router }