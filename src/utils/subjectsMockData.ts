import Chance from 'chance';

const chance = new Chance();

const subjectsMock = [
    { 
        semesterNumber: 1,
        active: false,
        subjects: [
            {
                title: 'Introdução à Expressão Gráfica',
                code: 'CEG301',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Geometria Descritiva I',
                code: 'CEG303',
                teacher: chance.name(),
                hours: 60,
                grade: 55,
                frequency: 90,
                status: 'danger'
            },
            {
                title: 'Desenho Geométrico I',
                code: 'CEG302',
                teacher: chance.name(),
                hours: 60,
                grade: 90,
                frequency: 95,
                status: 'approved'
            },
            {
                title: 'Representação Gráfica I',
                code: 'CEG307',
                teacher: chance.name(),
                hours: 60,
                grade: 100,
                frequency: 100,
                status: 'approved'
            },
            {
                title: 'Composição I',
                code: 'CEG309',
                teacher: chance.name(),
                hours: 60,
                grade: 40,
                frequency: 50,
                status: 'failed'
            },
        ]
    },
    {
        semesterNumber: 2,
        active: false,
        subjects: [
            {
                title: 'Matemática Aplicada à Expressão Gráfica',
                code: 'CEG304',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Desenho Técnico e CAD',
                code: 'CEG306',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Representação Gráfica II',
                code: 'CEG308',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Composição II',
                code: 'CEG310',
                teacher: chance.name(),
                hours: 45,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'História das Artes Visuais',
                code: 'CEG316',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Introdução à Arquitetura',
                code: 'CEG317',
                teacher: chance.name(),
                hours: 45,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
        ]
    },
    {
        semesterNumber: 3,
        active: false,
        subjects: [
            {
                title: 'Fundamentos da Programação Aplicados à Expressão Gráfica',
                code: 'CEG305',
                teacher: chance.name(),
                hours: 60,
                grade: 98,
                frequency: 60,
                status: 'approved'
            },
            {
                title: 'Fundamentos da Comunicação Visual',
                code: 'CEG311',
                teacher: chance.name(),
                hours: 45,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Modelagem Digital e Animação I',
                code: 'CEG313',
                teacher: chance.name(),
                hours: 45,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Tecnologia dos Materiais',
                code: 'CEG320',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Introdução ao Design',
                code: 'CEG318',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Desenho Arquitetônico I',
                code: 'CEG322',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
        ]
    },
    {
        semesterNumber: 4,
        active: false,
        subjects: [
            {
                title: 'Modelagem Digital e Animação II',
                code: 'CEG314',
                teacher: chance.name(),
                hours: 45,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Ergonomia',
                code: 'CEG319',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Processos de Fabricação',
                code: 'CEG321',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Modelagem da Informação e da Construção',
                code: 'CEG325',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Modelagem Mecânica I',
                code: 'CEG328',
                teacher: chance.name(),
                hours: 45,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Prototipagem I',
                code: 'CEG332',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
        ]
    },
    {
        semesterNumber: 5,
        active: false,
        subjects: [
            {
                title: 'Modelagem Digital e Animação III',
                code: 'CEG315',
                teacher: chance.name(),
                hours: 45,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Prototipagem II',
                code: 'CEG324',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Projeto de Móveis I',
                code: 'CEG326',
                teacher: chance.name(),
                hours: 45,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Projeto de Produto I',
                code: 'CEG330',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Modelagem 3D em Design',
                code: 'CEG333',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
        ]
    },
    {
        semesterNumber: 6,
        active: true,
        subjects: [
            {
                title: 'Tratamento e Edição de Imagem',
                code: 'CEG312',
                teacher: chance.name(),
                hours: 45,
                grade: 91,
                frequency: 60,
                status: 'approved',
                gradeProvider: [
                    {
                        id: 1,
                        title: 'Prova 1',
                        grade: chance.natural({min: 50, max: 100}),
                    },
                    { 
                        id: 2,
                        title: 'Prova 2',
                        grade: chance.natural({min: 50, max: 100}),
                    },
                    {
                        id: 3,
                        title: 'Trabalho sobre Semiótica',
                        grade: chance.natural({min: 50, max: 100}),
                    },
                    { 
                        id: 4,
                        title: 'Relatório sobre Photoshop',
                        grade: chance.natural({min: 50, max: 100}),
                    },
                    {
                        id: 5,
                        title: 'Trabalho final da disciplina',
                        grade: chance.natural({min: 50, max: 100}),
                    }
                ]
            },
            {
                title: 'Projeto de Móveis II',
                code: 'CEG327',
                teacher: chance.name(),
                hours: 45,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Ambiente Construído',
                code: 'CEG323',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Projeto de Produto II',
                code: 'CEG331',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Fabricação Digital',
                code: 'CEG334',
                teacher: chance.name(),
                hours: 45,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Seminário de Expressão Gráfica',
                code: 'CEG335',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
        ]
    },
    {
        semesterNumber: 7,
        active: false,
        subjects: [
            {
                title: 'Trabalho de Conclusão de Curso I',
                code: 'CEG336',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'História do Desenho',
                code: 'CEG264',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
            {
                title: 'Fundamentos do Web Design I',
                code: 'CEG256',
                teacher: chance.name(),
                hours: 60,
                grade: chance.natural({min: 50, max: 100}),
                frequency: chance.natural({min: 70, max: 100}),
                status: 'approved'
            },
        ]
    }
    
];

export default subjectsMock;