export function selectLevel(gamerName){

    const level = Number(prompt(`${gamerName} \n¿Qué nivel vas a jugar? \n 1. Fácil: 6 preguntas \n 2. Medio: 15 preguntas \n 3. Difícil: 26 preguntas`))

    switch (level){
        case 1:
            return 6
        case 2:
            return 15
        case 3:
            return 26
        default:
            alert("Debe ingresar 1,2 o 3")
            break
    }

}