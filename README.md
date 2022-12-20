# El juego de boliche
![BrightCoders Logo](img/logo.png)

# Tabla de contenidos
 - [Descripcion del proyecto](#Descripción-del-proyecto)
 - [Cómo instalar y usar el proyecto](#Como-instalar-y-usar-el-proyecto)
 - [Creditos](#Créditos)
 - [Insignias de evaluadores de codigo](#Insignias-de-evaluadores-de-código)

# Descripción del proyecto 
![Bowling score](img/bowling.png)

- The game consists of 10 frames as shown above. In each frame the player has two opportunities to knock down 10 pins. The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.
- A spare is when the player knocks down all 10 pins in two tries. The bonus for that frame is the number of pins knocked down by the next roll. So in frame 3 above, the score is 10 (the total number knocked down) plus a bonus of 5 (the number of pins knocked down on the next roll.)
- A strike is when the player knocks down all 10 pins on his first try. The bonus for that frame is the value of the next two balls rolled.
- In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame. However no more than three balls can be rolled in tenth frame. 

# Como instalar y usar el proyecto
- Lo primero que se tiene que hacer es clonar el repositorio
``` 
git clone [linkDelRepositorio] 
```

- Lo siguiente será instalar dependencias y modulos que requiere el proyecto para ejecutarse correctamente, para ello es necesario ejecutar en una terminal dentro del repositorio antes clonado el siguiente comando:
```
npm install
```

- Para ejecutar el funcionamiento principal del programa y empezar el juego se ejecuta el siguiente comando en la terminal:
``` 
node startGame.js
```

- Para ejecutar las pruebas que se aplicaron al código utilizaremos el siguiente comando en la terminal:
``` 
npm run test
```

# Creditos
Integrantes del equipo del proyecto:
- [@QuackDuster](https://github.com/Quackduster)
- [@soykarencm](https://github.com/soykarencm)
- [@HenrikhWolf](https://github.com/HenrikhWolf)

# Insignias de evaluadores de código
| Analizador   | Calificación |
| ------------- | ------------- |
| Codacy   | [![Codacy Badge](https://app.codacy.com/project/badge/Grade/ff16974a1acc4459bded9bb181514319)](https://www.codacy.com/gh/BrightCoders-Institute/tmp-BCDIC22-RN-juego-boliche-js-team4/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BrightCoders-Institute/tmp-BCDIC22-RN-juego-boliche-js-team4&amp;utm_campaign=Badge_Grade)  |
| Codecov | [![codecov](https://codecov.io/gh/BrightCoders-Institute/tmp-BCDIC22-RN-juego-boliche-js-team4/branch/master/graph/badge.svg?token=6CMC5X8HB4)](https://codecov.io/gh/BrightCoders-Institute/tmp-BCDIC22-RN-juego-boliche-js-team4)  |