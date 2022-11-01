const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
 const simpons = JSON.parse(fileContent);
 const string = simpons.map( ({id,name}) =>`${id} ${name}`);
 string.forEach((element) => console.log(element));


}

readAll();