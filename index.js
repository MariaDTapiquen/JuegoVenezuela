import { startingPoints } from './functions/dice.js';
import { correct } from './functions/rigthName.js'
import { selectLevel } from './functions/selectLevel.js'
import { selectCharacter } from './functions/selectCharacter.js'
import { questions } from './functions/questions.js';


let gamerName = prompt("Ingrese su nombre").toUpperCase()

if (!correct(gamerName)){

    let points = startingPoints(gamerName)

    let level = selectLevel(gamerName)

    let character = selectCharacter(gamerName)

    questions(points,level,character,gamerName)

} else{
    alert("Su nombre debe contener solo letras sin espacios");
}
