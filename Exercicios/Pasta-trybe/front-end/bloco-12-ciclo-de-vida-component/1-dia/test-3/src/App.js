// src/App.js
import React from 'react';
import './App.css';
import Profile from './components/Profile.js';
import Connections from './components/Connections.js';
import PersonCard from './components/PersonCard.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  showProfile: true,
};

this.changeProfile = this.changeProfile.bind(this);
  }

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    const { showProfile } = this.state;
return (
  <div className="gitNetwork d-flex flex-column justify-content-center">
    { showProfile ? <Profile /> : null }
    <div className="central d-flex justify-content-center">
      <button
        className="btn btn-dark align-self-center"
        type="button"
        onClick={ this.changeProfile }
      >
        Mostrar / Ocultar Perfil
      </button>
    </div>
    <Connections />
  </div>,
  <div>
    <PersonCard  />
  </div>
);
}
}

export default App;