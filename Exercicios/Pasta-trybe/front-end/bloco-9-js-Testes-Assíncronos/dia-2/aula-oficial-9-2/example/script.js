function append(data){
	const ul = document.querySelector('ul');

	const li = document.createElement('li');
	const divNome = document.createElement('div');
	const divImage = document.createElement('div');
	const img = document.createElement('img');

	divNome.innerText = data.name;
	img.src = data.imageUrl;
	divImage.appendChild(img);
	li.appendChild(divNome);
	li.appendChild(divImage);

	ul.appendChild(li);

}
function fetchPokemon (){
fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
	 response.json().then((obj)=> {
		append({
			name: obj.name,
			imageUrl: obj.sprites.front_default,
		});
	});
})
}

window.onload = fetchPokemon;