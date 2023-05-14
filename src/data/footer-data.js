import logo from '@assets/img/logo/logo.png';
import logoWhite from '@assets/img/logo/logo-white.png';

const footer_data = {
    "description": {
        id: 1,
        logo: logo,
        logoWhite: logoWhite,
        teaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nibh mi. In sed pulvinar ligula.',
        socialTitle: 'Socijalne Mreže',
        newsTitle: 'Ostanite Informisani',
        newsBtn: 'Pretplati Se',
        social_icons: [
            {
                id: 1,
                icon: 'fa-brands fa-facebook-f',
                url: 'https://www.facebook.com/',
                name: 'Facebook',
            },
            {
                id: 2,
                icon: 'fa-brands fa-instagram',
                url: 'https://instagram.com/',
                name: 'Instagram',
            },
            {
                id: 3,
                icon: 'fa-brands fa-youtube',
                url: 'https://www.youtube.com/',
                name: 'Youtube',
            }
        ]
    },
    "quick_links": {
        id: 2,
        title: 'Brzi Linkovi',
        menus: [
            {
                id: 1,
                menu: 'O Nama',
                path: '/about',
            },
            {
                id: 2,
                menu: 'Programi',
                path: '/programs',
            },
            {
                id: 3,
                menu: 'Naši Studenti',
                path: '/students',
            },
            {
                id: 4,
                menu: 'Contact',
                path: '/contact',
            }
        ]
    },
    "program_links": {
        id: 3,
        title: 'Programi',
        programs: [
            {
                id: 1,
                menu: 'Šetnja',
                path: '/program-details/1',
            },
        ]
    },
    /*"customer_services": {
        id: 3,
        title: 'Programs',
        services: [
            {
                id: 1,
                menu: 'Recently Viewed',
                path: '/programs',
            },
            {
                id: 2,
                menu: 'New Products',
                path: '/shop',
            },
            {
                id: 3,
                menu: 'Shipping & Returns',
                path: '/contact',
            },
            {
                id: 4,
                menu: 'Senior Kg',
                path: '/programs',
            },
            {
                id: 5,
                menu: 'Become a Seller',
                path: '/programs',
            }
        ]
    },*/
    "contact_info": {
        id: 4,
        title: 'Kontaktirajte Nas',
        infos: [
            {
                id: 1,
                icon: 'fa-light fa-location-dot',
                url: '#',
                title: 'Trg Dositeja Obradovića 6, Novi Sad',
            },
            {
                id: 2,
                icon: 'fa-light fa-phone',
                url: 'tel:9072003462',
                title: '907-200-3462',
            },
            {
                id: 3,
                icon: 'fa-light fa-envelope',
                url: 'mailto:impuls@gmail.com',
                title: 'impuls@gmail.com',
            }
        ]
    },
}

export default footer_data;
