import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from '../common/pages/Login';
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
	];
	return (
		<Routes>
			{routingList.map((route) => (
				<Route path={route.path} element={route.element} />
			))}
		</Routes>
	);
}
