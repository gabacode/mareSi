export interface ISlide {
  title: string;
  image: string;
  url: string;
}

export const press: ISlide[] = [
  {
    title: 'Palermo Today',
    image: './images/press/palermo-today.svg',
    url: 'https://www.palermotoday.it/social/app-mare-si-palermitani-divieti-balneazione.html',
  },
  {
    title: 'TGR Sicilia',
    image: './images/press/tgr-sicilia.svg',
    url: 'https://www.rainews.it/tgr/sicilia/video/2022/06/sic-maresi-app-sapere-puoi-fare-bagno-e79b1552-5f6a-49b4-9842-6d273eb4227f.html',
  },
  {
    title: 'ilMediterraneo24',
    image: './images/press/ilMediterraneo24.png',
    url: 'https://www.ilmediterraneo24.it/in-sicilia/sicilia/dove-meglio-fare-il-bagno-te-lo-dice-unapp/',
  },
];
