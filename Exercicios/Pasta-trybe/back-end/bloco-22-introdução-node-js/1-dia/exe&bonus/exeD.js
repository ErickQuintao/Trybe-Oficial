 const fs = require('fs').promises;

 async function addNelsonToFamily() {
   const fileContent = await fs
     .readFile('./simpsonFamily.json', 'utf-8');
  
   const simpsonsFamily = JSON.parse(fileContent);

   simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
   await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
    }
function main(){
   addNelsonToFamily();
}
main();