export const min = (arr)=>{
    let minimo = arr[0]
    arr.forEach(element => {
        if (element<minimo){
            minimo = element
        }
    });
    return minimo
}