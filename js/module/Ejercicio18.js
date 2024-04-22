export const max = (arr)=>{
    let maximus = 0
    arr.forEach(element => {
        if (element>maximus){
            maximus = element
        }
    });
    return maximus
}