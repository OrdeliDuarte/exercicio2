/*
Os exercícios de hoje são divididos em interpretação e escrita de código. 
Para os de interpretação, coloque as respostas em comentários de código. 
Já, nos de escrita, lembre-se de imprimir no console os resultados.


█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██      
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████   
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██      
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 

██ ███    ██ ████████ ███████ ██████  ██████  ██████  ███████ ████████  █████   ██████  █████   ██████  
██ ████   ██    ██    ██      ██   ██ ██   ██ ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██ ██  ██    ██    █████   ██████  ██████  ██████  █████      ██    ███████ ██      ███████ ██    ██ 
██ ██  ██ ██    ██    ██      ██   ██ ██      ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██   ████    ██    ███████ ██   ██ ██      ██   ██ ███████    ██    ██   ██  ██████ ██   ██  ██████  


Tente responder os exercícios dessa seção sem executar o código. 
Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.                                                                                                                                                                                                

█████████████████████████████████████████████████████████████████████████████████████████████████████████

*/




//1. Leia o código abaixo:

let numero = 5

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/*
    a) Explique o que o código faz. Qual o teste que ele realiza?
     se o numero divido por 2 e não sobrar resto é impresso no terminal a mensagem "Passou no teste"
     se não, vai ser impresso no terminal a mensagem "Não passou no teste"

    b) Para que tipos de números ele imprime no console "Passou no teste"?
    se o resto for igual zero

    c) Para que tipos de números a mensagem é "Não passou no teste"? qualquer número que não for zero
*/


