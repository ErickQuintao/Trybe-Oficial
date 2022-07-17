const input = document.getElementById("carta-texto");
const button = document.getElementById("criar-carta");
const tagP = document.getElementById("carta-gerada");
let styleGroup = ['newspaper', 'magazine1', 'magazine2'];
let sizeGroup = ['medium', 'big', 'reallybig'];
let rotateGroup = ['rotateleft', 'rotateright'];
let skewGroup = ['skewleft', 'skewright'];

const createLetter = () => {
	const valueInput = input.value;
	let arrayInput = valueInput.split(' ');
	console.log(arrayInput);
	for(let i = 0; i < arrayInput.length; i +=1){
		const span = document.createElement('span');
		span.innerText =arrayInput[i];
		tagP.appendChild(span);
		numberRandom(span);
		
	}

}
button.addEventListener("click", createLetter);

function numberRandom(parament){
	parament.classList.add(styleGroup[Math.floor(Math.random() * styleGroup.length)])
	parament.classList.add(sizeGroup[Math.floor(Math.random() * sizeGroup.length)])
	parament.classList.add(rotateGroup[Math.floor(Math.random() * rotateGroup.length)])
	parament.classList.add(skewGroup[Math.floor(Math.random() * skewGroup.length)])
  
  }
