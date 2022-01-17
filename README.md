# Tutorial webpack con react!

El proyecto tratará de utilizar el empaquetador webpack para poder entender más su funcionamiento, configuración, y de mas propidades que nos ofrece, Orientado a una ToDo APP integrando React

## Paso a Paso instalacion y escalabilidad

Para configurar y utilizar nuestro webpack debemos instalar las siguientes dependencias

>     **npm install -D webpack webpack**

Luego necesitas crear la carpeta y el archivo por defecto que utilizara webpack para generar tu codigo

> **/src/index.js**

Una vez con las partes minimas necesarias para arrancar webpack vamos a configurar nuestro script en el archivo **package.json** para generar nuestro codigo, adicional debemos indicarle el modo en el que se esta trabajando

> "scripts": {

    "build" : "webpack --mode=development",
    }

luego de esto vamos a nuestra terminal y ejecutamos el comando **npm run build** y automaticamente webpack nos generara una carpeta con el resultado de nuestro código escrito en el archivo **index.js** creado anteriormente

> /dist/index.js