//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = "Uva"
let preco
switch (fruta.toUpperCase()) {
  case "LARANJA":
    preco = 3.5
    break;
  case "MAÇÃ":
    preco = 2.25
    break;
  case "UVA":
    preco = 0.30
    break;
  case "PÊRA":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log(`O preço da fruta ${fruta} é R$ ${preco}`)

/*
    a) Para que serve o código acima? Esse código serve para verificar o preço da variável, se for a certa ele vai imprimir o preço certo

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? O preço da fruta Maça é R$ 2.25

    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima 
    do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? O preço da fruta Pêra é R$ 5
*/


//3. Leia o código abaixo:

const num1 = 5
if(num1 > 0) {
  console.log("Esse número passou no teste")
	//let mensagem = "Essa mensagem é secreta!!!"
}

//console.log(mensagem)

/*
    a) O que a primeira linha está fazendo? Criando uma constante que recebe o valor 5

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? Daria erro do mesmo jeito

    c) Haverá algum erro no console? Justifique. Sim, ele está tentando imprimir uma variável que não foi criada
*/



/*
█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████

███████ ███████  ██████ ██████  ██ ████████  █████      ██████  ███████
██      ██      ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
█████   ███████ ██      ██████  ██    ██    ███████     ██   ██ █████
██           ██ ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
███████ ███████  ██████ ██   ██ ██    ██    ██   ██     ██████  ███████

 ██████  ██████  ██████  ██  ██████   ██████
██      ██    ██ ██   ██ ██ ██       ██    ██
██      ██    ██ ██   ██ ██ ██   ███ ██    ██
██      ██    ██ ██   ██ ██ ██    ██ ██    ██
 ██████  ██████  ██████  ██  ██████   ██████

█████████████████████████████████████████████████████████████████████████████████████████████████████████
*/


/*
1. Faça um programa que declare uma variável com a sua idade e imprima no console um teste dizendo se você pode ou não dirigir (apenas maiores de idade).
*/

let idade = 15

if (idade >= 18){
  console.log("Você está apto a dirigir/ser preso")
} else {
  console.log("Você ainda não pode dirigir/ser preso")
}


/*
2. Agora pesquise no Google o horário atual no Vietnã. Declare uma variável do tipo string que contenha os valores "manhã", "tarde", "noite" ou "madrugada"
com base no fuso horário do Vietnã. Utilize o bloco if/else para escrever uma mensagem, sendo ela "Bom dia, Vietnã!", "Boa tarde, Vietnã", "Boa noite, Vietnã" ou "Boa madrugada, Vietnã", dependendo de qual for o seu fuso horário atual.
*/

// Obtém o horário atual
const agora = new Date();

// Subtrai 14 horas (14 * 60 * 60 * 1000 milissegundos)
const quatorzeHoras = 14 * 60 * 60 * 1000;
const dataMenos14Horas = new Date(agora.getTime() - quatorzeHoras);

const horas = String(dataMenos14Horas.getHours()).padStart(2, '0');
const minutos = String(dataMenos14Horas.getMinutes()).padStart(2, '0');
const segundos = String(dataMenos14Horas.getSeconds()).padStart(2, '0');

const horarioFormatado = `${horas}:${minutos}:${segundos}`;

if (horas >= 18 || horas <= 23){
  console.log("boa noite Vietnã, agora são:", horarioFormatado)
} else if (horas >= 6 || horas <= 11) {
  console.log("bom dia Vietnã, agora são:", horarioFormatado)
} else if (horas >= 12 || horas <= 17 ) {
  console.log("boa tarde Vietnã, agora são:", horarioFormatado)
} else if (horas <= 0 || horas >= 5) {
  console.log("volta a dormior Vietnã, agora são:", horarioFormatado)
} else {
  console.log("deu errado")
}




/*
3. Agora repita o exercício anterior, porém utilizando o bloco Switch/Case e utilizando o fuso horário do Havaí.
*/

// Obtém o horário atual
const agora1 = new Date();

// Subtrai 14 horas (14 * 60 * 60 * 1000 milissegundos)
const quatorzeHoras1 = 7 * 60 * 60 * 1000;
const dataMenos14Horas1 = new Date(agora.getTime() - quatorzeHoras);

const horas1 = String(dataMenos14Horas.getHours()).padStart(2, '0');
const minutos1 = String(dataMenos14Horas.getMinutes()).padStart(2, '0');
const segundos1 = String(dataMenos14Horas.getSeconds()).padStart(2, '0');

const horarioFormatado1 = `${horas1}:${minutos}:${segundos}`;

switch (horas1) {
  case horas1 >=0 && horas1 <=5:
    console.log("Vai dormir, agora são:", horarioFormatado1)
  break;
case horas1 >=6 && horas1 <= 11:
    console.log("Bom dia Hawaii, agora são:", horarioFormatado1)
  break;
case horas1 >= 12 && horas <= 17:
    console.log("Boa tarde Hawaii, agora são:", horarioFormatado1)
  break;
case horas1 >= 16 && horas1 <=23:
    console.log("Boa noite Hawaii, agora são:", horarioFormatado1)
  break;
default:
  console.log("Meu deus, o código deu errado :(")
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* let */ num34 = 324
let num3 = 324

if (num34 == num3){console.log("Sucesso")
}

//////////////////////////////////////////////////////////////////////////////////////////

let num4 = 435635

if (num3 !== num4){
  console.log("Seus números são diferentes")
}else{
  console.log("Seus números não são diferentes")
}

///////////////////////////////////////////////////////////////////////////////////////////

let num5 = 10
let num6 = 11

if (num5 > num6){
  console.log("num5 é maior que num6")
} else if (num5 < num6){
  console.log('num5 é menor que num6')
} else { console.log("As variáveis tem o mesmo valor")
}

///////////////Switch case//////////////////
console.log("///////////////////////////////////////////")

let pokemon = "bulbasauro"

switch (pokemon) {
  case "charmander":
    console.log("O pokemon que você escolheu é do tipo fogo (fanboy)")

    break;
    case "squirtle":
    console.log("O pokemon que você escolheu é do tipo água (Pelo menos não é fanboy)")

    break;
    case "bulbasauro":
    console.log("O pokemon que você escolheu é do tipo planta e veneno (OBS: Escolha certa)")
    break;
    default:
    console.log("Escolhe o bulbasauro")
    break;
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let ensinoMedioConcluido = false
let cursandoOutraFaculdade = false

if (idade >= 18 && cursandoOutraFaculdade == false && ensinoMedioConcluido == true){
  console.log("Você pode cursar uma faculdade")
} else {
  console.log("Você não pode cursar uma faculdade")
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
