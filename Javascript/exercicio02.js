/* 
imc = peso / (altura * altura)
abaixo de 18.5 abaixo do peso;
entre 18.5 e 25 peso normal;
entre 25 e 30 Acima do peso;
entre 30 e 40 Obeso;
acima de 40 obesidade grave;

*/



const peso = 75;
const altura = 1.70;
const imc = peso / Math.pow(altura,2);
console.log(imc);

if (imc < 18.5){
    console.log('Abaixo do peso')
} else if (imc >= 18.5 && imc < 25){
    console.log('peso normal')
}else if (imc >= 25 && imc < 30){
    console.log('Acima do peso')
}else if (imc >= 30 && imc <40){
    console.log('Obeso')
}else {
    console.log('Obesidade Grave')
}