export const palabrasANumeros = (arr)=>{
    let numeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };
    
    let numerosTraducidos = palabras.map(function(palabra) {
        if (numeros.hasOwnProperty(palabra)) {
            return numeros[palabra];
        } else {
            return -1;
        }
    });
    
    return numerosTraducidos;
 }