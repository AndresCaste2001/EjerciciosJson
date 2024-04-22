export const duplicar = (arr)=>{
    let arrayNuevo = arr.map(function(elemento){
        return elemento*2;
    });
    return arrayNuevo
}