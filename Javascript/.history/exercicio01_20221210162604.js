

/* 
media = (nota 1 + nota 2 + nota 3) /3
media menor que 5 reprovação
media entre 5 e 7 recuperação
media acima de 7 passou

 */ 

const nota1 = 7.1;
const nota2 = 7.5;
const nota3 = 7.3;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5){
    console.log('Reprovação')
}  
else if(media >= 5 && media <= 7){
    console.log('Recuperação')
}else {
    console.log('Passou de semestre')
}


