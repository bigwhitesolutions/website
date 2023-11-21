import React from "react";
import { Link } from "gatsby";
import { defaultTitle } from "data";
import Container from "components/common/Container";
import NavbarLinks from "../NavbarLinks";
import { Wrapper } from "./styles";
export default () => (React.createElement(Wrapper, { as: Container },
    React.createElement(Link, { to: "/" }, defaultTitle),
    React.createElement(NavbarLinks, { desktop: true })));
