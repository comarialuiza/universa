import Chance from 'chance';

const chance = new Chance();

const enrollmentMock = [
    {
        title: 'Introdução à Expressão Gráfica',
        code: 'CEG301',
        teacher: chance.name(),
        hours: 60,
    },
    {
        title: 'Geometria Descritiva I',
        code: 'CEG303',
        teacher: chance.name(),
        hours: 60,
    },
    {
        title: 'Desenho Geométrico I',
        code: 'CEG302',
        teacher: chance.name(),
        hours: 60,
    },
    {
        title: 'Representação Gráfica I',
        code: 'CEG307',
        teacher: chance.name(),
        hours: 60,
    },
    {
        title: 'Composição I',
        code: 'CEG309',
        teacher: chance.name(),
        hours: 60,
    },
    {
        title: 'Modelagem da Informação e da Construção',
        code: 'CEG325',
        teacher: chance.name(),
        hours: 60,
    },
    {
        title: 'Modelagem Mecânica I',
        code: 'CEG328',
        teacher: chance.name(),
        hours: 45,
    },
    {
        title: 'Prototipagem I',
        code: 'CEG332',
        teacher: chance.name(),
        hours: 60,
    },
    {
        title: 'Projeto de Móveis II',
        code: 'CEG327',
        teacher: chance.name(),
        hours: 45,
    },
    {
        title: 'Projeto de Produto II',
        code: 'CEG331',
        teacher: chance.name(),
        hours: 60,
    },
    {
        title: 'Seminário de Expressão Gráfica',
        code: 'CEG335',
        teacher: chance.name(),
        hours: 60,
    },
    {
        title: 'Trabalho de Conclusão de Curso I',
        code: 'CEG336',
        teacher: chance.name(),
        hours: 60,
    },
    {
        title: 'História do Desenho',
        code: 'CEG264',
        teacher: chance.name(),
        hours: 60,
    },
    {
        title: 'Fundamentos do Web Design I',
        code: 'CEG256',
        teacher: chance.name(),
        hours: 60,
    },
];

export default enrollmentMock;