import GenreAction from "./assets/img/genresSlider/GenreAction.webp";
import GenreCasual from "./assets/img/genresSlider/GenreCasual.webp";
import GenreHorror from "./assets/img/genresSlider/GenreHorror.webp";
import GenreIndie from "./assets/img/genresSlider/GenreIndie.webp";

export const calcDiscount = (price, sale) =>
  Math.round(price - (price * sale) / 100);

export const lightMode = {
  "--bgc": "#fcfcfc",
  "--text": "#1f304b",
  "--textDarker": "#1f304b99",
  "--headerBgc": "#ebebeb",
  "--textHeader": "#272d2f",
  "--footerBgc": "#ebebeb",
  "--textFooter": "#272d2f",
  "--textFooterTitle": "#131313",
  "--genreListBgc": "#ccc",
  "--searchBgc": "#ebebeb",
  "--swiperBtnBgc": "#ccc",
  "--cartItemBgc": "#ccc",

  "--freeGameBgc": "#ccc",
  "--infoBlockBtn": "#afafaf",
  "--bigSliderBtn": "#1f304b",
  "--sysRequBgc": "#afafaf",
  "--productTypeBgc": "#afafaf",
  "--loginPageBgc": "#ccc",
  "--loginInputBgc": "#ebebeb",
};

export const darkMode = {
  "--bgc": "#121212",
  "--text": "#f5f5f5",
  "--textDarker": "#f5f5f599",
  "--headerBgc": "#2a2a2a",
  "--textHeader": "#cccccc",
  "--footerBgc": "#202020",
  "--textFooter": "#cccccc",
  "--textFooterTitle": "#656565",
  "--genreListBgc": "#1f1f1f",
  "--searchBgc": "#202020",
  "--swiperBtnBgc": "#2b2b2b",
  "--cartItemBgc": "#202020",

  "--freeGameBgc": "#2a2a2a",
  "--infoBlockBtn": "#fff",
  "--bigSliderBtn": "#fff",
  "--sysRequBgc": "#262626",
  "--productTypeBgc": "#373737",
  "--loginPageBgc": "#202020",
  "--loginInputBgc": "#373737",
};

export const sorting = [
  {
    id: "sorting111fwe",
    name: "По умолчанию",
    value: "default",
  },
  {
    id: "sorting222ascv",
    name: "По цене",
    value: "price",
  },
  {
    id: "sorting333wabs",
    name: "По дате",
    value: "newest",
  },
];

export const sortingLibrary = [
  {
    id: "sorting444fwe",
    name: "По умолчанию",
    value: "default",
  },
  {
    id: "sorting555ascv",
    name: "По алфавиту",
    value: "alphabet",
  },
];

export const filters = [
  {
    id: "filter1",
    title: "ЦЕНА",
    details: [
      {
        name: "Бесплатно",
        type: "price",
        value: 0,
      },
      {
        name: "Ниже 300 руб",
        type: "price",
        value: 300,
      },
      {
        name: "Ниже 1000 руб",
        type: "price",
        value: 1000,
      },
      {
        name: "Ниже 3000 руб",
        type: "price",
        value: 3000,
      },
      {
        name: "Со скидкой",
        type: "sale",
        value: false,
      },
    ],
  },
  {
    id: "filter2",
    title: "ЖАНР",
    details: [
      {
        name: "Выживание",
        type: "genre",
        value: "survival",
      },
      {
        name: "Головоломка",
        type: "genre",
        value: "puzzle",
      },
      {
        name: "Гонки",
        type: "genre",
        value: "racing",
      },
      {
        name: "Инди",
        type: "genre",
        value: "indie",
      },
      {
        name: "Исследования",
        type: "genre",
        value: "exploration",
      },
      {
        name: "Казуальная",
        type: "genre",
        value: "casual",
      },
      {
        name: "От первого лица",
        type: "genre",
        value: "firstPerson",
      },
      {
        name: "Открытый мир",
        type: "genre",
        value: "openWorld",
      },
      {
        name: "Приключения",
        type: "genre",
        value: "adventure",
      },
      {
        name: "Ролевая",
        type: "genre",
        value: "rpg",
      },
      {
        name: "Симулятор",
        type: "genre",
        value: "simulation",
      },
      {
        name: "Стелс",
        type: "genre",
        value: "stealth",
      },
      {
        name: "Стратегия",
        type: "genre",
        value: "strategy",
      },
      {
        name: "Хоррор",
        type: "genre",
        value: "horror",
      },
      {
        name: "Шутер",
        type: "genre",
        value: "shooter",
      },
      {
        name: "Экшен",
        type: "genre",
        value: "action",
      },
    ],
  },
];

