// um algoritmo para inverter uma palavra
function reverse(s){
    return s.split("").reverse().join("");
}

var sss = reverse("trybe")
console.log(sss);

//solucao da trybe
// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);