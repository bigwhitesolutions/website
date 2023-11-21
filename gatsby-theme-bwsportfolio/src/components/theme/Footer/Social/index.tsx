import React from "react";
import colors from  "../../../../tokens/colors";
import data from "../../../../data";
import { Links } from "./styles";
import { Telegram, Github, Twitter, StackOverflow } from "../../../../components/social" //"../../../../components/social";

export default () => (
  <Links>
    {data.socialLinks.telegram && (
      <a
        href={data.socialLinks.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get in touch with me Telegram"
      >
        <Telegram color={colors.primary} />
      </a>
    )}
    {data.socialLinks.github && (
      <a
        href={data.socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Folow me on GitHub"
      >
        <Github color={colors.primary} />
      </a>
    )}
    {data.socialLinks.twitter && (
      <a
        href={data.socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow me on Twitter"
      >
        <Twitter color={colors.primary} />
      </a>
    )}
    {data.socialLinks.stackOverflow && (
      <a
        href={data.socialLinks.stackOverflow}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow me on StackOverflow"
      >
        <StackOverflow color={colors.primary} />
      </a>
    )}
  </Links>
);
