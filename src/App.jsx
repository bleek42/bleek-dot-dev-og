import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

function App() {
	const [landing, setLanding] = useState(true);

	return (
		<div className="App">
			{landing ? (
				<LandingPage landing={setLanding} />
			) : (
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route path="/about" component={About}></Route>
						<Route path="/projects" component={Projects}></Route>
						<Route path="/contact" component={Contact}></Route>
					</Switch>
				</Router>
			)}
		</div>
	);
}

export default App;
