const presets = [
    ['@babel/env', { // какой пресет использовать
      targets: { // какие версии браузеров поддерживать
        //edge: '17',
        //ie: '11',
        firefox: '88',
        chrome: '88',
        //safari: '11.1'
    },

      // использовать полифиллы для браузеров из свойства target
      // по умолчанию babel использует поллифиллы библиотеки core-js
    useBuiltIns: "entry"
    }]
    ];

module.exports = { presets };