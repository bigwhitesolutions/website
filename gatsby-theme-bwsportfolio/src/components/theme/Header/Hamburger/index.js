import React from 'react';
import { Wrapper, Bar } from './styles';
export default ({ sidebar, toggle }) => (React.createElement(Wrapper, { sidebar: sidebar, onClick: () => toggle(!sidebar) },
    React.createElement(Bar, { top: true, sidebar: sidebar }),
    React.createElement(Bar, { mid: true, sidebar: sidebar }),
    React.createElement(Bar, { bottom: true, sidebar: sidebar })));
