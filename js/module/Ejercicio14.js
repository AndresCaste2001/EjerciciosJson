export const sumarArreglo = (arr, inicio, final)=>{
    let suma = 0
    for(let i = inicio; i<=final; i++){
        suma += arr[i]
    }
    return suma
  }