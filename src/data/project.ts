export interface ProjectArrayI {
  id?: number;
  name: string;
  img: string;
  ghLink: string;
  pLink: string;
}

export const projectArray: ProjectArrayI[] = [
  {
    id: 1,
    name: 'Brange Ecommerce',
    img: '/img/brange.png',
    ghLink: 'https://github.com/unmedlx/PWD-Warehouse-1-JCWM01',
    pLink: 'https://wa.me/6281312788552',
  },
  {
    id: 2,
    name: 'Business Website',
    img: '/img/bisnis-web.png',
    ghLink: 'https://github.com/unmedlx/Business-Website-React',
    pLink: 'https://whimsical-moonbeam-99a0b7.netlify.app/',
  },
  {
    id: 3,
    name: 'Ai Image Generator Website',
    img: '/img/ai-generator-web.png',
    ghLink: 'https://github.com/unmedlx/Client-Ai-Image-Generator-Website',
    pLink: 'https://client-ai-image-generator-website.vercel.app/',
  },
  {
    id: 4,
    name: 'Pokemon Index Website',
    img: '/img/pokedex.png',
    ghLink: 'https://github.com/unmedlx/pokemon-web-ayyash',
    pLink: 'https://pokemon-web-ayyash.vercel.app/',
  },
  {
    id: 5,
    name: 'SIGMATOP Ecommerce',
    img: '/img/sigmatop.png',
    ghLink: 'https://github.com/sigmatop-gonext',
    pLink: 'https://sigma.sabar.my.id/',
  },
  {
    id: 6,
    name: 'Portfolio Website',
    img: '/img/portfolio-web.png',
    ghLink: 'https://github.com/unmedlx/website-portfolio-nextjs-minimalism',
    pLink: '#',
  },
];
