import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import { NavLink as Link } from "react-router-dom";

// activities images 
import activitie1 from "../../images/activities_images/activities1.jpg";
import activitie2 from "../../images/activities_images/activities2.jpg";
import activitie3 from "../../images/activities_images/activities3.jpg";
import activitie4 from "../../images/activities_images/activities4.jpg";
import activitie5 from "../../images/activities_images/activities5.jpg";
import activitie6 from "../../images/activities_images/activities6.jpg";
import activitie7 from "../../images/activities_images/activities7.jpg";



const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;
const NavLink = tw(Link)`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
// const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  const blogPosts = [
    {
      imageSrc: activitie1,
      category: "Chaque année, BOUGEONS ENSEMBLE organise la CARAVANE ALDIFEE .....",
      title: "Caravane Aldifee",
      url: "/activities/caravaneAldifee"
    },
    {
      imageSrc: activitie2,
      category: "Notre club s'engage à réaménager des écoles chaque année ...",
      title: "Réaménagement des écoles",
      url: "/activities/réaménagementdesEcoles"
    },
    {
      imageSrc: activitie3,
      category: "L'initiative Défi Khouk vise à fournir des vêtements chauds aux sans-abris de Tanger...",
      title: "Deffi Khouk",
      url: "/activities/deffiKhouk"
    },
    {
      imageSrc:activitie4,
      category: "Notre club  lance Le panier de Ramadan en collectant des denrées ...",
      title: "Panier du Ramadan",
      url: "/activities/panierduRamadan"
    },
    {
      imageSrc: activitie5,
      category: "Nous avons distribué des repas aux sans-abri pendant le Ramadan ...",
      title: "Iftar Saim",
      url: "/activities/iftarSaim"
    },
    {
      imageSrc:activitie6,
      category: "Notre équipe a collaboré avec la Fondation Souqya pour initier une action humanitaire.",
      title: "Forage de puit",
      url: "/activities/forageDePuit"
    },
    {
      imageSrc: activitie7,
      category: "chaque année notre club s'engage à organiser  des campagnes de don du sang...",
      title: "Don du sang",
      url: "/activities/donDuSang"
    }
  ]
  return (
    
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Nos activities</HeadingTitle>
          {/* <HeadingDescription>Some amazing blog posts that are written by even more amazing people.</HeadingDescription> */}
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Category>{post.category}</Category>
                <Title>{post.title}</Title>
                <NavLink to={post.url}>Plus de details </NavLink>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
    
  );
};
