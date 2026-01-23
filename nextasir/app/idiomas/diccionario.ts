const dictionaries = {
    en: {
      title: 'Welcome to my multilingual page',
      description: 'This is a simple page that can be translated into Spanish and English.',
      home:'Home'
    },
    es: {
      title: 'Bienvenido a mi página multilingüe',
      description: 'Esta es una página sencilla que se puede traducir al español y al inglés.',
      home:'Inicio'
    },
    fr: {
      title: 'Bienvenue à ma multilingual page',
      description: "Il s'agit d'une page simple qui peut être traduite en espagnol et en anglais.",
      home:'Commencer'
    },
  }
  export const getDictionary = (lang) => dictionaries[lang ]