import React, { useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay } from './styles';
export default () => {
    const [sidebar, toggle] = useState(false);
    return (React.createElement(Wrapper, null,
        React.createElement(Overlay, { sidebar: sidebar, onClick: () => toggle(!sidebar) }),
        React.createElement(Navbar, null),
        React.createElement(Hamburger, { sidebar: sidebar, toggle: toggle }),
        React.createElement(Sidebar, { sidebar: sidebar, toggle: toggle })));
};
