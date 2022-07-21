import React from 'react'

class Form extends React.Component {

constructor(props){
	super(props);
this.state = {
	inputName: '',
	inputIdade: 0,
	textArea: '',
	inputBox: false,
	file:""
};
this.hlander = this.hlander.bind(this);

}
hlander({target}){
	const { name} = target;
	const value = target.type === 'checkbox' ? target.checked : target.value;
	this.setState({ 
		[name]: value
	})
};

render() {
	return(
		<div>
		<form className ="form-main">
		<fieldset>
			<legend>Parte incial</legend>
			<InputNome value={this.state.inputName}/>
			<InputIdade value={this.state.inputIdade}/>
			<label>
				Idade:
				<input type="checkbox" name="inputBox" value={this.state.inputBox} onChange={this.hlander}></input>
			</label>
			<label>
				Arquivo:
				<input type="file" name="file" value={this.state.file} onChange={this.handler} />
			</label>
			</fieldset>
			<fieldset>
				<legend>Parte final</legend>
			<label>
				Descrição:
				<textarea name="textArea" value={this.state.textArea} onChange={this.hlander}></textarea>
			</label>
			<label>
			Escolhe:
			<select>
				<option name="first">1</option>
				<option name="first">2</option>
				<option name="first">3</option>
			</select>
			</label>
			</fieldset>
		</form>
	</div>
	);
}
}