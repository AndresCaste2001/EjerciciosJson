export const numAsteriscosM = (matriz)=>{
    let cont = 0
    matriz.forEach(element => {
        element.forEach(array =>{
            cont += (array.match(/\*/g) || []).length;
        })
    });

    return cont;
}