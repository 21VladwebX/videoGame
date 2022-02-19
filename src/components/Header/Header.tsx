import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { getLinks } from '../../navigations/routers'

import classes from './header.module.css'


const Header: FC = () => {


	return (
		<div className={classes.wrapper}>

			{getLinks().map(({ href, label }) => (
				<Link to={href} key={href} className={classes.link}>{label}</Link> 
			))}
			
		</div>
	)
}

export default Header

