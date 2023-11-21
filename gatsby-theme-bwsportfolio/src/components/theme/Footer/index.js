import React from "react";
import data from "../../../data";
import Container from "../../../components/common/Container";
import Social from "./Social";
import { Wrapper, Flex, Details } from "./styles";
export default () => (React.createElement(Wrapper, null,
    React.createElement(Flex, { as: Container },
        React.createElement(Details, null,
            React.createElement("h2", null, data.defaultTitle),
            React.createElement("span", null,
                "\u00A9 All rights are reserved | ",
                new Date().getFullYear(),
                " | Made with",
                " ",
                React.createElement("span", { "aria-label": "love", role: "img" }, "\uD83D\uDC96"),
                " ",
                "by",
                " ",
                React.createElement("a", { href: "https://smakosh.com/?ref=gatsby-theme-portfolio", rel: "noopener noreferrer", target: "_blank" }, "Smakosh"))),
        React.createElement(Social, null))));
