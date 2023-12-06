# Advent js 🎄/👨‍💻

Este repositorio contiene los retos, **ya resultos**, del advent js de **midudev**
| Reto | Solución | Difficultad[^1] |

| --------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------------- |
| [#01](https://adventjs.dev/challenges/2023/1) | [Ver Solución #01](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-01/index.ts) | 🟩 |
| [#02](https://adventjs.dev/challenges/2023/2) | [Ver Solución #02](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-02/index.ts) | 🟩 |
| [#03](https://adventjs.dev/challenges/2023/3) | [Ver Solución #03](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-03/index.ts) | 🟩 |
| [#04](https://adventjs.dev/challenges/2023/4) | [Ver Solución #04](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-04/index.ts) | 🟨 |
| [#05](https://adventjs.dev/challenges/2023/5) | [Ver Solución #05](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-05/index.ts) | 🟨 |
| [#06](https://adventjs.dev/challenges/2023/6) | [Ver Solución #06](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-06/index.ts) | 🟩 |

[^1]: Niveles de dificultad: 🟩 **Fácil** | 🟨 **Medio** | 🟧 **Dificil**

</br>

## ¿Cómo ejecutar las pruebas? 🧪

1. Primero tienes que clonar el repositorio

```bash
  git clone https://github.com/Franklin361/advent-js.git
```

2. Entonces, tendrás que ejecutar este comando para instalar todas las dependencias del proyecto

```bash
  npm install
```

3. Ahora para ejecutar las pruebas, hay 3 posibles comandos.

Para ejecutar todas las pruebas de todos los retos, **sin que se quede observando cambios en los archivos**, usa este comando:

```bash
  npm run test
```

Para ejecutar todas las pruebas de todos los retos, y que **sí se quede observando cambios en los archivos**, usa este comando:

```bash
  npm run test:watch
```

Para ejecutar todas las pruebas de todos los retos, y ver las pruebas en una UI en el navegador:

> En la terminal te indicara que URL necesitas visitar para ver las pruebas en el navegador

```bash
  npm run test:ui
```

Pero, si tú quieres correr una prueba de un reto en específico, tienes que ejecutar el siguiente comando.
En el comando mostrado ejecutamos las pruebas de la carpeta ./reto-02

> Lo único que cambia es el nombre del directorio

```bash
  npm run test --dir ./reto-02
```
