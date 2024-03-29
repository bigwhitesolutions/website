import styled from 'styled-components'

export const Wrapper = styled.div<{active: boolean}>`
	position: fixed;
	z-index: 4;
	overflow: auto;
	top: 0px;
	right: -275px;
	width: 0;
	opacity: 0;
	height: 100%;
	background-color: #fff;
	transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

	${(props) =>
		props.active &&
		`
			width: 20%;
			right: 0px;
			opacity: 1;

			@media (max-width: 960px) {
				width: 40%;
			}

			@media (max-width: 600px) {
				width: 75%;
			}
	`}
`
