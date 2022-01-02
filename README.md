# React - Pokedex

Este proyecto contiene un ejercicio práctico en el que con React.js se conecta a la API de Pokemon, se recuperan los primeros 150 pokemons y se muestran en una tabla. Dicha tabla contiene un columna con los id, nombre e imagen del pokemon, altura y peso.

Este proyecto es especial, ya que no se creo usando el comando **npx create-react-app**, sino que emplea una instalación manual de las librerias requeridas de react, además de utilizar un poco de Webpack para agilizar la compilación y ejecución de código.

Para trabajar con Webpack se uilizaron librerias y plugins como Babel, HTML-webpack-plugin, mini-css-extract-plugin y un poco **SASS**.

Para la correcta duplicación del código de este proyecto debes considerar:

1. Tener instalado node y npm.
2. Ejecutar el comando **npm install**, este instalará las dependencias enunciadas en el archivo package.json.
3. Para seguir editanto el código y ver los cambios del código sin necesidad de refrescar la pantalla de tu navegador, puedes usar el comando **npm run start**

## Producción.

Si estás listo para mandar a producción tu código puedes intentar usar el comando **npm run build**, este te generará una nueva carpeta llamada **dist**, la cual contendrá todos los archivos estáticos necesarios para desplegarlos en Github Pages, o donde desees.

Además el comando te minificará el código que hayas hecho.

## Deploy.

El deploy de este proyecto lo puedes ver en el siguiente [enlace](https://www.google.com/).

## Comentarios Finales.

Quiero agregar que en este proyecto agregue una pequeña capa de uso de **Docker**, además de que el deploy del proyecto lo use utilizando la plataforma de **Netlify**
