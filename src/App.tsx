import React, { FC, Suspense } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import routes from './routes/routers'

const App : FC = () => {
	return (
		<Routes>
			<Suspense fallback={<div>Loading...</div>}> 
				{routes.map(({path, getElement})=> (
					<Route path={path} element={getElement()} key={path}/>
				))}
			</Suspense>
		</Routes>	
	)
}

export default App
