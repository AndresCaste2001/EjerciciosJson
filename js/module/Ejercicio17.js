export const capitalizar2 =(palabra)=>{
    let arrayPalabra = palabra.split(" ")
    arrayPalabra.forEach((element, index) => {
        arrayPalabra[index] = element.charAt(0).toUpperCase() + element.slice(1);
    });
    return arrayPalabra.join(" ")
}