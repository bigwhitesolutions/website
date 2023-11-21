import React from "react";
import colors from "tokens/colors";
import { socialLinks } from "data";
import { Links } from "./styles";
import { Telegram, Github, Twitter, StackOverflow } from "../../../components/social";
export default () => (React.createElement(Links, null,
    socialLinks.telegram && (React.createElement("a", { href: socialLinks.telegram, target: "_blank", rel: "noopener noreferrer", "aria-label": "Get in touch with me Telegram" },
        React.createElement(Telegram, { color: colors.primary }))),
    socialLinks.github && (React.createElement("a", { href: socialLinks.github, target: "_blank", rel: "noopener noreferrer", "aria-label": "Folow me on GitHub" },
        React.createElement(Github, { color: colors.primary }))),
    socialLinks.twitter && (React.createElement("a", { href: socialLinks.twitter, target: "_blank", rel: "noopener noreferrer", "aria-label": "Follow me on Twitter" },
        React.createElement(Twitter, { color: colors.primary }))),
    socialLinks.stackOverflow && (React.createElement("a", { href: socialLinks.stackOverflow, target: "_blank", rel: "noopener noreferrer", "aria-label": "Follow me on StackOverflow" },
        React.createElement(StackOverflow, { color: colors.primary })))));
