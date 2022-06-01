export function correct (name){
    for (let i = 0; i < name.length; i++){
        if (!(name.charCodeAt(i)>=65 && name.charCodeAt(1)<=90)){
            return false
        }
    }   
}