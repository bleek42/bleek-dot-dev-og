import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

export default function App() {
	const [count, setCount] = useState(0);

	return (
		// <Fragment>
		// 	<Landing />
		// </Fragment>

		<Fragment>
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						component={Landing}></Route>
					<Route
						path="/about"
						component={About}></Route>
					<Route
						path="/projects"
						component={Projects}></Route>
					<Route
						path="/contact"
						component={Contact}></Route>
				</Switch>
			</Router>
		</Fragment>

		// <div className="App">
		//   <div>
		//     <a href="https://vitejs.dev" target="_blank">
		//       <img src={viteLogo} className="logo" alt="Vite logo" />
		//     </a>
		//     <a href="https://reactjs.org" target="_blank">
		//       <img src={reactLogo} className="logo react" alt="React logo" />
		//     </a>
		//   </div>
		//   <h1>Vite + React</h1>
		//   <div className="card">
		//     <button onClick={() => setCount((count) => count + 1)}>
		//       count is {count}
		//     </button>
		//     <p>
		//       Edit <code>src/App.tsx</code> and save to test HMR
		//     </p>
		//   </div>
		//   <p className="read-the-docs">
		//     Click on the Vite and React logos to learn more
		//   </p>
		// </div>
	);
}
