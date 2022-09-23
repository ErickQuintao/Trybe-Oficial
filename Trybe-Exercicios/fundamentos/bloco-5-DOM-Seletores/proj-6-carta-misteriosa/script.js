const input = document.querySelector('#text-input');
const memeGenerator = document.querySelector('#meme-image-container');

const digText = () =>{
	const div = document.createElement('div');
	const textP = document.createElement('p');
	textP.classList.add('text');
	textP.innerHTML = input.value;
	input.value = "";
	div.appendChild(memeGenerator);
	memeGenerator.appendChild(textP);

}
input.addEventListener('focusout', digText);
const arquivo = document.querySelector('#meme-insert');
const img = document.querySelector('#meme-image');
// requisito 2
arquivo.addEventListener('input' , function(){
	let imgEntrada = URL.createObjectURL(arquivo.files[0]);
	img.src = imgEntrada;
  });
  const first = document.querySelector('first');
  const second = document.querySelector('second');
  const three = document.querySelector('three');

  const red = ( )=> {
	img.classList.add('red');
  }
  first.addEventListener('click', red);
  second.addEventListener('click', blue);
  three.addEventListener('click', green);