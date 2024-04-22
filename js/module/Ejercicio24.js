export const empiezanConA = (arr)=>{
    let nuevoArray = arr.filter(function(palabra){
        return /^a/i.test(palabra)
    })
    return nuevoArray
}