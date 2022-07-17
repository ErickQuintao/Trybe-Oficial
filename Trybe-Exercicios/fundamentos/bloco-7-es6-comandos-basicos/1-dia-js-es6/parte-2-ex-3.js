let first = document.getElementById('first');
let second = document.getElementById('second');
let clickCount = 0;
console.log(first);
console.log(second);
	first.addEventListener("click", ()=>{
		second.innerHTML = clickCount += 1;
		
	})
	
 