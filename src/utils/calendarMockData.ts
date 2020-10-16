import { v4 as uuid } from 'uuid';

const currentYear = new Date().getFullYear();

export const fifteenWeekSemester = [
  {
    id: uuid(),
    name: 'Primeiro dia letivo do primeiro semestre de 2020',
    startDate: new Date(currentYear, 2, 2),
    endDate: new Date(currentYear, 2, 2)
  },
  {
    id: uuid(),
    name: 'Último dia letivo do primeiro semestre de 2020',
    startDate: new Date(currentYear, 5, 27),
    endDate: new Date(currentYear, 5, 27)
  },
  {
    id: uuid(),
    name: 'Exames finais do primeiro semestre para calendário de 15 semanas letivas',
    startDate: new Date(currentYear, 6, 6),
    endDate: new Date(currentYear, 6, 11)
  },
  {
    id: uuid(),
    name: 'Primeiro dia letivo do segundo semestre de 2020',
    startDate: new Date(currentYear, 6, 27),
    endDate: new Date(currentYear, 6, 27)
  },
  {
    id: uuid(),
    name: 'Feira de Profissões',
    startDate: new Date(currentYear, 7, 27),
    endDate: new Date(currentYear, 7, 30)
  },
  {
    id: uuid(),
    name: 'Semana de Ensino, Pesquisa e Extensão',
    startDate: new Date(currentYear, 9, 20),
    endDate: new Date(currentYear, 9, 22)
  },
  {
    id: uuid(),
    name: 'Último dia letivo do segundo semestre de 2020',
    startDate: new Date(currentYear, 10, 30),
    endDate: new Date(currentYear, 10, 30)
  },
  {
    id: uuid(),
    name: 'Exames finais do segundo semestre para calendário de 15 semanas letivas',
    startDate: new Date(currentYear, 11, 7),
    endDate: new Date(currentYear, 11, 12)
  },
];

