import React, { lazy } from 'react'
import { FC }from 'react'

interface Routes {
    path: string,
    getElement: FC
}


const MainPage = lazy(() => import('../pages/Main'))


const routes: Routes[] = [{
	path: '/',
	getElement: () => <MainPage />
}]

export default routes