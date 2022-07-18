import React from 'react';

class aplicativo extends React.Component {
	render(){
		const skills = ['html','css','js','node','js6','react'];
 const jsxSkills =skills.map((skill) => <li>{skill}</li>);
		return(
			<h1>Erick,</h1>,
			<p> sou inteligente, tenho 15 anos comecei a programar serio no dia 27 fev de 2022</p>,
			<h2>MInhas Habilidades</h2>,
			<ul>{jsxSkills}</ul>
			);
	}
}

export default aplicativo;