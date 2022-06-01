export function startingPoints(gamerName){
    let initialPoints = Math.floor(Math.random()*(6-3))+3

    alert(`${gamerName} se te otorgaron ${initialPoints} puntos para iniciar el juego`)

    return initialPoints

}

// export function throwDice6(){
//     return Math.floor(Math.random()*6)+1
// }