import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from '../common/pages/login/Login';
import PharmacogeneticResults from '../common/pages/pharmacogeneticResults/PharmacogeneticResults';
import SignUp from '../common/pages/signup/SignUp';
import Home from '../pages/home/Home';

export default function Routing() {
	const routingList = [
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/signup',
			element: <SignUp />,
		},
		{
			//Pharmacogenetic Results
			path: '/pharmacogenetic',
			element: <PharmacogeneticResults />,
		},
	];
	return (
		<Routes>
			{routingList.map((route) => (
				<Route path={route.path} element={route.element} />
			))}
		</Routes>
	);
}
