import React from "react";
import Container from "../../../components/common/Container";
import TalkIllustration from "../../../components/illustrations/TalkIllustration";
import { Wrapper, Details, Thumbnail } from "./styles";

export default () => (
  <Wrapper as={Container} id="contact">
    <Details>
    <p>Get in touch</p>
    Say <a href="mailto:shaun@bigwhitesolutions.com">Hi</a> or find me on other platforms:
    </Details>
    <Thumbnail>
      <TalkIllustration />
    </Thumbnail>
  </Wrapper>
);
