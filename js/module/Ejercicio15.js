export const transcribir = (cadena)=>{
    let cadenaNueva = cadena.replace(/[GCTA]/g, function(match){
        if(match === 'G'){
            return 'C';
        }else if(match === 'C'){
            return 'G'
        }else if(match === 'T'){
            return 'A'
        }else if(match === 'A'){
            return 'U'
        }
    });

    return cadenaNueva
  }