const fs = require('fs').promisses;

// async function createJson (){
//     const fileContent = await fs
//     .readFile('./simpsons.json','utf-8');
//     const simpsons = JSON.parse(fileContent);
//     const handleNewJson = 
//     simpsons.filter((e) =>  e.id === 1 && e.id === 2 && 
//     e.id === 3 && e.id === 4 );
//     await fs.writeFile('./simpsonFamily.json', JSON.stringify(handleNewJson));
// }
// function main(){
//     createJson();
// }
// main();

// ...
 async function createSimpsonsFamily() {
   const fileContent = await fs
     .readFile('./simpsons.json', 'utf-8');

   const simpsons = JSON.parse(fileContent);

   const familyIds = [1, 2, 3, 4];
   const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
   }
   function main() {
    createSimpsonsFamily();
     }
  main();
  //deu erro de readFile undefined ,mas eu conferir no gabarito e nao tem nada de errado