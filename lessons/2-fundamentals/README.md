# 2. Fundamentos de React

## Índice

[1. Componentes](#1-componentes)  
[2. Estado](#2-estado)  
[3. Props](#3-props)  
[4. Hooks](#4-hooks)

## 1. Componentes

Un componente es un fichero .jsx que puede tener las siguientes partes:

- Importación de aquello que necesita de otros módulos (en su caso)
- Una función que lo define y que devuelve el código JSX a preprocesar y renderizar
- Código JavaScript adicional (generalmente para tareas de inicialización, si las requiere)
- Exportación de la función

Los componentes forman un árbol de manera jerárquica llamándose unos a otros, desde el componente raíz (habitualmente `App.js`) y pudiendo tener todos los niveles que se necesiten para construir la aplicación.

Ejemplo de componente:

    import "./Movie.css";
    import poster from "./images/her-movie-poster.jpg"

    const title = "Her"
    const year = 2013

    const Movie = () => {
      return (
        <div>
          <h3>{title}</h3>
          <p>Año: {year}</p>

          <img src={poster} alt={title} />
        </div>
      )
    }

    export default Movie

## 2. Estado

.

## 3. Props

.

## 4. Hooks

.
