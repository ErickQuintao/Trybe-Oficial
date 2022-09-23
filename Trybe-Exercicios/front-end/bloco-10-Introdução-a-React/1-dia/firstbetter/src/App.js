import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
function App() {
	const array =[
		'tomar cafe','academia','voto','descançar','almoçar','estudar','jantar', 'domir'
	];
	const element = array.map((element) => <li>{element}</li>);
	  return (
		  <div>
		  	<Header />,
			<ul>{element}</ul>,
			<Content />,
			<Footer />
			</div>
   );
};

export default App;
