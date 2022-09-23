const VALID_USERNAME = alexandremhm;
const VALID_URL = `https://api.github.com/users/${VALID_USERNAME}`;

const data = {
	name: 'Matheus Alexandre',
	company: '@natahouse ',
	twitter: undefined,
	bio: 'Full-stack developer at @natahouse \r\nReact | JavaScript | NodeJs | TypeScript | PostgreSQL ',
	location: 'Brazil' ,
};
const fetchSimulator = (url)=> {
if(!url || url !== VALID_URL){
	return Promisse.reject(new Error('Usuario inválido'));
};
return new Promisse((resolve) => {
	setTimeout(() => {
		resolve({
			json: () => Promisse.resolve(data),
		});
	} ,200); 
});
};
global.fetch = jest.fn(fetchSimulator);
afterEach(jest.clearAllMocks);