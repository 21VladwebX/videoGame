import React, { lazy } from 'react'
import { FC } from 'react'

interface Routes {
    path: string,
    getElement: FC 
}

interface Navigations {
    path: string,
    getElement: FC,
    label: string
}

const MainPage: FC = lazy(() => import('../pages/Main/Main'))
const DevlabPage: FC = lazy(() => import('../pages/Devlab/Devlab'))

type linkType = {
    href: string,
    label: string
}

const navigationsItems: Array<Navigations> = [{
	path: '/',
	getElement: () => <MainPage />,
	label: 'Main page'
}, {
	path: '/devlab',
	getElement: () => <DevlabPage />,
	label: 'Devlab'
}]

export const getRoutes = (): Array<Routes> => navigationsItems.map(({ path, getElement }) => ({
	path,
	getElement
}))

export const getLinks = (): Array<linkType> => navigationsItems.map(({ path, label }) => ({
	href: path,
	label
}))
