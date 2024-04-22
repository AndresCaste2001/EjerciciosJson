export const numeroDeAes = (palabra)=>{
    return (palabra.match((/a/g)) || []).length;
}
