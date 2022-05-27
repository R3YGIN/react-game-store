export const calcDiscount = (price, sale) =>
  Math.round(price - (price * sale) / 100);

export const sorting = [
  {
    id: "sorting111",
    name: "По умолчанию",
    value: "default",
  },
  {
    id: "sorting222",
    name: "По цене",
    value: "price",
  },
  {
    id: "sorting333",
    name: "По дате",
    value: "newest",
  },
];

export const filters = [
  {
    id: "filter1",
    name: "ЦЕНА",
    details: [
      "Бесплатно",
      "Ниже 300 руб",
      "Ниже 1000 руб",
      "Ниже 3000 руб",
      "3000 руб и выше",
      "Со скидкой",
    ],
  },
  {
    id: "filter2",
    name: "ЖАНР",
    details: [
      "Викторина",
      "Выживание",
      "Головоломка",
      "Гонки",
      "Групповая",
      "Инди",
      "Исследования",
      "Казуальная",
      "От первого лица",
      "Открытый мир",
      "Приключения",
      "Ролевая",
      "Симулятор",
      "Стелс",
      "Стратегия",
      "Хоррор",
      "Шутер",
      "Экшен",
    ],
  },
];

export const mainSlider = [
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1081",
  "https://picsum.photos/1920/1082",
  "https://picsum.photos/1920/1083",
  "https://picsum.photos/1920/1084",
];

export const genreListSlides = [
  {
    id: "glsid1",
    name: "Экшен",
    link: "/catalog",
    img: "http://unsplash.it/500/301",
  },
  {
    id: "glsid2",
    name: "Казуальная",
    link: "/catalog",
    img: "http://unsplash.it/500/302",
  },
  {
    id: "glsid3",
    name: "Хоррор",
    link: "/catalog",
    img: "http://unsplash.it/500/303",
  },
  {
    id: "glsid4",
    name: "Инди",
    link: "/catalog",
    img: "http://unsplash.it/500/304",
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
