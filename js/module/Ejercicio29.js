export const numAsteriscos = (arr)=>{
    let cont = 0
    arr.forEach(element => {
        cont += (element.match(/\*/g) || []).length;
    });

    return cont;
}