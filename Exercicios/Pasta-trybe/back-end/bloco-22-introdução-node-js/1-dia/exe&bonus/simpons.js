const fs = require('fs').promises;

 async function getSimpsonById(id) {
  const fileContent = await fs
     .readFile('./simpsons.json', 'utf-8');
  
     const simpons = JSON.parse(fileContent);
  const chosenSimpons = simpons.find((simpons) => 
  Number(simpons.id) === id);
  if(!chosenSimpons){
      throw new error('id nao encotrado');
  }
  return chosenSimpson;
 }
 // Opção 1:
async function main() {
    const simpson = await getSimpsonById(1);
    console.log(simpson);
  }
  main();

