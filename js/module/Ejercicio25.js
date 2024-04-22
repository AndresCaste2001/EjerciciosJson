export const terminanConS = (arr)=>{
    let nuevoArray = arr.filter(function(palabra){
        return /s$/i.test(palabra)
    })
    return nuevoArray
}