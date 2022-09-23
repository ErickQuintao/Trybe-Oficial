import React from 'react'
import Form from './Form'

class InputIdade extends React.Component {
	render(){
			const {value, hlander} = this.props;
		return(
			<label>
				Idade:
				<input type="number" name="inputIdade" value={value} onChange={this.hlander}></input>
			</label>
		);
	}
}
export default InputIdade