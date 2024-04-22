export const password = (contrasena)=>{
    contrasena = contrasena.toLowerCase()
    contrasena = contrasena.replace(/\s/g, '')
    contrasena = contrasena.replace(/a/g, '4');
    contrasena = contrasena.replace(/e/g, '3');
    contrasena = contrasena.replace(/i/g, '1');
    contrasena = contrasena.replace(/o/g, '0');

    return contrasena
}