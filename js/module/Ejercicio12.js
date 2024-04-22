export const multiplicarArreglo = (arr)=>{
    let suma = 1
    arr.forEach(element => {
        suma *= element
    });
    return suma
}
