const email = document.getElementById("input-Email");
const senha = document.getElementById("input-senha");
const button = document.getElementById("button");
const verificarLogin = () => {
	if(email.value === 'tryber@teste.com' && senha.value === '123456'){
		alert('funcionou');
	button.removeAttribute('disabled');
	} else {
		alert('erro!');
	}
}
const clickTest = () => {
	senha.value ='';
		email.value ="";
}
button.addEventListener('mouseover',verificarLogin);
button.addEventListener('click', clickTest)

const buttonFinal = document.getElementById('agreement');
const inputFinal = document.getElementById('input-first');
const clickInput = () =>{
	buttonFinal.removeAttribute('disabled');
}
inputFinal.addEventListener('click' ,clickInput);
const changeClick = () =>{
	alert('enviado');
}
buttonFinal.addEventListener('click', changeClick);
//conserta o verficar 