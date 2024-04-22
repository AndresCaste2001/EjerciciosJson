export const bmi = (peso, altura)=>{
    let prom = peso / (altura^2)
    if(prom<18.5){
        return "bajo de peso"
    }else if(prom>=18.5 && prom<=24.9){
        return "Normal"
    }else if(prom>=25 && prom<=29.9){
        return "Sobrepeso"
    }else if(prom>30){
        return "Obeso"
    }
}