// const techList = (arr,string) =>{
		
// 		for (i in arr){
// 			const obj ={};
// 		let or = `tech:${arr[i]}
// 			 name:${string}`;
// 			 obj.push(or);
// 		}
// }
// techList('python','erick');
// techList.js
const techList = (arrayTechnologies, name) => {
	if (arrayTechnologies.length === 0) return 'Vazio!';
  
	const sortedArray = arrayTechnologies.sort();
	const technologyList = [];
  
	for (let index = 0; index < sortedArray.length; index += 1) {
	  technologyList.push({
		tech: sortedArray[index],
		name,
	  });
	}
  
	return technologyList;
  };
  
  module.exports = techList;