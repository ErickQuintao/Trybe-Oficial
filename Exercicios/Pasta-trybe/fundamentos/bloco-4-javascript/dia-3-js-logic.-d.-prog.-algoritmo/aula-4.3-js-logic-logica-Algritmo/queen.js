let queenRow = 8;
let queenColumn = 8;
let opponentRow = 7;
let opponentColumn = 2;

let canAttack = false;
if(queenRow === opponentRow || queenColumn === opponentColumn){
	canAttack = true;
}
//simula movimento na direçao superior esquerda
for(let index = 1;index <= 8;index += 1){
let newQueenRow = queenRow + index;
let newQueenColumn = queenColumn - index;
console.log(newQueenRow, newQueenColumn);
if(newQueenRow > 8 || newQueenColumn  < 1){
	console.log('Break');
	break;
} else if(newQueenRow === opponentRow && newQueenColumn === opponentColumn){
	canAttack =true;
}
}

console.log("A rainha pode atacar?", canAttack);

//simula movimento na direçao superior direita
for(let index = 1;index <= 8;index += 1){
	let newQueenRow = queenRow = index;
	let newQueenColumn = queenColumn + index;

	if(newQueenRow > 8 || newQueenColumn > 8){
		break;
	}
	else if(newQueenRow === opponentRow && newQueenColumn === opponentColumn){
		canAttack = true;
	}
	console.log(newQueenRow, newQueenColumn);
}
console.log("A rainha pode atacar?", canAttack);

//simula movimento na direçao inferior esquerda
for(let index = 1;index <= 8;index += 1){
	let newQueenRow = queenRow - index;
	let newQueenColumn = queenColumn - index;
  console.log(newQueenRow, newQueenColumn);
 if(newQueenRow < 1 || newQueenColumn < 1){
	break;
 }
 else if(newQueenRow === opponentRow && newQueenColumn === opponentColumn){
	canAttack = true;
 }     
}

//simula movimento na direçao inferior direita
for(let index = 1;index <= 8;index += 1){
	let newQueenRow = queenRow -index;
	let newQueenColumn = queenColumn + index;

	if(newQueenRow < 1 || newQueenColumn > 8){
		break;
	}
	else if(newQueenRow === opponentRow && newQueenColumn === opponentColumn){
		canAttack = true;
	}
}