export default [
  // {
  //   id: 0,
  //   name: 'Выполненные проекты АТЭ',
  //   href: '/project/?filters[status][$eq]=done',
  //   order: 1,
  // },
  {
    id: 1,
    name: 'Текущие и выполненные проекты АТЭ',
    pathname: '/project',
    // search: '?filters[status][$eq]=progress&filters[status][$eq]=done', // done|progress|new
    order: 20,
  },
  {
    id: 2,
    name: 'Филиалы и Представительства АТЭ',
    pathname: '/branch',
    // search: '',
    order: 10,
  },
  {
    id: 3,
    name: 'История АО «Атомтехэнерго»',
    pathname: '/history',
    // search: '',
    order: 40,
  },
  {
    id: 4,
    name: 'Этапы пусконаладочных работ АЭС',
    pathname: '/work-stages',
    // search: '',
    order: 50,
  },
  // {
  //   id: 5,
  //   name: 'Тест Verge3D',
  //   href: '/test/',
  //   order: 6,
  // },
  // {
  //   id: 6,
  //   name: 'Тест Verge3D 2',
  //   href: '/test-2/',
  //   order: 7,
  // },
  
  // {
  //   id: 7,
  //   name: 'Все проекты',
  //   href: '/project/',
  //   order: 8,
  // },
  
  // {
  //   id: 8,
  //   name: 'Зарубежные проекты АТЭ',
  //   href: '/project/?filters[location][$ne]=ru',
  //   order: 80,
  // },
  
  {
    id: 9,
    name: 'Портфель заказов АТЭ',
    pathname: '/portfolio',
    // search: '',
    order: 30,
  },
]