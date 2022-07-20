// import React from 'react'
// import PropTypes from 'prop-types';
// import planets from '../data/planets';
// class PlanetCard extends React.Component {
// 	render (){
// 		const {name , image} = planets;
// 		const planetName = planets.map(planet => planet.name );
// 		const planetImage = planets.map(planet => planet.image);
// 		return(
// 			<div>
// 		<p>{planetName}</p>
// 		<img src={planetImage}  alt={ `Planeta ${planetName}`}></img>	
// 	</div>
// 		);
// 	}
	
// }
import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div
        className="container-div-planetcard"
        data-testid="planet-card"
      >

        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />

      </div>

    );
  }
}
PlanetCard.propTypes = {
	planetImage: PropTypes.string.isRequired,
	planetName: PropTypes.string.isRequired,
  };
export default PlanetCard