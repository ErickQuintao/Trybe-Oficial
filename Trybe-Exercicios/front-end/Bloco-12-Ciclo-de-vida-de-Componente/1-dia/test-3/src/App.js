// src/App.js
import React from 'react';
import './App.css';
import Timer from "./components/Timer.js"

class App extends React.Component {
 constructor(props){
  super(props);
  this.state ={
    showTimer: false
  };
  this.toggleTimer = this.toggleTimer.bind(this);

  toglleTimer()  {
    this.setState((prevState) => ({showTimer: !prevState.showTimer }));
   }
 

 render(){
  const{ showTimer } = this.state;
  return(
    <div>

      <main>
        {showTimer && <Timer />}
        <button typetype="button" onCLick={this.toglleTimer}>
          {showTimer ? 'Desligar Timer' : 'Ligar Timer'}
        </button>
      </main>
      </div>
  );
 }
}

export default App;


// import Profile from './components/Profile.js';
// import Connections from './components/Connections.js';
// import PersonCard from './components/PersonCard.js';

// constructor(props) {
//   super(props);
//   this.state = {
// showProfile: true,
// };

// this.changeProfile = this.changeProfile.bind(this);
// }

// changeProfile() {
//   const { showProfile } = this.state;

//   this.setState({ showProfile: !showProfile });
// }

// render() {
//   const { showProfile } = this.state;
// return (
// <div className="gitNetwork d-flex flex-column justify-content-center">
//   { showProfile ? <Profile /> : null }
//   <div className="central d-flex justify-content-center">
//     <button
//       className="btn btn-dark align-self-center"
//       type="button"
//       onClick={ this.changeProfile }
//     >
//       Mostrar / Ocultar Perfil
//     </button>
//   </div>
//   <Connections />
// </div>,
// <div>
//   <PersonCard  />
// </div>
// );
// }