/* export const fifteenWeekSemester = [
  {
    id: uuid(),
    name: 'Feriado: Confraternização Universal',
    startDate: new Date(currentYear, 1, 1),
    endDate: new Date(currentYear, 1, 1)
  },
  {
    id: uuid(),
    name: 'Período para solicitação, pelo aluno, no Portal do Aluno, de matrículas em disciplinas anuais e disciplinas e unidades curriculares semestrais ofertadas para o 1º semestre de 2020 e em Línguas Instrumentais.',
    startDate: new Date(currentYear, 0, 2),
    endDate: new Date(currentYear, 0, 19)
  },
  {
    id: uuid(),
    name: 'Período para solicitação de matrícula em PC (Participação em Convênio), pelo aluno, na Agência UFPR Internacional (AUI) para o 1º semestre de 2020.',
    startDate: new Date(currentYear, 0, 2),
    endDate: new Date(currentYear, 2, 6)
  },
  {
    id: uuid(),
    name: 'Primeiro período para Registro Acadêmico dos alunos ingressantes no ano letivo de 2020.',
    startDate: new Date(currentYear, 0, 13),
    endDate: new Date(currentYear, 2, 18)
  },
  {
    id: uuid(),
    name: 'Primeiro dia letivo do 1º semestre de 2020 para as disciplinas de estágio dos 10º, 11º e 12º períodos do curso de Medicina (Campus Curitiba).',
    startDate: new Date(currentYear, 0, 20),
    endDate: new Date(currentYear, 0, 20)
  },
  {
    id: uuid(),
    name: 'Feriado em Palotina: Padroeiro do Município.',
    startDate: new Date(currentYear, 0, 22),
    endDate: new Date(currentYear, 0, 22)
  },
  {
    id: uuid(),
    name: 'Período de processamento de matrículas dos alunos veteranos pela AGTIC.',
    startDate: new Date(currentYear, 0, 27),
    endDate: new Date(currentYear, 0, 31)
  },
  {
    id: uuid(),
    name: 'Prazo final para as Direções de Setor encaminharem, para as Coordenações de Curso, a data de colação de grau (sem cerimônia) do 1º semestre de 2020.',
    startDate: new Date(currentYear, 0, 31),
    endDate: new Date(currentYear, 0, 31)
  },
  {
    id: uuid(),
    name: 'Semana de Planejamento do ano letivo de 2020 para Coordenações de Curso, Departamentos e Unidades Administrativas.',
    startDate: new Date(currentYear, 1, 3),
    endDate: new Date(currentYear, 1, 7)
  },
  {
    id: uuid(),
    name: 'Período para os alunos solicitarem ajustes de matrícula nas Coordenações de Curso, conforme programação estabelecida pelas próprias Coordenações.',
    startDate: new Date(currentYear, 1, 3),
    endDate: new Date(currentYear, 1, 14)
  },
  {
    id: uuid(),
    name: 'Período para as Coordenações de Curso cadastrarem as correções de matrículas no Sistema de Gestão Acadêmica.',
    startDate: new Date(currentYear, 1, 3),
    endDate: new Date(currentYear, 1, 18)
  },
  {
    id: uuid(),
    name: 'Período de processamento de matrículas dos alunos ingressantes no 1º semestre de 2020 pela AGTIC.',
    startDate: new Date(currentYear, 1, 6),
    endDate: new Date(currentYear, 1, 7)
  },
  {
    id: uuid(),
    name: 'Primeiro dia letivo do 1º semestre de 2020 para as disciplinas e unidades curriculares para os cursos semestrais de 18 semanas.',
    startDate: new Date(currentYear, 1, 10),
    endDate: new Date(currentYear, 1, 10)
  },
  {
    id: uuid(),
    name: 'Primeiro dia letivo do 1º semestre de 2020 para as disciplinas e unidades curriculares para o curso de Medicina (Campus Toledo) e para os 1º ao 9º períodos do curso de Medicina (Campus Curitiba).',
    startDate: new Date(currentYear, 1, 10),
    endDate: new Date(currentYear, 1, 10)
  },
  {
    id: uuid(),
    name: 'Primeiro dia letivo do 1º semestre de 2020 para as disciplinas e unidades curriculares para o curso de Medicina (Campus Toledo) e para os 1º ao 9º períodos do curso de Medicina (Campus Curitiba).',
    startDate: new Date(currentYear, 1, 10),
    endDate: new Date(currentYear, 1, 10)
  },
  {
    id: uuid(),
    name: 'Início do Programa de Monitoria para o 1º semestre de 2020.',
    startDate: new Date(currentYear, 1, 10),
    endDate: new Date(currentYear, 1, 10)
  },
  {
    id: uuid(),
    name: 'Período para confirmação da matrícula e efetiva ocupação da vaga pelos alunos ingressantes no 1º semestre de 2020 (Res. 37/97-CEPE, Art. 32).',
    startDate: new Date(currentYear, 1, 10),
    endDate: new Date(currentYear, 1, 12)
  },
  {
    id: uuid(),
    name: 'Recepção dos alunos ingressantes no 1º semestre de 2020 (Res. 11/09COUN).',
    startDate: new Date(currentYear, 1, 10),
    endDate: new Date(currentYear, 1, 14)
  },
  {
    id: uuid(),
    name: 'Envio, pelas Coordenações de Curso à COPAP, da relação dos alunos ingressantes no 1º semestre de 2020 que deixaram de confirmar a matrícula e efetivar a ocupação da vaga (Res. 37/97-CEPE, Art. 32).',
    startDate: new Date(currentYear, 1, 13),
    endDate: new Date(currentYear, 1, 13)
  },
  {
    id: uuid(),
    name: 'Prazo final para os alunos solicitarem, nas Coordenações de Curso, a dispensa de prérequisito e correquisito para o 1º semestre de 2020 (Res. 63/10-CEPE).',
    startDate: new Date(currentYear, 1, 14),
    endDate: new Date(currentYear, 1, 14)
  },
  {
    id: uuid(),
    name: 'Prazo final para os alunos solicitarem, nas Coordenações de Curso, realização de exames de adiantamento (Res. 92/13-CEPE).',
    startDate: new Date(currentYear, 1, 14),
    endDate: new Date(currentYear, 1, 14)
  },
  {
    id: uuid(),
    name: 'Prazo final para os alunos solicitarem, nas Coordenações de Curso ou Unidades Administrativas, destrancamento de curso para o 1º semestre de 2020 (IN 01/16-PROGRAD, Art. 10 e Art. 14).',
    startDate: new Date(currentYear, 1, 14),
    endDate: new Date(currentYear, 1, 14)
  },
  {
    id: uuid(),
    name: 'Prazo final para os alunos que não efetuaram matrícula em disciplinas ofertadas para o 1º semestre de 2020 protocolarem trancamento de curso nas Coordenações de Curso (Res. 97-A/15-CEPE).',
    startDate: new Date(currentYear, 1, 14),
    endDate: new Date(currentYear, 1, 14)
  },
  {
    id: uuid(),
    name: 'Prazo final para deliberação pelos Colegiados de Curso das solicitações de quebra de pré-requisito e correquisito (Res. 63/10-CEPE) e de exames de adiantamento (Res.92/13-CEPE) para o 1º semestre de 2020.',
    startDate: new Date(currentYear, 1, 21),
    endDate: new Date(currentYear, 1, 21)
  },
  {
    id: uuid(),
    name: 'Recesso.',
    startDate: new Date(currentYear, 1, 22),
    endDate: new Date(currentYear, 1, 22)
  },
  {
    id: uuid(),
    name: 'Recesso.',
    startDate: new Date(currentYear, 1, 24),
    endDate: new Date(currentYear, 1, 24)
  },
  {
    id: uuid(),
    name: 'Carnaval.',
    startDate: new Date(currentYear, 1, 25),
    endDate: new Date(currentYear, 1, 25)
  },
  {
    id: uuid(),
    name: 'Prazo final para os alunos ingressantes no 1º semestre de 2020 e com registro acadêmico efetivado até 12/02 solicitarem equivalência de disciplinas e unidades curriculares (Res. 92/13-CEPE).',
    startDate: new Date(currentYear, 1, 28),
    endDate: new Date(currentYear, 1, 28)
  },
  {
    id: uuid(),
    name: 'Fim do período para solicitação de matrícula em PC (Participação em Convênio) na AUI, pelo aluno, para o 1º semestre de 2020.',
    startDate: new Date(currentYear, 2, 6),
    endDate: new Date(currentYear, 2, 6)
  },
  {
    id: uuid(),
    name: 'Fim do período para as Coordenações de Curso cadastrarem as correções de matrículas no Sistema de Gestão Acadêmica',
    startDate: new Date(currentYear, 2, 18),
    endDate: new Date(currentYear, 2, 18)
  },
  {
    id: uuid(),
    name: 'Fim do primeiro período para Registro Acadêmico dos alunos ingressantes no ano letivo de 2020.',
    startDate: new Date(currentYear, 2, 18),
    endDate: new Date(currentYear, 2, 18)
  },
  {
    id: uuid(),
    name: 'Prazo final para a AUI remover as matrículas dos alunos com previsão de saída para intercâmbio no 1º semestre de 2020.',
    startDate: new Date(currentYear, 2, 18),
    endDate: new Date(currentYear, 2, 18)
  },
  {
    id: uuid(),
    name: 'Prazo final para a AUI cadastrar as matrículas em PC dos alunos com previsão de saída para intercâmbio no 1º semestre de 2020.',
    startDate: new Date(currentYear, 2, 18),
    endDate: new Date(currentYear, 2, 18)
  },
  {
    id: uuid(),
    name: 'Feriado em Pontal do Paraná Padroeiro do Munícipio.',
    startDate: new Date(currentYear, 2, 19),
    endDate: new Date(currentYear, 2, 19)
  },
  {
    id: uuid(),
    name: 'Período para solicitação de matrícula em disciplinas isoladas ou eletivas mediante autorização de vaga fornecida pelo departamento responsável pela disciplina.',
    startDate: new Date(currentYear, 2, 19),
    endDate: new Date(currentYear, 2, 20)
  },
  {
    id: uuid(),
    name: 'Prazo final para as Coordenações de Curso encaminharem à COPAP os processos constando os alunos que integralizaram o curso e que deverão colar grau.',
    startDate: new Date(currentYear, 2, 20),
    endDate: new Date(currentYear, 2, 20)
  },
  {
    id: uuid(),
    name: 'Prazo final para os Departamentos inativarem, no Sistema de Gestão Acadêmica, as turmas sem matrículas (Res. 37/97-CEPE, Art. 50, alínea "d").',
    startDate: new Date(currentYear, 2, 27),
    endDate: new Date(currentYear, 2, 27)
  },
  {
    id: uuid(),
    name: 'Impressão pelos docentes, pelo Portal do Professor, dos Diários de Classe definitivos das turmas de disciplinas ofertadas para o 1º semestre de 2020.',
    startDate: new Date(currentYear, 2, 27),
    endDate: new Date(currentYear, 2, 27)
  },
  {
    id: uuid(),
    name: 'Prazo final para os Colegiados de Curso encaminharem à PROGRAD processos de ajuste curricular e de adição curricular com previsão para início no 2º semestre de 2020.',
    startDate: new Date(currentYear, 2, 27),
    endDate: new Date(currentYear, 2, 27)
  },
  {
    id: uuid(),
    name: 'Prazo final para os alunos solicitarem nos Departamentos, Coordenações de Curso ou Unidades Administrativas, correções no histórico escolar relativas ao 2º semestre de 2019 (Res. 37/97-CEPE, Art. 108, § único).',
    startDate: new Date(currentYear, 2, 27),
    endDate: new Date(currentYear, 2, 27)
  },
  {
    id: uuid(),
    name: 'Prazo final para as Coordenações de Curso comunicarem à COPAP mudança de habilitação de alunos para vigência a partir do 1º semestre de 2020 (Res. 37/97-CEPE, Art. 36, § 2º).',
    startDate: new Date(currentYear, 2, 31),
    endDate: new Date(currentYear, 2, 31)
  },
]; */

export const eighteenWeekSemester = [
  {
    id: uuid(),
    name: 'Feriado: Confraternização Universal',
    startDate: new Date(currentYear, 1, 1),
    endDate: new Date(currentYear, 1, 1)
  },
];