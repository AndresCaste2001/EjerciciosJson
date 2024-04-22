export const removerCeros = (arr)=>{
   let NuevoArray = arr.filter(function(numero){
        return numero!==0;
   });

   return NuevoArray
}
