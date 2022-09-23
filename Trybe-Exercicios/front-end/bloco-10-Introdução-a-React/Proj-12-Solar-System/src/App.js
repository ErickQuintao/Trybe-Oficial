import React from 'react';
import Header from './Header';
import SolarSystem from './SolarSystem';
import './App.css';
import Missions from './components/Missions';
import Header from './components/Header';
class App extends React.Component {
  render() {
    return (
		<Header />,
		<SolarSystem />,
		<Missions />
		
	);
  }
}

export default App;
