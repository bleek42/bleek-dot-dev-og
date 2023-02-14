import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './components/Contact/Contact';

export default function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/projects" component={Projects}></Route>
					<Route path="/contact" component={Contact}></Route>
				</Switch>
			</Router>
		</Fragment>
	);
}

