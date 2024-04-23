export const numerosAPalabras = (arr)=>{
    let numerosLetra = ["cero", "uno", "dos", "tres", "cuatro","cinco", "seis", "siete", "ocho", "nueve"]
    let arrayletra = arr.map(function(numero){
        return numerosLetra[numero];
    });
    return arrayletra
 }