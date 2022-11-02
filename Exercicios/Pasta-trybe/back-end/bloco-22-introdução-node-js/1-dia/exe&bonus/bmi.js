
const read = require('readline-sync');
function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;
  
  return bmi;
}

// A função main é o ponto de partida do nosso programa
const BMI_MAX_AND_MIN = {
    'Underweight': {
      minBMI: 0,
      maxBMI: 18.4,
    },
    'Normal Weight': {
      minBMI: 18.5,
      maxBMI: 24.9,
    },
    'Overweight': {
      minBMI: 25,
      maxBMI: 29.9,
    },
    'Obese Class I': {
      minBMI: 30.0,
      maxBMI: 34.9,
    },
    'Obese Class II': {
      minBMI: 35,
      maxBMI: 39.9,
    },
    'Obese Class III': {
      minBMI: 40,
      maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
    },
  };
function main() {
const weightInKg = read.questionFloat('qual e seu peso?  ');
const heightInCm= read.questionInt('qual e a sua altura?  ');
  const bmi = handleBMI(weightInKg, heightInCm);
   const bmi2 = bmi.toFixed(2);
   const bmiResult = handleBMIResult(bmi2);
   console.log(bmiResult);
   console.log(`BMI: ${bmi2}`);
 
}
function handleBMIResult(bmi2) {
    const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]
  
    const resultFind = statuses.find((status) => {
      const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada
  
      // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
      return bmi2 >= minBMI && bmi2 <= maxBMI;
    });
  
    return resultFind;
  }
main();




// function imc (height,weight){
//     try{
//       const resulImc = height / weight;  
//     return resulImc;
//     }
//     catch(error){
//         console.error(`erro:  ${error}`)
//     }
// }
// modules.exports = {
//     imc
// }