export const mainSlider = [
  "https://loremflickr.com/1920/1080/assassins",
  "https://loremflickr.com/1920/1081/assassins",
  "https://loremflickr.com/1920/1082/assassins",
  "https://loremflickr.com/1920/1083/assassins",
  "https://loremflickr.com/1920/1084/assassins",
];

export const genreListSlides = [
  {
    id: "glsid1",
    name: "Экшен",
    value: "action",
    img: GenreAction,
  },
  {
    id: "glsid2",
    name: "Казуальная",
    value: "casual",
    img: GenreCasual,
  },
  {
    id: "glsid3",
    name: "Хоррор",
    value: "horror",
    img: GenreHorror,
  },
  {
    id: "glsid4",
    name: "Инди",
    value: "indie",
    img: GenreIndie,
  },
];

export const freeGame = {
  id: "uid1",
  productSlug: "1awdsaw",
  img: "http://unsplash.it/700/1201",
  wideImg: "http://unsplash.it/1201/300",
  title: "Assassin's Creed 1",
  sale: 0,
  price: 1000,
  developer: "R3YGIN",
  publisher: "R3YGINd",
  releaseDate: "777",
  platform: "windows",
  genre: ["Экшен", "Ролевая", "Открытый мир"],
  about:
    "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Illo excepturi placeat odit doloremque facere perferendis?",
  desc: "В Assassin's Creed Вальгалла вам предстоит пройти путь к славе, играя за легендарного викинга по имени Эйвор. Исследуйте мир, сражайтесь, развивайте селение и усиливайте влияние. – Совершайте набеги на крепости саксов. – Сражайтесь двумя видами оружия одновременно. – Испытайте себя в битвах против самых разных противников. – С каждым выбором определяйте путь развития персонажа и селения клана. – Исследуйте открытый мир от берегов Норвегии до королевств Англии. – Развивайте селение клана.",
  requirements: {
    os: {
      min: "Windows 10",
      rec: "Windows 10",
    },
    processor: {
      min: "Ryzen 3 1200 с частотой 3,1ГГц / i5-4460 с частотой 3,2 ГГц",
      rec: "Ryzen 5 1600 с частотой 3,2 ГГц / i7-4790 с частотой 3,6 ГГц",
    },
    memory: {
      min: "8 ГБ (двухканальная настройка)",
      rec: "8 ГБ (двухканальная настройка)",
    },
    storage: {
      min: "50 ГБ (рекомендуется SSD)",
      rec: "50 ГБ (рекомендуется SSD)",
    },
    direct: {
      min: "DirectX 12",
      rec: "DirectX 12",
    },
    graphics: {
      min: "AMD R9 380 с 4 ГБ видеопамяти / GeForce GTX 960 с 4 ГБ видеопамяти",
      rec: "AMD RX 570 с 8 ГБ видеопамяти / GeForce GTX 1060 с 6 ГБ видеопамяти",
    },
    languages:
      "Озвучивание: английский, французский, итальянский, немецкий, испанский (Испания), русский, португальский (Бразилия), японский / Меню + субтитры: испанский (Латинская Америка), корейский, китайский (традиционный), китайский (упрощённый), арабский",
  },
  slider: [
    "http://unsplash.it/1400/800",
    "http://unsplash.it/1400/801",
    "http://unsplash.it/1400/802",
    "http://unsplash.it/1400/803",
    "http://unsplash.it/1400/804",
    "http://unsplash.it/1400/805",
  ],
  inStock: "",
  createdAt: "1",
};

