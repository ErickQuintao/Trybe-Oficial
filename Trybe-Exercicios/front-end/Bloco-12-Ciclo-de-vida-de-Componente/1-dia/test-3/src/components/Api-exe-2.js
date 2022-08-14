import React from 'react'

class ApiTest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
      isLoaded: false,
      items: []
        };
    }
 componentDidMount() {
    fetch(`https://api.randomuser.me/`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  shouldComponentUpdate() {
 const {items : { age }} = this.state;
    const maxContactsNumber = 50;

  return  maxContactsNumber <= age;
  }
   render(){
    const { items: { name, email, location, gender  }} = this.state;
    const card = (
      <div id="first">

        <h1>Dados</h1>,
        <h2>
        {name}
        </h2>
        <span>
        {email}
        </span>
       <span>
       {location}
       </span>
      <p>
      {gender}
      </p>
      </div>
    );
    return(
      <div>
        {card}
      </div>
    );
   }

}
export default ApiTest