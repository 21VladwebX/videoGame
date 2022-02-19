import React, { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getRoutes } from './navigations/routers'
import Header from './components/Header/Header'
import styles from './App.module.css'

const App: FC = () => {

	console.log(styles)
	return (
		<div className={styles.container}>
			<Header />
			<Suspense fallback={<div>Loading...</div>}> 
				<Routes>
					{getRoutes().map(({ path, getElement }) => (
						<Route path={path} element={getElement({})} key={path}/>
					))}
				</Routes>
			</Suspense>
		</div>	
	)
}

export default App
