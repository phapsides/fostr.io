
import './App.scss';
import Recipe from './Recipe/Recipe';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
	return (
		<Router>
			<article className="App">
				<Switch>
					<Route exact path="/" component={Recipe} />
				</Switch>
			</article >
		</Router>
	);
}

export default App;
