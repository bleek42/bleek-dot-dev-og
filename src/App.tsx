import { Fragment, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Landing />}
				/>
				<Route
					path="/home"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/projects"
					element={<Projects />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
