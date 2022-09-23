let bubble  = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    
// function bubbleSort () {
//     for (let i = 0; i < bubble.length; i++) {
//         if (bubble[i] > bubble[i +1]) {
//             let v1 = bubble[i]
//             let v2 = bubble[i +1] 								//ordenar de forma crescente.
//             bubble[i] = v2
//             bubble[i +1] = v1
//         }
//     }
// }

// for (let j = 0; j < bubble.length ; j++) {
//     bubbleSort();
// }

// console.log(bubble)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

