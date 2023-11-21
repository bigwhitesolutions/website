import styled from "styled-components";
import colors from "tokens/colors";
export const Wrapper = styled.div `
  padding-bottom: 4rem;
  background-image: ${({ color = colors.primaryOverlay }) => `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 837.3 703.7'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23${color}%7D%3C/style%3E%3C/defs%3E%3Cpath d='M0 0s147.8 100.8 67.5 300.3S620 377.5 620 377.5l-24.2 180.4 40.6 131.5 201-62.8V0z' class='a'/%3E%3Cpath d='M439.4 310.9c-45.1-1.6-88-16.1-129-32s-81.5-33.6-125.5-42c-28.3-5.4-60.7-6.2-83.4 9-22 14.6-29 39.7-32.9 63.1-2.8 17.6-4.5 36.1 3.3 52.6 5.5 11.4 15.2 21 21.9 32 23.3 38 6.8 85-18.5 122.2-11.8 17.5-25.5 34.1-34.7 52.7s-13.3 39.8-5.3 58.8C43.2 646 62 660.2 82.5 670c41.6 20.1 90.5 26 138.3 29.2 105.7 7.2 212 4 318 1a934 934 0 0 0 117.1-8.4c21.4-3.4 43.5-8.8 59.1-21.6a49.5 49.5 0 0 0 11.4-64.7c-22.2-34.4-83.5-43-99-80-8.6-20.3.2-43 12.6-61.9 26.6-40.5 71.2-76 73.6-122.3 1.6-31.8-19.9-63.6-53-78.6C625.8 247 577.6 249 552 275c-26.5 26.8-72.9 37.2-112.6 35.8z' class='a'/%3E%3C/svg%3E")`};
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;
export const IntroWrapper = styled.div `
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const Details = styled.div `
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: #212121;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: #707070;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;
export const Thumbnail = styled.div `
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
