import React from "react";
import data from "../../../data";
import Container from "../../../components/common/Container";
import Social from "./Social";
import { Wrapper, Flex, Details } from "./styles";

export default () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>{data.defaultTitle}</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} 
        </span>
      </Details>
      <Social />
    </Flex>
  </Wrapper>
);
