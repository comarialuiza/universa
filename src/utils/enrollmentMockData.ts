import Chance from 'chance';

const chance = new Chance();

const enrollmentMock = [
    {
        title: 'Introdução à Expressão Gráfica',
        code: 'CEG301',
        teacher: chance.name(),
        hours: 60,
        schedule: [
            {
                dayOfTheWeek: 'segunda-feira',
                hour: '9:30 - 11:30'
            },
            {
                dayOfTheWeek: 'quarta-feira',
                hour: '9:30 - 11:30'
            }
        ],
    },
    {
        title: 'Geometria Descritiva I',
        code: 'CEG303',
        teacher: chance.name(),
        hours: 60,
        schedule: [
            {
                dayOfTheWeek: 'segunda-feira',
                hour: '9:30 - 11:30'
            },
            {
                dayOfTheWeek: 'quarta-feira',
                hour: '9:30 - 11:30'
            }
        ],
    },
    {
        title: 'Desenho Geométrico I',
        code: 'CEG302',
        teacher: chance.name(),
        hours: 60,
        schedule: [
            {
                dayOfTheWeek: 'segunda-feira',
                hour: '9:30 - 11:30'
            },
            {
                dayOfTheWeek: 'quarta-feira',
                hour: '9:30 - 11:30'
            }
        ],
        status: 'Matrícula confirmada'
    },
    {
        title: 'Representação Gráfica I',
        code: 'CEG307',
        teacher: chance.name(),
        hours: 60,
        schedule: [
            {
                dayOfTheWeek: 'segunda-feira',
                hour: '9:30 - 11:30'
            },
            {
                dayOfTheWeek: 'quarta-feira',
                hour: '9:30 - 11:30'
            }
        ],
        status: 'Matrícula em andamento'
    },
    {
        title: 'Composição I',
        code: 'CEG309',
        teacher: chance.name(),
        hours: 60,
        schedule: [
            {
                dayOfTheWeek: 'segunda-feira',
                hour: '9:30 - 11:30'
            },
            {
                dayOfTheWeek: 'quarta-feira',
                hour: '9:30 - 11:30'
            }
        ],
        status: 'Em Andamento'
    },
    {
        title: 'Modelagem da Informação e da Construção',
        code: 'CEG325',
        teacher: chance.name(),
        hours: 60,
        schedule: [
            {
                dayOfTheWeek: 'segunda-feira',
                hour: '9:30 - 11:30'
            },
            {
                dayOfTheWeek: 'quarta-feira',
                hour: '9:30 - 11:30'
            }
        ],
        status: 'Em Andamento'
    },
    {
        title: 'Modelagem Mecânica I',
        code: 'CEG328',
        teacher: chance.name(),
        hours: 45,
        schedule: [
            {
                dayOfTheWeek: 'segunda-feira',
                hour: '9:30 - 11:30'
            },
            {
                dayOfTheWeek: 'quarta-feira',
                hour: '9:30 - 11:30'
            }
        ],
        status: 'Em Andamento'
    },
    {
        title: 'Prototipagem I',
        code: 'CEG332',
        teacher: chance.name(),
        hours: 60,
        schedule: [
            {
                dayOfTheWeek: 'segunda-feira',
                hour: '9:30 - 11:30'
            },
            {
                dayOfTheWeek: 'quarta-feira',
                hour: '9:30 - 11:30'
            }
        ],
        status: 'Em Andamento'
    },
    {
        title: 'Projeto de Móveis II',
        code: 'CEG327',
        teacher: chance.name(),
        hours: 45,
        schedule: [
            {
                dayOfTheWeek: 'segunda-feira',
                hour: '9:30 - 11:30'
            },
            {
                dayOfTheWeek: 'quarta-feira',
                hour: '9:30 - 11:30'
            }
        ],
        status: 'Em Andamento'
    },
    {
        title: 'Projeto de Produto II',
        code: 'CEG331',
        teacher: chance.name(),
        hours: 60,
        schedule: [
            {
                dayOfTheWeek: 'segunda-feira',
                hour: '9:30 - 11:30'
            },
            {
                dayOfTheWeek: 'quarta-feira',
                hour: '9:30 - 11:30'
            }
        ],
        status: 'Em Andamento'
    },
    {
        title: 'Seminário de Expressão Gráfica',
        code: 'CEG335',
        teacher: chance.name(),
        hours: 60,
        schedule: [
            {
                dayOfTheWeek: 'segunda-feira',
                hour: '9:30 - 11:30'
            },
            {
                dayOfTheWeek: 'quarta-feira',
                hour: '9:30 - 11:30'
            }
        ],
        status: 'Em Andamento'
    },
    {
        title: 'Trabalho de Conclusão de Curso I',
        code: 'CEG336',
        teacher: chance.name(),
        hours: 60,
        schedule: [
            {
                dayOfTheWeek: 'segunda-feira',
                hour: '9:30 - 11:30'
            },
            {
                dayOfTheWeek: 'quarta-feira',
                hour: '9:30 - 11:30'
            }
        ],
        status: 'Em Andamento'
    },
    {
        title: 'História do Desenho',
        code: 'CEG264',
        teacher: chance.name(),
        hours: 60,
        schedule: [
            {
                dayOfTheWeek: 'quarta-feira',
                hour: '15:30 - 17:30'
            },
            {
                dayOfTheWeek: 'sexta-feira',
                hour: '13:30 - 15:30'
            }
        ],
        status: 'Em Andamento'
    },
    {
        title: 'Fundamentos do Web Design I',
        code: 'CEG256',
        teacher: chance.name(),
        hours: 60,
        schedule: [
            {
                dayOfTheWeek: 'terça-feira',
                hour: '7:30 - 9:30'
            },
            {
                dayOfTheWeek: 'quinta-feira',
                hour: '7:30 - 9:30'
            }
        ],
        status: 'Em Andamento'
    },
];

export default enrollmentMock;