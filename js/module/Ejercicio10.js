export const numeroDeCaracteres = (palabra, char)=>{
    let regex = new RegExp(char, 'g')
    return (palabra.match(regex) || []).length;
}
