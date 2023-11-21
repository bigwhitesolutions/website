import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Container from "../../../components/common/Container";
import Card from "../../../components/common/Card";
import starIcon from "../../../assets/icons/star.svg";
import forkIcon from "../../../assets/icons/fork.svg";
import { Wrapper, Content, Stats } from "./styles";
export default () => {
    const { github: { viewer: { repositories: { edges } } } } = useStaticQuery(graphql `
      {
        github {
          viewer {
            repositories(
              first: 8
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `);
    return (React.createElement(Wrapper, { as: Container, id: "projects" },
        React.createElement("h2", null, "Projects"),
        React.createElement(Flex, { col: 4 }, edges.map(({ node: { id, url, name, description, stargazers, forkCount } }) => (React.createElement(Item, { key: id, col: 4, colTablet: 6, colMobile: 12, marginBottom: 30, gap: 1, stretch: true },
            React.createElement(Card, { as: "a", href: url, target: "_blank", rel: "noopener noreferrer" },
                React.createElement(Content, null,
                    React.createElement("h4", null, name),
                    React.createElement("p", null, description)),
                React.createElement(Stats, null,
                    React.createElement("div", null,
                        React.createElement("img", { src: starIcon, alt: "stars" }),
                        React.createElement("span", null, stargazers.totalCount)),
                    React.createElement("div", null,
                        React.createElement("img", { src: forkIcon, alt: "forks" }),
                        React.createElement("span", null, forkCount))))))))));
};
