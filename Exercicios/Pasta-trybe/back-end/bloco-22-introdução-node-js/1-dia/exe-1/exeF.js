const fs = require('fs').promises;

async function addMaggieToFamily () {
    const fileContent = await fs.readFile('./simpsonFamily.json','utf-8');
    const simpson = JSON.parse(fileContent);
    const simpsonFamily = simpson.filter((e)=> e.id !== '8');
    simpsonFamily.push({"id":"5","name":"Maggie Simpson"});
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));

}
function main(){
    addMaggieToFamily();
}
main();
