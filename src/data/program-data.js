import program_1_primary from '@assets/img/program/program-setnja.png';
import program_1_secondary from '@assets/img/program/program-setnja-mapa.jpg'
import program_1_ternary from '@assets/img/program/program-setnja-mapa.jpg'
import program_2 from '@assets/img/program/program-setnja.png';
import program_3 from '@assets/img/program/program-setnja.png';
import program_4 from '@assets/img/program/program-setnja.png';
import program_5 from '@assets/img/program/program-setnja.png';
import program_6 from '@assets/img/program/program-setnja.png';
import ProgramIconOne from '@svg/program-icon-1';
import ProgramIconTwo from '@svg/program-icon-2';
import ProgramIconThree from '@svg/program-icon-3';
import ProgramIconFour from '@svg/program-icon-4';
import ProgramIconFive from '@svg/program-icon-5';
import ProgramIconSix from '@svg/program-icon-6';
import author_1 from "@assets/img/program/author-1.png";

const program_data = [
  {
    id:1,
    title:'Šetnja',
    img:program_1_primary,
    img_2:program_1_secondary,
    img_3:program_1_ternary,
    description:'In sit amet nibh mi. In sed pulvinar ligula. Nunc consectetur fringilla arcu ac molestie',
    icon: <ProgramIconOne />,
    clrClass:'clr-1',
    authorImg:author_1,
    authorName:'Teodora Jonuzović',
    paragraph_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nibh mi. In sed pulvinar ligula. Integer sit amet urna et enim pulvinar eleifend. Nunc consectetur fringilla arcu ac molestie. Proin lobortis consectetur nisi ut aliquam. Suspendisse elit nisl, pretium et blandit vitae, pellentesque in justo.',
    paragraph_2: 'Nulla hendrerit lacus mi, non placerat neque fermentum egestas. Maecenas eget purus nec elit varius vehicula a placerat enim. Donec sit amet tellus a quam convallis mattis eget sed mi. Mauris vel cursus tellus. Donec aliquet dolor sit amet nibh bibendum dictum. Donec tempus quam nulla, eu tincidunt mauris lobortis aliquet. Praesent commodo leo sem, a tincidunt ligula sollicitudin vel. ',
    date_start: '19.05.2023',
    duration: '5h',
    delay:'.2s',
    background_image:'walking-banner.jpg',
    programs:[
      {
        id: 1,
        title: 'Uzrast',
        subTitle: '-',
      },
      {
        id: 2,
        title: 'Početak',
        subTitle: '19.05.2023',
      },
      {
        id: 3,
        title: 'Trajanje',
        subTitle: '5h',
      }
    ]
  },
  {
    id:2,
    title:'Šetnja',
    img:program_2,
    description:'In sit amet nibh mi. In sed pulvinar ligula. Nunc consectetur fringilla arcu ac molestie',
    icon: <ProgramIconTwo />,
    clrClass:'clr-2',
    delay:'.3s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 195.00,
    programs:[
      {
        id: 1,
        title: 'Uzrast',
        subTitle: '-',
      },
      {
        id: 2,
        title: 'Početak',
        subTitle: '19.05.2023',
      },
      {
        id: 3,
        title: 'Trajanje',
        subTitle: '5h',
      }
    ]
  },
  {
    id:3,
    title:'Šetnja',
    img:program_3,
    description:'In sit amet nibh mi. In sed pulvinar ligula. Nunc consectetur fringilla arcu ac molestie',
    icon: <ProgramIconThree />,
    clrClass:'clr-3',
    delay:'.4s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 285.00,
    programs:[
      {
        id: 1,
        title: 'Uzrast',
        subTitle: '-',
      },
      {
        id: 2,
        title: 'Početak',
        subTitle: '19.05.2023',
      },
      {
        id: 3,
        title: 'Trajanje',
        subTitle: '5h',
      }
    ]
  },
  {
    id:4,
    title:'Šetnja',
    img:program_4,
    description:'In sit amet nibh mi. In sed pulvinar ligula. Nunc consectetur fringilla arcu ac molestie',
    icon: <ProgramIconFour />,
    clrClass:'clr-4',
    delay:'.5s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 140.00,
    programs:[
      {
        id: 1,
        title: 'Uzrast',
        subTitle: '-',
      },
      {
        id: 2,
        title: 'Početak',
        subTitle: '19.05.2023',
      },
      {
        id: 3,
        title: 'Trajanje',
        subTitle: '5h',
      }
    ]
  },
  {
    id:5,
    title:'Šetnja',
    img:program_5,
    description:'In sit amet nibh mi. In sed pulvinar ligula. Nunc consectetur fringilla arcu ac molestie',
    icon: <ProgramIconFive />,
    clrClass:'clr-5',
    delay:'.6s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 150.00,
    programs:[
      {
        id: 1,
        title: 'Uzrast',
        subTitle: '-',
      },
      {
        id: 2,
        title: 'Početak',
        subTitle: '19.05.2023',
      },
      {
        id: 3,
        title: 'Trajanje',
        subTitle: '5h',
      }
    ]
  },
  {
    id:6,
    title:'Šetnja',
    img:program_6,
    description:'In sit amet nibh mi. In sed pulvinar ligula. Nunc consectetur fringilla arcu ac molestie',
    icon: <ProgramIconSix />,
    clrClass:'clr-6',
    delay:'.7s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 170.00,
    background_image:'walking-banner.jpg',
    programs:[
      {
        id: 1,
        title: 'Uzrast',
        subTitle: '-',
      },
      {
        id: 2,
        title: 'Početak',
        subTitle: '19.05.2023',
      },
      {
        id: 3,
        title: 'Trajanje',
        subTitle: '5h',
      }
    ]
  },
  
]

export default program_data;