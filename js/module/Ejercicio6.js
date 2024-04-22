export const fizzBuzz = (num)=>{
    let salida = ""
    if(num % 3 == 0){
        salida += "fizz"
    }
    if(num%5 == 0){
        salida += "buzz"
    }
    if(salida == ""){
        return num
    }
    return salida
}