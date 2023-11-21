import React from "react";
import { Link } from "gatsby";
import data from "../../../../data";
import Container from "../../../../components/common/Container";
import NavbarLinks from "../NavbarLinks";
import { Wrapper } from "./styles";

export default () => (
  <Wrapper as={Container}>
    <Link to="/">{data.defaultTitle}</Link>
    <NavbarLinks desktop />
  </Wrapper>
);
