import React from 'react'
import Form from './Form'
class InputNome extends React.Component {

	
	render(){
		const { value, hlander } = this.props;
		let error = undefined;
		if(value.type !== 'string') error = 'e para escreve palavra';
		return(
			<label>
			Nome:
			<input type="text" name="inputName" value={value} onChange={this.hlander}></input>
		</label>,
		<span>{error ?error : ''} </span>
		);
	}
};
export default InputNome
