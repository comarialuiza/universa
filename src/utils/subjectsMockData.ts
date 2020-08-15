const subjectsMock = [
    { 
        semesterNumber: 1,
        subjects: [
            {
                title: 'Introdução à Expressão Gráfica',
                code: 'CEG301',
                teacher: 'Emilly Martins Goncalves',
                grade: 80,
                frequency: 70,
                status: 'approved',

            },
            {
                title: 'Geometria Descritiva I',
                code: 'CEG303',
                teacher: 'Yasmin Lima Almeida',
                grade: 55,
                frequency: 90,
                status: 'danger'
            },
            {
                title: 'Desenho Geométrico I',
                code: 'CEG302',
                teacher: 'Isabelle Araujo Fernandes',
                grade: 90,
                frequency: 95,
                status: 'approved'
            },
            {
                title: 'Representação Gráfica I',
                code: 'CEG307',
                teacher: 'Tomás Oliveira Dias',
                grade: 100,
                frequency: 100,
                status: 'approved'
            },
            {
                title: 'Composição I',
                code: 'CEG309',
                teacher: 'Davi Souza Santos',
                grade: 40,
                frequency: 50,
                status: 'failed'
            },
        ]
    },
    {
        semesterNumber: 2,
        subjects: [
            {
                title: 'Introdução à Expressão Gráfica',
                code: 'CEG301',
                teacher: 'Joaquina Estefina',
                grade: 80,
                frequency: 60,
                status: 'approved',
            },
        ]
    }
    
];

export default subjectsMock;