
import './App.scss';
import Recipe from './Recipe/Recipe';
import Detail from './Detail/Detail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
	return (
		<Router>
			<article className="App">
				<Switch>
					<Route exact path="/" component={Recipe} />
					<Route exact path="/:apiRef" component={Detail} />
				</Switch>
			</article >
		</Router>
	);
}

export default App;