export const productsData = [
  {
    id: "uid1",
    productSlug: "1awdsaw",
    img: "http://unsplash.it/700/1201",
    wideImg: "http://unsplash.it/1201/300",
    title: "Assassin's Creed 1",
    sale: 0,
    price: 1000,
    developer: "R3YGIN",
    publisher: "R3YGIN",
    releaseDate: "777",
    platform: "windows",
    genre: ["Экшен", "Ролевая", "Открытый мир"],
    about:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Illo excepturi placeat odit doloremque facere perferendis?",
    desc: "В Assassin's Creed Вальгалла вам предстоит пройти путь к славе, играя за легендарного викинга по имени Эйвор. Исследуйте мир, сражайтесь, развивайте селение и усиливайте влияние. – Совершайте набеги на крепости саксов. – Сражайтесь двумя видами оружия одновременно. – Испытайте себя в битвах против самых разных противников. – С каждым выбором определяйте путь развития персонажа и селения клана. – Исследуйте открытый мир от берегов Норвегии до королевств Англии. – Развивайте селение клана.",
    requirements: {
      os: {
        min: "Windows 10",
        rec: "Windows 10",
      },
      processor: {
        min: "Ryzen 3 1200 с частотой 3,1ГГц / i5-4460 с частотой 3,2 ГГц",
        rec: "Ryzen 5 1600 с частотой 3,2 ГГц / i7-4790 с частотой 3,6 ГГц",
      },
      memory: {
        min: "8 ГБ (двухканальная настройка)",
        rec: "8 ГБ (двухканальная настройка)",
      },
      storage: {
        min: "50 ГБ (рекомендуется SSD)",
        rec: "50 ГБ (рекомендуется SSD)",
      },
      direct: {
        min: "DirectX 12",
        rec: "DirectX 12",
      },
      graphics: {
        min: "AMD R9 380 с 4 ГБ видеопамяти / GeForce GTX 960 с 4 ГБ видеопамяти",
        rec: "AMD RX 570 с 8 ГБ видеопамяти / GeForce GTX 1060 с 6 ГБ видеопамяти",
      },
      languages:
        "Озвучивание: английский, французский, итальянский, немецкий, испанский (Испания), русский, португальский (Бразилия), японский / Меню + субтитры: испанский (Латинская Америка), корейский, китайский (традиционный), китайский (упрощённый), арабский",
    },
    slider: [
      "http://unsplash.it/1400/800",
      "http://unsplash.it/1400/801",
      "http://unsplash.it/1400/802",
      "http://unsplash.it/1400/803",
      "http://unsplash.it/1400/804",
      "http://unsplash.it/1400/805",
    ],
    inStock: "",
    createdAt: "77",
  },
  {
    id: "uid2",
    productSlug: "2awdasdw",
    img: "http://unsplash.it/700/1202",
    wideImg: "http://unsplash.it/1202/300",
    title: "Assassin's Creed 2",
    sale: 0,
    price: 0,
    developer: "R3YGIN",
    publisher: "R3YGIN",
    releaseDate: "777",
    platform: "windows",
    genre: ["Экшен", "Ролевая", "Открытый мир"],
    about:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Illo excepturi placeat odit doloremque facere perferendis?",
    desc: "В Assassin's Creed Вальгалла вам предстоит пройти путь к славе, играя за легендарного викинга по имени Эйвор. Исследуйте мир, сражайтесь, развивайте селение и усиливайте влияние. – Совершайте набеги на крепости саксов. – Сражайтесь двумя видами оружия одновременно. – Испытайте себя в битвах против самых разных противников. – С каждым выбором определяйте путь развития персонажа и селения клана. – Исследуйте открытый мир от берегов Норвегии до королевств Англии. – Развивайте селение клана.",
    requirements: {
      os: {
        min: "Windows 10",
        rec: "Windows 10",
      },
      processor: {
        min: "Ryzen 3 1200 с частотой 3,1ГГц / i5-4460 с частотой 3,2 ГГц",
        rec: "Ryzen 5 1600 с частотой 3,2 ГГц / i7-4790 с частотой 3,6 ГГц",
      },
      memory: {
        min: "8 ГБ (двухканальная настройка)",
        rec: "8 ГБ (двухканальная настройка)",
      },
      storage: {
        min: "50 ГБ (рекомендуется SSD)",
        rec: "50 ГБ (рекомендуется SSD)",
      },
      direct: {
        min: "DirectX 12",
        rec: "DirectX 12",
      },
      graphics: {
        min: "AMD R9 380 с 4 ГБ видеопамяти / GeForce GTX 960 с 4 ГБ видеопамяти",
        rec: "AMD RX 570 с 8 ГБ видеопамяти / GeForce GTX 1060 с 6 ГБ видеопамяти",
      },
      languages:
        "Озвучивание: английский, французский, итальянский, немецкий, испанский (Испания), русский, португальский (Бразилия), японский / Меню + субтитры: испанский (Латинская Америка), корейский, китайский (традиционный), китайский (упрощённый), арабский",
    },
    slider: [
      "http://unsplash.it/1400/800",
      "http://unsplash.it/1400/801",
      "http://unsplash.it/1400/802",
      "http://unsplash.it/1400/803",
      "http://unsplash.it/1400/804",
      "http://unsplash.it/1400/805",
    ],
    inStock: "",
    createdAt: "3",
  },
  {
    id: "uid3",
    productSlug: "3awdaw",
    img: "http://unsplash.it/700/1203",
    wideImg: "http://unsplash.it/1203/300",
    title: "Assassin's Creed 3",
    sale: 30,
    price: 1200,
    developer: "R3YGIN",
    publisher: "R3YGIN",
    releaseDate: "777",
    platform: "windows",
    genre: ["Экшен", "Ролевая", "Открытый мир"],
    about:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Illo excepturi placeat odit doloremque facere perferendis?",
    desc: "В Assassin's Creed Вальгалла вам предстоит пройти путь к славе, играя за легендарного викинга по имени Эйвор. Исследуйте мир, сражайтесь, развивайте селение и усиливайте влияние. – Совершайте набеги на крепости саксов. – Сражайтесь двумя видами оружия одновременно. – Испытайте себя в битвах против самых разных противников. – С каждым выбором определяйте путь развития персонажа и селения клана. – Исследуйте открытый мир от берегов Норвегии до королевств Англии. – Развивайте селение клана.",
    requirements: {
      os: {
        min: "Windows 10",
        rec: "Windows 10",
      },
      processor: {
        min: "Ryzen 3 1200 с частотой 3,1ГГц / i5-4460 с частотой 3,2 ГГц",
        rec: "Ryzen 5 1600 с частотой 3,2 ГГц / i7-4790 с частотой 3,6 ГГц",
      },
      memory: {
        min: "8 ГБ (двухканальная настройка)",
        rec: "8 ГБ (двухканальная настройка)",
      },
      storage: {
        min: "50 ГБ (рекомендуется SSD)",
        rec: "50 ГБ (рекомендуется SSD)",
      },
      direct: {
        min: "DirectX 12",
        rec: "DirectX 12",
      },
      graphics: {
        min: "AMD R9 380 с 4 ГБ видеопамяти / GeForce GTX 960 с 4 ГБ видеопамяти",
        rec: "AMD RX 570 с 8 ГБ видеопамяти / GeForce GTX 1060 с 6 ГБ видеопамяти",
      },
      languages:
        "Озвучивание: английский, французский, итальянский, немецкий, испанский (Испания), русский, португальский (Бразилия), японский / Меню + субтитры: испанский (Латинская Америка), корейский, китайский (традиционный), китайский (упрощённый), арабский",
    },
    slider: [
      "http://unsplash.it/1400/800",
      "http://unsplash.it/1400/801",
      "http://unsplash.it/1400/802",
      "http://unsplash.it/1400/803",
      "http://unsplash.it/1400/804",
      "http://unsplash.it/1400/805",
    ],
    inStock: "",
    createdAt: "4",
  },
  {
    id: "uid4",
    productSlug: "4wadsdaw",
    img: "http://unsplash.it/700/1204",
    wideImg: "http://unsplash.it/1204/300",
    title: "Assassin's Creed Unity",
    sale: 40,
    price: 800,
    developer: "R3YGIN",
    publisher: "R3YGIN",
    releaseDate: "777",
    platform: "windows",
    genre: ["Экшен", "Ролевая", "Открытый мир"],
    about:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Illo excepturi placeat odit doloremque facere perferendis?",
    desc: "В Assassin's Creed Вальгалла вам предстоит пройти путь к славе, играя за легендарного викинга по имени Эйвор. Исследуйте мир, сражайтесь, развивайте селение и усиливайте влияние. – Совершайте набеги на крепости саксов. – Сражайтесь двумя видами оружия одновременно. – Испытайте себя в битвах против самых разных противников. – С каждым выбором определяйте путь развития персонажа и селения клана. – Исследуйте открытый мир от берегов Норвегии до королевств Англии. – Развивайте селение клана.",
    requirements: {
      os: {
        min: "Windows 10",
        rec: "Windows 10",
      },
      processor: {
        min: "Ryzen 3 1200 с частотой 3,1ГГц / i5-4460 с частотой 3,2 ГГц",
        rec: "Ryzen 5 1600 с частотой 3,2 ГГц / i7-4790 с частотой 3,6 ГГц",
      },
      memory: {
        min: "8 ГБ (двухканальная настройка)",
        rec: "8 ГБ (двухканальная настройка)",
      },
      storage: {
        min: "50 ГБ (рекомендуется SSD)",
        rec: "50 ГБ (рекомендуется SSD)",
      },
      direct: {
        min: "DirectX 12",
        rec: "DirectX 12",
      },
      graphics: {
        min: "AMD R9 380 с 4 ГБ видеопамяти / GeForce GTX 960 с 4 ГБ видеопамяти",
        rec: "AMD RX 570 с 8 ГБ видеопамяти / GeForce GTX 1060 с 6 ГБ видеопамяти",
      },
      languages:
        "Озвучивание: английский, французский, итальянский, немецкий, испанский (Испания), русский, португальский (Бразилия), японский / Меню + субтитры: испанский (Латинская Америка), корейский, китайский (традиционный), китайский (упрощённый), арабский",
    },
    slider: [
      "http://unsplash.it/1400/800",
      "http://unsplash.it/1400/801",
      "http://unsplash.it/1400/802",
      "http://unsplash.it/1400/803",
      "http://unsplash.it/1400/804",
      "http://unsplash.it/1400/805",
    ],
    inStock: "",
    createdAt: "99",
  },
  {
    id: "uid5",
    productSlug: "5awdasdaw",
    img: "http://unsplash.it/700/1205",
    wideImg: "http://unsplash.it/1205/300",
    title: "Assassin's Creed Rogue",
    sale: 10,
    price: 500,
    developer: "R3YGIN",
    publisher: "R3YGIN",
    releaseDate: "777",
    platform: "windows",
    genre: ["Экшен", "Ролевая", "Открытый мир"],
    about:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Illo excepturi placeat odit doloremque facere perferendis?",
    desc: "В Assassin's Creed Вальгалла вам предстоит пройти путь к славе, играя за легендарного викинга по имени Эйвор. Исследуйте мир, сражайтесь, развивайте селение и усиливайте влияние. – Совершайте набеги на крепости саксов. – Сражайтесь двумя видами оружия одновременно. – Испытайте себя в битвах против самых разных противников. – С каждым выбором определяйте путь развития персонажа и селения клана. – Исследуйте открытый мир от берегов Норвегии до королевств Англии. – Развивайте селение клана.",
    requirements: {
      os: {
        min: "Windows 10",
        rec: "Windows 10",
      },
      processor: {
        min: "Ryzen 3 1200 с частотой 3,1ГГц / i5-4460 с частотой 3,2 ГГц",
        rec: "Ryzen 5 1600 с частотой 3,2 ГГц / i7-4790 с частотой 3,6 ГГц",
      },
      memory: {
        min: "8 ГБ (двухканальная настройка)",
        rec: "8 ГБ (двухканальная настройка)",
      },
      storage: {
        min: "50 ГБ (рекомендуется SSD)",
        rec: "50 ГБ (рекомендуется SSD)",
      },
      direct: {
        min: "DirectX 12",
        rec: "DirectX 12",
      },
      graphics: {
        min: "AMD R9 380 с 4 ГБ видеопамяти / GeForce GTX 960 с 4 ГБ видеопамяти",
        rec: "AMD RX 570 с 8 ГБ видеопамяти / GeForce GTX 1060 с 6 ГБ видеопамяти",
      },
      languages:
        "Озвучивание: английский, французский, итальянский, немецкий, испанский (Испания), русский, португальский (Бразилия), японский / Меню + субтитры: испанский (Латинская Америка), корейский, китайский (традиционный), китайский (упрощённый), арабский",
    },
    slider: [
      "http://unsplash.it/1400/800",
      "http://unsplash.it/1400/801",
      "http://unsplash.it/1400/802",
      "http://unsplash.it/1400/803",
      "http://unsplash.it/1400/804",
      "http://unsplash.it/1400/805",
    ],
    inStock: "",
    createdAt: "51",
  },
  {
    id: "uid6",
    productSlug: "6adawda",
    img: "http://unsplash.it/700/1206",
    wideImg: "http://unsplash.it/1206/300",
    title: "Assassin's Creed Brotherhood",
    sale: 100,
    price: 700,
    developer: "R3YGIN",
    publisher: "R3YGIN",
    releaseDate: "777",
    platform: "windows",
    genre: ["Экшен", "Ролевая", "Открытый мир"],
    about:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Illo excepturi placeat odit doloremque facere perferendis?",
    desc: "В Assassin's Creed Вальгалла вам предстоит пройти путь к славе, играя за легендарного викинга по имени Эйвор. Исследуйте мир, сражайтесь, развивайте селение и усиливайте влияние. – Совершайте набеги на крепости саксов. – Сражайтесь двумя видами оружия одновременно. – Испытайте себя в битвах против самых разных противников. – С каждым выбором определяйте путь развития персонажа и селения клана. – Исследуйте открытый мир от берегов Норвегии до королевств Англии. – Развивайте селение клана.",
    requirements: {
      os: {
        min: "Windows 10",
        rec: "Windows 10",
      },
      processor: {
        min: "Ryzen 3 1200 с частотой 3,1ГГц / i5-4460 с частотой 3,2 ГГц",
        rec: "Ryzen 5 1600 с частотой 3,2 ГГц / i7-4790 с частотой 3,6 ГГц",
      },
      memory: {
        min: "8 ГБ (двухканальная настройка)",
        rec: "8 ГБ (двухканальная настройка)",
      },
      storage: {
        min: "50 ГБ (рекомендуется SSD)",
        rec: "50 ГБ (рекомендуется SSD)",
      },
      direct: {
        min: "DirectX 12",
        rec: "DirectX 12",
      },
      graphics: {
        min: "AMD R9 380 с 4 ГБ видеопамяти / GeForce GTX 960 с 4 ГБ видеопамяти",
        rec: "AMD RX 570 с 8 ГБ видеопамяти / GeForce GTX 1060 с 6 ГБ видеопамяти",
      },
      languages:
        "Озвучивание: английский, французский, итальянский, немецкий, испанский (Испания), русский, португальский (Бразилия), японский / Меню + субтитры: испанский (Латинская Америка), корейский, китайский (традиционный), китайский (упрощённый), арабский",
    },
    slider: [
      "http://unsplash.it/1400/800",
      "http://unsplash.it/1400/801",
      "http://unsplash.it/1400/802",
      "http://unsplash.it/1400/803",
      "http://unsplash.it/1400/804",
      "http://unsplash.it/1400/805",
    ],
    inStock: "",
    createdAt: "49",
  },
  {
    id: "uid7",
    productSlug: "7asdwa",
    img: "http://unsplash.it/700/1207",
    wideImg: "http://unsplash.it/1207/300",
    title: "Assassin's Creed Revelations",
    sale: 33,
    price: 777,
    developer: "R3YGIN",
    publisher: "R3YGIN",
    releaseDate: "777",
    platform: "windows",
    genre: ["Экшен", "Ролевая", "Открытый мир"],
    about:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Illo excepturi placeat odit doloremque facere perferendis?",
    desc: "В Assassin's Creed Вальгалла вам предстоит пройти путь к славе, играя за легендарного викинга по имени Эйвор. Исследуйте мир, сражайтесь, развивайте селение и усиливайте влияние. – Совершайте набеги на крепости саксов. – Сражайтесь двумя видами оружия одновременно. – Испытайте себя в битвах против самых разных противников. – С каждым выбором определяйте путь развития персонажа и селения клана. – Исследуйте открытый мир от берегов Норвегии до королевств Англии. – Развивайте селение клана.",
    requirements: {
      os: {
        min: "Windows 10",
        rec: "Windows 10",
      },
      processor: {
        min: "Ryzen 3 1200 с частотой 3,1ГГц / i5-4460 с частотой 3,2 ГГц",
        rec: "Ryzen 5 1600 с частотой 3,2 ГГц / i7-4790 с частотой 3,6 ГГц",
      },
      memory: {
        min: "8 ГБ (двухканальная настройка)",
        rec: "8 ГБ (двухканальная настройка)",
      },
      storage: {
        min: "50 ГБ (рекомендуется SSD)",
        rec: "50 ГБ (рекомендуется SSD)",
      },
      direct: {
        min: "DirectX 12",
        rec: "DirectX 12",
      },
      graphics: {
        min: "AMD R9 380 с 4 ГБ видеопамяти / GeForce GTX 960 с 4 ГБ видеопамяти",
        rec: "AMD RX 570 с 8 ГБ видеопамяти / GeForce GTX 1060 с 6 ГБ видеопамяти",
      },
      languages:
        "Озвучивание: английский, французский, итальянский, немецкий, испанский (Испания), русский, португальский (Бразилия), японский / Меню + субтитры: испанский (Латинская Америка), корейский, китайский (традиционный), китайский (упрощённый), арабский",
    },
    slider: [
      "http://unsplash.it/1400/800",
      "http://unsplash.it/1400/801",
      "http://unsplash.it/1400/802",
      "http://unsplash.it/1400/803",
      "http://unsplash.it/1400/804",
      "http://unsplash.it/1400/805",
    ],
    inStock: "",
    createdAt: "33",
  },
  {
    id: "uid8",
    productSlug: "8asdaw",
    img: "http://unsplash.it/700/1208",
    wideImg: "http://unsplash.it/1208/300",
    title: "Assassin's Creed Syndicate",
    sale: 90,
    price: 3400,
    developer: "R3YGIN",
    publisher: "R3YGIN",
    releaseDate: "777",
    platform: "windows",
    genre: ["Экшен", "Ролевая", "Открытый мир"],
    about:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Illo excepturi placeat odit doloremque facere perferendis?",
    desc: "В Assassin's Creed Вальгалла вам предстоит пройти путь к славе, играя за легендарного викинга по имени Эйвор. Исследуйте мир, сражайтесь, развивайте селение и усиливайте влияние. – Совершайте набеги на крепости саксов. – Сражайтесь двумя видами оружия одновременно. – Испытайте себя в битвах против самых разных противников. – С каждым выбором определяйте путь развития персонажа и селения клана. – Исследуйте открытый мир от берегов Норвегии до королевств Англии. – Развивайте селение клана.",
    requirements: {
      os: {
        min: "Windows 10",
        rec: "Windows 10",
      },
      processor: {
        min: "Ryzen 3 1200 с частотой 3,1ГГц / i5-4460 с частотой 3,2 ГГц",
        rec: "Ryzen 5 1600 с частотой 3,2 ГГц / i7-4790 с частотой 3,6 ГГц",
      },
      memory: {
        min: "8 ГБ (двухканальная настройка)",
        rec: "8 ГБ (двухканальная настройка)",
      },
      storage: {
        min: "50 ГБ (рекомендуется SSD)",
        rec: "50 ГБ (рекомендуется SSD)",
      },
      direct: {
        min: "DirectX 12",
        rec: "DirectX 12",
      },
      graphics: {
        min: "AMD R9 380 с 4 ГБ видеопамяти / GeForce GTX 960 с 4 ГБ видеопамяти",
        rec: "AMD RX 570 с 8 ГБ видеопамяти / GeForce GTX 1060 с 6 ГБ видеопамяти",
      },
      languages:
        "Озвучивание: английский, французский, итальянский, немецкий, испанский (Испания), русский, португальский (Бразилия), японский / Меню + субтитры: испанский (Латинская Америка), корейский, китайский (традиционный), китайский (упрощённый), арабский",
    },
    slider: [
      "http://unsplash.it/1400/800",
      "http://unsplash.it/1400/801",
      "http://unsplash.it/1400/802",
      "http://unsplash.it/1400/803",
      "http://unsplash.it/1400/804",
      "http://unsplash.it/1400/805",
    ],
    inStock: "",
    createdAt: "45",
  },
  {
    id: "uid9",
    productSlug: "9asdwa",
    img: "http://unsplash.it/700/1209",
    wideImg: "http://unsplash.it/1209/300",
    title: "Assassin's Creed Liberation",
    sale: 65,
    price: 2300,
    developer: "R3YGIN",
    publisher: "R3YGIN",
    releaseDate: "777",
    platform: "windows",
    genre: ["Экшен", "Ролевая", "Открытый мир"],
    about:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Illo excepturi placeat odit doloremque facere perferendis?",
    desc: "В Assassin's Creed Вальгалла вам предстоит пройти путь к славе, играя за легендарного викинга по имени Эйвор. Исследуйте мир, сражайтесь, развивайте селение и усиливайте влияние. – Совершайте набеги на крепости саксов. – Сражайтесь двумя видами оружия одновременно. – Испытайте себя в битвах против самых разных противников. – С каждым выбором определяйте путь развития персонажа и селения клана. – Исследуйте открытый мир от берегов Норвегии до королевств Англии. – Развивайте селение клана.",
    requirements: {
      os: {
        min: "Windows 10",
        rec: "Windows 10",
      },
      processor: {
        min: "Ryzen 3 1200 с частотой 3,1ГГц / i5-4460 с частотой 3,2 ГГц",
        rec: "Ryzen 5 1600 с частотой 3,2 ГГц / i7-4790 с частотой 3,6 ГГц",
      },
      memory: {
        min: "8 ГБ (двухканальная настройка)",
        rec: "8 ГБ (двухканальная настройка)",
      },
      storage: {
        min: "50 ГБ (рекомендуется SSD)",
        rec: "50 ГБ (рекомендуется SSD)",
      },
      direct: {
        min: "DirectX 12",
        rec: "DirectX 12",
      },
      graphics: {
        min: "AMD R9 380 с 4 ГБ видеопамяти / GeForce GTX 960 с 4 ГБ видеопамяти",
        rec: "AMD RX 570 с 8 ГБ видеопамяти / GeForce GTX 1060 с 6 ГБ видеопамяти",
      },
      languages:
        "Озвучивание: английский, французский, итальянский, немецкий, испанский (Испания), русский, португальский (Бразилия), японский / Меню + субтитры: испанский (Латинская Америка), корейский, китайский (традиционный), китайский (упрощённый), арабский",
    },
    slider: [
      "http://unsplash.it/1400/800",
      "http://unsplash.it/1400/801",
      "http://unsplash.it/1400/802",
      "http://unsplash.it/1400/803",
      "http://unsplash.it/1400/804",
      "http://unsplash.it/1400/805",
    ],
    inStock: "",
    createdAt: "22",
  },
  {
    id: "uid10",
    productSlug: "9asdadw",
    img: "http://unsplash.it/700/1210",
    wideImg: "http://unsplash.it/1210/300",
    title: "Assassin's Creed Origin",
    sale: 0,
    price: 0,
    developer: "R3YGIN",
    publisher: "R3YGIN",
    releaseDate: "777",
    platform: "windows",
    genre: ["Экшен", "Ролевая", "Открытый мир"],
    about:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Illo excepturi placeat odit doloremque facere perferendis?",
    desc: "В Assassin's Creed Вальгалла вам предстоит пройти путь к славе, играя за легендарного викинга по имени Эйвор. Исследуйте мир, сражайтесь, развивайте селение и усиливайте влияние. – Совершайте набеги на крепости саксов. – Сражайтесь двумя видами оружия одновременно. – Испытайте себя в битвах против самых разных противников. – С каждым выбором определяйте путь развития персонажа и селения клана. – Исследуйте открытый мир от берегов Норвегии до королевств Англии. – Развивайте селение клана.",
    requirements: {
      os: {
        min: "Windows 10",
        rec: "Windows 10",
      },
      processor: {
        min: "Ryzen 3 1200 с частотой 3,1ГГц / i5-4460 с частотой 3,2 ГГц",
        rec: "Ryzen 5 1600 с частотой 3,2 ГГц / i7-4790 с частотой 3,6 ГГц",
      },
      memory: {
        min: "8 ГБ (двухканальная настройка)",
        rec: "8 ГБ (двухканальная настройка)",
      },
      storage: {
        min: "50 ГБ (рекомендуется SSD)",
        rec: "50 ГБ (рекомендуется SSD)",
      },
      direct: {
        min: "DirectX 12",
        rec: "DirectX 12",
      },
      graphics: {
        min: "AMD R9 380 с 4 ГБ видеопамяти / GeForce GTX 960 с 4 ГБ видеопамяти",
        rec: "AMD RX 570 с 8 ГБ видеопамяти / GeForce GTX 1060 с 6 ГБ видеопамяти",
      },
      languages:
        "Озвучивание: английский, французский, итальянский, немецкий, испанский (Испания), русский, португальский (Бразилия), японский / Меню + субтитры: испанский (Латинская Америка), корейский, китайский (традиционный), китайский (упрощённый), арабский",
    },
    slider: [
      "http://unsplash.it/1400/800",
      "http://unsplash.it/1400/801",
      "http://unsplash.it/1400/802",
      "http://unsplash.it/1400/803",
      "http://unsplash.it/1400/804",
      "http://unsplash.it/1400/805",
    ],
    inStock: "",
    createdAt: "11",
  },
];
