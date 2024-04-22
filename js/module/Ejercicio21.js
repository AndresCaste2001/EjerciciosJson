export const pares = (arr)=>{
    let arrayPar = arr.filter(function(elemento){
        return elemento%2 === 0;
    });
    return arrayPar
}