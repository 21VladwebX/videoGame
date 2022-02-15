import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type linkType = {
    href: string,
    label: string
}


const links: Array<linkType> = [{
	href: '/some',
	label: 'some',
}]

const Header: FC = () => {


	return (
		<div className='header'>

			{links.map(({ href, label }) => (
				<Link to={href} key={href}>{label}</Link> 
			))}
			
		</div>
	)
}

export default Header

