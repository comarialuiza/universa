export const fifteenWeekSemester = [];

export const sixteenWeekSemester = [];

export const eighteenWeekSemester = [];

const currentYear = new Date().getFullYear();

const dataSource = [
    {
      id: 0,
      name: 'Google I/O',
      startDate: new Date(currentYear, 4, 28),
      endDate: new Date(currentYear, 4, 29)
    },
    {
      id: 1,
      name: 'Microsoft Convergence',
      startDate: new Date(currentYear, 2, 16),
      endDate: new Date(currentYear, 2, 19)
    },
    {
      id: 2,
      name: 'Microsoft Build Developer Conference',
      startDate: new Date(currentYear, 3, 29),
      endDate: new Date(currentYear, 4, 1)
    },
    {
      id: 3,
      name: 'Apple Special Event',
      startDate: new Date(currentYear, 8, 1),
      endDate: new Date(currentYear, 8, 1)
    },
    {
      id: 4,
      name: 'Apple Keynote',
      startDate: new Date(currentYear, 8, 9),
      endDate: new Date(currentYear, 8, 9)
    },
    {
      id: 5,
      name: 'Chrome Developer Summit',
      startDate: new Date(currentYear, 10, 17),
      endDate: new Date(currentYear, 10, 18)
    },
    {
      id: 6,
      name: 'F8 2015',
      startDate: new Date(currentYear, 2, 25),
      endDate: new Date(currentYear, 2, 26)
    },
    {
      id: 7,
      name: 'Yahoo Mobile Developer Conference',
      startDate: new Date(currentYear, 7, 25),
      endDate: new Date(currentYear, 7, 26)
    },
    {
      id: 8,
      name: 'Android Developer Conference',
      startDate: new Date(currentYear, 11, 1),
      endDate: new Date(currentYear, 11, 4)
    },
    {
      id: 9,
      name: 'LA Tech Summit',
      startDate: new Date(currentYear, 10, 17),
      endDate: new Date(currentYear, 10, 17)
    }
]

export default dataSource;