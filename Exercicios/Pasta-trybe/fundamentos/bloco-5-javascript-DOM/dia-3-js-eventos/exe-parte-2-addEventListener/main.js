const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let bet = document.getElementById('mouse');
bet.addEventListener('click',oneLi);
function oneLi(){
	thirdLi.classList.add('tech');
}
let rote = document.getElementById('rote');
rote.addEventListener('click',twoLi);
function twoLi(){
	thirdLi.classList.remove('tech');
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
let lut = document.getElementById('input');
lut.addEventListener('onsubmit',port);
function port(){
	lut.innerText;
}
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
let link = document.getElementById("my-spotrybefy");
link.addEventListener('dblclick',threeLi);
function threeLi(){
window.location="https://erickquintao.github.io/ErickQuintaoDEV-1.github.io/";
}
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:
let lin = document.getElementById("my-spotrybefy");
lin.addEventListener('mouseover',resetText);
function resetText() {
  lin.classList.add('terra');
}
lin.addEventListener('mouseleave', threeLi);
function threeLi(){
	lin.classList.remove('terra');
}
