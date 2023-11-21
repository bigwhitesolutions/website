import React from "react";
import Container from "../../../components/common/Container";
import TalkIllustration from "../../../components/illustrations/TalkIllustration";
import { Wrapper, Details, Thumbnail } from "./styles";
export default () => (React.createElement(Wrapper, { as: Container, id: "contact" },
    React.createElement(Details, null),
    React.createElement(Thumbnail, null,
        React.createElement(TalkIllustration, null))));
