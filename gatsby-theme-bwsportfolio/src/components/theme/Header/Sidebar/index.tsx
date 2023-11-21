import React from 'react'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

export default ({ sidebar, toggle }: {sidebar: boolean, toggle: any}) => (
	<Wrapper active={sidebar} onClick={toggle}>
		<NavbarLinks desktop={false} />
	</Wrapper>
)
