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

export const eighteenWeekSemester = [
  {
    id: uuid(),
    name: 'Primeiro dia letivo do primeiro semestre de 2020',
    startDate: new Date(currentYear, 2, 2),
    endDate: new Date(currentYear, 2, 2)
  },
  {
    id: uuid(),
    name: 'Último dia letivo do primeiro semestre de 2020',
    startDate: new Date(currentYear, 6, 13),
    endDate: new Date(currentYear, 6, 13)
  },
  {
    id: uuid(),
    name: 'Exames finais do primeiro semestre para calendário de 15 semanas letivas',
    startDate: new Date(currentYear, 6, 20),
    endDate: new Date(currentYear, 6, 24)
  },
  {
    id: uuid(),
    name: 'Primeiro dia letivo do segundo semestre de 2020',
    startDate: new Date(currentYear, 7, 10),
    endDate: new Date(currentYear, 7, 10)
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
    startDate: new Date(currentYear, 11, 10),
    endDate: new Date(currentYear, 11, 10)
  },
  {
    id: uuid(),
    name: 'Exames finais do segundo semestre para calendário de 15 semanas letivas',
    startDate: new Date(currentYear, 11, 14),
    endDate: new Date(currentYear, 11, 18)
  },
];