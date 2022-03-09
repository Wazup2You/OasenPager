import React from 'react'
import styles from './styles/app.css'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration
} from 'remix'

export function meta() {
	return { title: 'Oasen' }
}

export function links() {
	return [{ rel: 'stylesheet', href: styles }]
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className='scrollbar-hide'>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
