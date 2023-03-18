import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Routing from './Routing/Routing';
import './common/styles/base.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</div>
	);
}

export default App;
