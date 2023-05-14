const menu_data = [
  {
    id: 1,
    hasDropdown: false,
    title: 'Početna',
    link: '/',
  },
  {
    id:2,
    hasDropdown: false,
    title: 'O Nama',
    link: '/about',
  },
  {
    id: 3,
    title: 'Programi',
    megaMenuTwo: true,
    megaMenu: false,
    link: '/programs',
    mega_menus_two: [
      {
        title: 'List 1', link: '#',
        submenus: [
          {title:'Konferencija',link:'/program-details', count:'01', age:'4-5 Yrs'},
          {title:'Eksperiment',link:'/program-details', count:'02', age:'3-4 Yrs'},
          {title:'Šetnja',link:'/program-details', count:'03', age:'2-3 Yrs'},
        ]
      },
      {
        title: 'List 2', link: '#',
        submenus: [
          {title:'Panel',link:'/program-details', count:'04', age:'3-4 Yrs'},
          {title:'Hang Over',link:'/program-details', count:'05', age:'4-5 Yrs'},
          {title:'Žurka',link:'/program-details', count:'06', age:'5-6 Yrs'},
        ]
      },
      {
        title: 'List 3', link: '#',
        submenus: [
          {programImg: true, title:'',link:'/programs', img:'/assets/img/logo/impuls-logo.png'},
        ]
      }
    ]
  },
  {
    id:7,
    hasDropdown: false,
    title: 'Kontakt',
    link: '/contact',
  },
]

export default menu_data;
