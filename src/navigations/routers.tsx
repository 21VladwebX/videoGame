import React, { lazy } from 'react'
import { FC }from 'react'

interface Routes {
    path: string,
    getElement: FC 
}


const MainPage = lazy(() => import('../pages/Main'))


const getRoutes = (): Array<Routes>=> [{
	path: '/',
	getElement: () => <MainPage />
}]

export default getRoutes


// type GenericType<T> = T extends (...args: any[]) => infer R ? R : never


// const func = (a: number) => ({value: a})

// type funcType = GenericType<typeof func>

// const res: funcType = func(2) 

// console.log(res.value)

