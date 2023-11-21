import React from "react";
import Container from "../../../components/common/Container";
import TalkIllustration from "../../../components/illustrations/TalkIllustration";
import { Wrapper, Details, Thumbnail } from "./styles";

export default () => (
  <Wrapper as={Container} id="contact">
    <Details>
    </Details>
    <Thumbnail>
      <TalkIllustration />
    </Thumbnail>
  </Wrapper>
);
