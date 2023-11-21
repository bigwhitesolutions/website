import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';
export default ({ desktop }) => (React.createElement(Wrapper, { desktop: desktop },
    React.createElement(AnchorLink, { href: "#about" }, "About"),
    React.createElement(AnchorLink, { href: "#projects" }, "Projects"),
    React.createElement(AnchorLink, { href: "#contact" }, "Contact")));
