# Advent js 🎄/👨‍💻

Este repositorio contiene los retos, **ya resultos**, del advent js de **midudev**

| Reto                                           | Solución                                                                                               | Difficultad[^1] |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------------- |
| [#01](https://adventjs.dev/challenges/2023/1)  | [Ver Solución #01](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-01/index.ts) | 🟩              |
| [#02](https://adventjs.dev/challenges/2023/2)  | [Ver Solución #02](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-02/index.ts) | 🟩              |
| [#03](https://adventjs.dev/challenges/2023/3)  | [Ver Solución #03](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-03/index.ts) | 🟩              |
| [#04](https://adventjs.dev/challenges/2023/4)  | [Ver Solución #04](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-04/index.ts) | 🟨              |
| [#05](https://adventjs.dev/challenges/2023/5)  | [Ver Solución #05](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-05/index.ts) | 🟨              |
| [#06](https://adventjs.dev/challenges/2023/6)  | [Ver Solución #06](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-06/index.ts) | 🟩              |
| [#07](https://adventjs.dev/challenges/2023/7)  | [Ver Solución #07](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-07/index.ts) | 🟩              |
| [#08](https://adventjs.dev/challenges/2023/8)  | [Ver Solución #08](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-08/index.ts) | 🟩              |
| [#09](https://adventjs.dev/challenges/2023/9)  | [Ver Solución #09](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-09/index.ts) | 🟩              |
| [#10](https://adventjs.dev/challenges/2023/10) | [Ver Solución #10](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-10/index.ts) | 🟩              |
| [#11](https://adventjs.dev/challenges/2023/11) | [Ver Solución #11](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-11/index.ts) | 🟨              |
| [#12](https://adventjs.dev/challenges/2023/12) | [Ver Solución #12](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-12/index.ts) | 🟨              |
| [#13](https://adventjs.dev/challenges/2023/13) | [Ver Solución #13](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-13/index.ts) | 🟩              |
| [#14](https://adventjs.dev/challenges/2023/14) | [Ver Solución #14](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-14/index.ts) | 🟨              |
| [#15](https://adventjs.dev/challenges/2023/15) | [Ver Solución #15](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-15/index.ts) | 🟨              |
| [#16](https://adventjs.dev/challenges/2023/16) | [Ver Solución #16](https://github.com/Franklin361/advent-js/blob/main/advent-js-2023/reto-16/index.ts) | 🟩              |

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
