import { v4 as uuid } from 'uuid';

const normativeHoursMock = [
    {
        id: uuid(),
        title: 'Curso de AutoCAD Básico 2D',
        hours: 27,
        certificate: 'file'
    },
    {
        id: uuid(),
        title: 'Estágio Obrigatório',
        hours: 60,
        certificate: 'file'
    },
    {
        id: uuid(),
        title: 'UFPR: Feira de Cursos e Profissões',
        hours: 4,
        certificate: 'file'
    },
    {
        id: uuid(),
        title: 'Palestra Design Editorial',
        hours: 2,
        certificate: 'file'
    },
    {
        id: uuid(),
        title: 'IV Semana Acadêmica de Expressão Gráfica',
        hours: 8,
        certificate: 'file'
    },
];

export default normativeHoursMock;