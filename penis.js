const input = document.getElementById('penis123')
const resultado = document.getElementById('resposta')
const numeros = Number(input.value)

function avaliar(){

if (input.value == ''){
    alert('[ERROR] Digite algo...')
}else{
    if(Number(input.value) > 50 ){
        alert('[ERROR] Isso não existe, digite um valor valido...')
    }
}

if (Number(input.value) > 0 && Number(input.value) < 10){
    resultado.innerHTML=`Pequeno 😭`
}
if (Number(input.value) > 10 && Number(input.value) <= 17){
    resultado.innerHTML=`Medio 😎`
}
if (Number(input.value) > 17 && Number(input.value) < 30){
    resultado.innerHTML=`Grande 🏴`
}
if (Number(input.value) >= 30 && Number(input.value) <= 50){
    resultado.innerHTML=`Kid 2 🍆`
}
}