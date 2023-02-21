import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './page/Contact';

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

