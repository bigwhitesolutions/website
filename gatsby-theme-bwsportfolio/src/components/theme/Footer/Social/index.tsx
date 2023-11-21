import React from "react";
import colors from  "../../../../tokens/colors";
import data from "../../../../data";
import { Links } from "./styles";
import { Github, StackOverflow } from "../../../../components/social"

export default () => (
  <Links>
  
    {data.socialLinks.github && (
      <a
        href={data.socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow me on GitHub"
      >
        <Github color={colors.primary} />
      </a>
    )}
  
  </Links>
);
