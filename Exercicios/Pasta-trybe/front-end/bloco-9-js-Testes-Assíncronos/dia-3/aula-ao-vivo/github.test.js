// require('./fetchSimulator');
const { getGitHubUserInfos, getUserReposUrl}= require('./github');

expectedInfo = {
	 name: 'Matheus Alexandre',
	company: '@natahouse ',
	twitter: undefined,
	bio: 'Full-stack developer at @natahouse \r\nReact | JavaScript | NodeJs | TypeScript | PostgreSQL ',
	location: 'Brazil' 
};

describe('quando chamade, a função getGitHubUserInfos', () => {
	test('deve retornar um objecto contendo',async () => {
	userInfo = await getGitHubUserInfos('alexandremhm');
	expect(userInfo).toEqual(expectedInfo);
	});
	test('deve chamar a fnção fetch', async () => {
		await getGitHubUserInfos('alexandremhm');
		expect(fetch).toHaveBeenCalled();
		const user = 'alexandremhm';
		const url = `https://api.github.com/users/${user}`;
		expect(fetch).toHaveBeenCaleedWith(url);
	});
	test('com usuarios inexistente, deve retornar um erro \'Usuario Invalido',async () => {
			try{
			await getGitHubUserInfos('usiarios-inexistentes');	
			} catch(error){
				expect(error).toEqual(new Error('Usuario invalido'));
			}
	});
});