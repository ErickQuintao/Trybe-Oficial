function toLimit(string = " "){
	string.value = string.value.substring(0,40);
}
function toLimiter(string = " "){
	string.value = string.value.substring(0,40);
}
function toLim(string = " "){
	string.value = string.value.substring(0,500);
}
let eleven = document.querySelector('#eleven');
 eleven.addEventListener('click', (event)=>{
	event.preventDefault();
 })
 