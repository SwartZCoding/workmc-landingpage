export default {
  nav: {
    logo: 'WorkMC',
    links: [
      { text: 'Discord', to: 'discord' },
      { text: 'Marketplace', to: 'market' },
    ],
  },
  header: {
    title: 'Header',
    img: process.env.PUBLIC_URL + '/assets/profile-placeholder.jpg',
    text: ['Bienvenue', "Sur WorkMC.", 'Communauté de jeunes '],
    typical: [
      'Développeurs. 🖥',
      2000,
      'Grahpistes. 📹',
      2000,
      'Sys-Admins 🔧',
      2000,
      'Builders.',
      2000,
      'Modélisateurs.',
      2000,
      'Youtubeurs.',
      2000,
      'Trailer-Makers.',
      2000,
    ],

    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/players/anto.png',
        alt: 'anto',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/players/quiibz.png',
        alt: 'quiibz',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/players/shika.png',
        alt: 'shika',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/players/kam.png',
        alt: 'kam',
      },
    ],
    desc: `Toute l'équipe de WorkMC se dévouent de jour en jour pour vous offrir un large choix de services pour tous les budjets.`,
    btnText: 'Rejoins-nous',
    marketText: 'Accéder au Marketplace',
  },
};
