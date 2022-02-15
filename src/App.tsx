import React, { FC, Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import getRoutes from './navigations/routers'
import Header from './components/Header'

const App: FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}> 
			<Header />
			
			<Routes>
				{getRoutes().map(({ path, getElement }) => (
					<Route path={path} element={getElement({})} key={path}/>
				))}
			</Routes>
		</Suspense>	
	)
}

export default App
