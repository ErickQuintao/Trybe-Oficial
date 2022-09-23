const string1 = () => 'Acordando!!';
const string2 = () => 'Bora tomar café!!';
const string3 = () => 'Partir dormir!!';
const doingThings = (callback) => {
	const result = callback();
	console.log(result);
}
doingThings(string1);
doingThings(string2);
doingThings(string3);
