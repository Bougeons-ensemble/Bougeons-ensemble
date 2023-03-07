import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import heroImage from "../../images/hero.jpg";
import Header, {
  NavLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("${heroImage}");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2 text-5xl`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;
const AnchorElement = tw.a``;
const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default (navLinks) => {
  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>
              Nous avons maintenant lancé des opérations à Tanger.
            </Notification>
            <Heading>
              <span>le meilleur club</span>
              <br />
              <SlantedBackground>Bougeons Ensemble.</SlantedBackground>
            </Heading>
            <AnchorElement href="#experiences">
              <PrimaryAction>En savoir plus sur nous</PrimaryAction>
            </AnchorElement>
          </LeftColumn>
          <RightColumn>
            {/* <StyledResponsiveVideoEmbed
              url="https://dms.licdn.com/playlist/D4E05AQFy10KhCEHH2A/mp4-720p-30fp-crf28/0/1676749491442?e=1678309200&v=beta&t=AsXcOJR28zd7hEybhFGfFBOJAkknHLAjx_8qNTs2rUA"
              background="transparent"
            /> */}
            <StyledResponsiveVideoEmbed
              poster="https://media.licdn.com/dms/image/C4E05AQHzqpMAr0uTmw/feedshare-thumbnail_720_1280/0/1676414134377?e=1678309200&amp;v=beta&amp;t=Aia5UaWRLXUtJrdD2aWNxLcrb02-3UrGYZuJ8kHTQEE"
              url="https://dms.licdn.com/playlist/C4E05AQHzqpMAr0uTmw/mp4-720p-30fp-crf28/0/1676416732464?e=1678309200&amp;v=beta&amp;t=gzqGLb8IQJgfvnsYM_y9KBi-qOpWg90X21g4KfkeHO0"
            ></StyledResponsiveVideoEmbed>
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
