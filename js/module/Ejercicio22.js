export const posiciones = (arr)=>{
    let arrayNuevo = arr.map(function(elemento, index){
        return index;
    }).filter(function(posicion){
        return arr[posicion]%2===0
    });
    return arrayNuevo
}