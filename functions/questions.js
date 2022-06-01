import { states } from "../config/states.js"
import { capitals } from "../config/capitals.js"
import { monuments } from "../config/monuments.js"
import { selectStateCapitalsMonument } from "./selectStateCapitalsMonument.js"

export function questions(points, level, character,gamerName){
    let option1, option2, option3
    let n = 0
    let i = 1
    let question
    
    while (points>=3 && i<level){
 
        for (i=1; i<=level; i++){

            n = selectStateCapitalsMonument()

            if (character===1){
                    
                while (((option1 == option2) || (option1 == option3) || (option2 == option3))  
                || ((capitals.indexOf(option1)!=n) && (capitals.indexOf(option2)!=n) && (capitals.indexOf(option3)!=n))){/*Asignar nuevo Estado y capital */
          
                    option1 = capitals[selectStateCapitalsMonument()]
                    option2 = capitals[selectStateCapitalsMonument()]
                    option3 = capitals[selectStateCapitalsMonument()]
                }

                question = Number(prompt(`Pregunta ${i} \n ¿Cuál es la capital del estado ${states[n]}? \n Escriba una de las siguientes opciones: \n \n 1. ${option1} \n 2. ${option2} \n 3. ${option3}`))


                if ((question == 1) && (option1 == capitals[n])){
                        points += 6
                        alert (`¡ES CORRECTO! la capital de ${states[n]} es ${capitals[n]} \n Ahora tienes ${points} puntos. \n vas a tu pregunta ${i+1}`)
                } else if ((question == 2) && (option2 == capitals[n])){
                        points += 6
                        alert (`¡ES CORRECTO! la capital de ${states[n]} es ${capitals[n]} \n Ahora tienes ${points} puntos. \n vas a tu pregunta ${i+1}`)
                } else if ((question == 3) && (option3 == capitals[n])){
                    points += 6
                    alert (`¡ES CORRECTO! la capital de ${states[n]} es ${capitals[n]} \n Ahora tienes ${points} puntos. \n vas a tu pregunta ${i+1}`)
                } else{
                    points -= 3
                    alert (`¡ES INCORRECTO! la capital de ${states[n]} es ${capitals[n]} \n Te quedan ${points} puntos`)
                }
            }else if (character===2){
                while (((option1 == option2) || (option1 == option3) || (option2 == option3))  
                || ((states.indexOf(option1)!=n) && (states.indexOf(option2)!=n) && (states.indexOf(option3)!=n))){/*Asignar nuevo Estado y monumento */
                option1 = capitals[selectStateCapitalsMonument()]
                    option1 = states[selectStateCapitalsMonument()]
                    option2 = states[selectStateCapitalsMonument()]
                    option3 = states[selectStateCapitalsMonument()]
                }

                question = Number(prompt(`Pregunta ${i} \n ¿En qué estado se encuentra ${monuments[n]}? \n Escriba una de las siguientes opciones: \n \n 1. ${option1} \n 2. ${option2} \n 3. ${option3} `))

                if ((question == 1) && (option1 == states[n])){
                    points += 6
                    alert (`¡ES CORRECTO! El monumento ${monuments[n]} se encuentra en el estado ${states[n]} \n Ahora tienes ${points} puntos.`)
                } else if ((question == 2) && (option2 == states[n])){
                        points += 6
                        alert (`¡ES CORRECTO! El monumento ${monuments[n]} se encuentra en el estado ${states[n]} \n Ahora tienes ${points} puntos.`)
                } else if ((question == 3) && (option3 == states[n])){
                    points += 6
                    alert (`¡ES CORRECTO! El monumento ${monuments[n]} se encuentra en el estado ${states[n]} \n Ahora tienes ${points} puntos.`)
                } else{
                    points -= 3
                    alert (`¡ES INCORRECTO! El monumento ${monuments[n]} se encuentra en el estado ${states[n]} \n Ahora tienes ${points} puntos.`)
                }
            } else {
                alert (`Debe escribir 1 o 2. ${question} es una opción inválida`)
            }


            if (points<3){
                return alert(`Juego terminado, no puedes seguir jugando con ${points} puntos`)
            }
        }
        alert (`¡FELICIDADES! ${gamerName} ¡GANASTE! con ${points} puntos.`)
    }   

}