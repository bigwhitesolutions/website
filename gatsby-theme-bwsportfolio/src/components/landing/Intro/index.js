import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Header from "../../../components/theme/Header";
import Container from "../../../components/common/Container";
import Button from "../../../components/common/Button";
import DevIllustration from "../../../components/illustrations/DevIllustration";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";
export default () => {
    const { content: { frontmatter: { title, description, action } } } = useStaticQuery(graphql `
    query {
      content: markdownRemark(frontmatter: { section: { eq: "intro" } }) {
        frontmatter {
          title
          description
          action
        }
      }
    }
  `);
    return (React.createElement(Wrapper, null,
        React.createElement(Header, null),
        React.createElement(IntroWrapper, { as: Container },
            React.createElement(Details, null,
                React.createElement("h1", null, title),
                React.createElement("h4", null, description),
                React.createElement(Button, { as: AnchorLink, href: "#contact" }, action)),
            React.createElement(Thumbnail, null,
                React.createElement(DevIllustration, null)))));
};
