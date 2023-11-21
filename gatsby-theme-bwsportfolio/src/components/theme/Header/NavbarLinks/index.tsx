import React from 'react'
import { Wrapper } from './styles'

export default ({ desktop }: { desktop:boolean}) => (
	<Wrapper desktop={desktop}>
		<a href="#about">About</a>
		<a href="#projects">Projects</a>
		<a href="#contact">Contact</a>
	</Wrapper>
)
