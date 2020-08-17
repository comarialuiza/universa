const subjectsMock = [
    { 
        semesterNumber: 1,
        active: false,
        subjects: [
            {
                title: 'Introdução à Expressão Gráfica',
                code: 'CEG301',
                teacher: 'Emilly Martins Goncalves',
                hours: 60,
                grade: 80,
                frequency: 70,
                status: 'approved'
            },
            {
                title: 'Geometria Descritiva I',
                code: 'CEG303',
                teacher: 'Yasmin Lima Almeida',
                hours: 60,
                grade: 55,
                frequency: 90,
                status: 'danger'
            },
            {
                title: 'Desenho Geométrico I',
                code: 'CEG302',
                teacher: 'Isabelle Araujo Fernandes',
                hours: 60,
                grade: 90,
                frequency: 95,
                status: 'approved'
            },
            {
                title: 'Representação Gráfica I',
                code: 'CEG307',
                teacher: 'Tomás Oliveira Dias',
                hours: 60,
                grade: 100,
                frequency: 100,
                status: 'approved'
            },
            {
                title: 'Composição I',
                code: 'CEG309',
                teacher: 'Davi Souza Santos',
                hours: 60,
                grade: 40,
                frequency: 50,
                status: 'failed'
            },
        ]
    },
    {
        semesterNumber: 2,
        active: true,
        subjects: [
            {
                title: 'Matemática Aplicada à Expressão Gráfica',
                code: 'CEG304',
                teacher: 'Joaquina Estefina',
                hours: 60,
                grade: 80,
                frequency: 60,
                status: 'approved'
            },
            {
                title: 'Desenho Técnico e CAD',
                code: 'CEG306',
                teacher: 'Joaquina Estefina',
                hours: 60,
                grade: 80,
                frequency: 60,
                status: 'approved'
            },
            {
                title: 'Representação Gráfica II',
                code: 'CEG308',
                teacher: 'Joaquina Estefina',
                hours: 60,
                grade: 80,
                frequency: 60,
                status: 'approved'
            },
            {
                title: 'Composição II',
                code: 'CEG304',
                teacher: 'Joaquina Estefina',
                hours: 45,
                grade: 80,
                frequency: 60,
                status: 'approved'
            },
            {
                title: 'História das Artes Visuais',
                code: 'CEG316',
                teacher: 'Joaquina Estefina',
                hours: 60,
                grade: 80,
                frequency: 60,
                status: 'approved'
            },
            {
                title: 'Introdução à Arquitetura',
                code: 'CEG317',
                teacher: 'Joaquina Estefina',
                hours: 45,
                grade: 80,
                frequency: 60,
                status: 'approved'
            },
        ]
    }
    
];

export default subjectsMock;