
import './App.scss';
import Recipe from './Recipe/Recipe';
import RecipeDetails from './Recipe/RecipeDetails/RecipeDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
	return (
		<Router>
			<article className="App">
				<div className="container">
					<Switch>
						<Route exact path="/" component={Recipe} />
						<Route exact path="/:title" component={RecipeDetails} />
					</Switch>
				</div>
			</article >
		</Router>
	);
}

export default App;
