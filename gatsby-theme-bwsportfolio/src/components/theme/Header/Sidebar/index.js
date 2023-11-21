import React from 'react';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';
export default ({ sidebar, toggle }) => (React.createElement(Wrapper, { active: sidebar, onClick: toggle },
    React.createElement(NavbarLinks, null)));
