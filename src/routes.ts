import { Router } from "express";
import { createDisciplina } from './services/disciplina/createDisciplina';
import { getDisciplinas } from "./services/disciplina/getDisciplinas";
import { createTurma } from "./services/turma/createTurma";
import { getTurmas } from "./services/turma/getTurmas";


const router = Router();

// Disciplina routes

router.get('/disciplina', (request, response) => {
    return getDisciplinas(request, response);
});

router.post('/disciplina', (request, response) => {
    return createDisciplina(request, response);
});

// Turma routes

router.get('/turma', (request, response) => {
    return getTurmas(request, response);
});

router.post('/turma', (request, response) => {
    return createTurma(request, response);
});

export { router }