import { Router } from "express";
import { createDisciplina } from './services/disciplina/createDisciplina';
import { updateDisciplina } from "./services/disciplina/updateDisciplina";
import { getDisciplinas } from "./services/disciplina/getDisciplinas";
import { getDisciplinaByCodigo } from "./services/disciplina/getDisciplinaByCodigo";
import { createTurma } from "./services/turma/createTurma";
import { getTurmas } from "./services/turma/getTurmas";
import { getTurmaByAno } from "./services/turma/getTurmaByAno";
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

router.get('/disciplinas', (request,response) => {
    return getDisciplinaByCodigo(request, response);
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

router.get('/turmas', (request,response) => {
    return getTurmaByAno(request,response);
})

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