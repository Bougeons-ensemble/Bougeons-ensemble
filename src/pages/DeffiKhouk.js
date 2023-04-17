// import React from "react";

// // import tw from "twin.macro";

// // import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// // const HeadingTexte = tw()`text-gray-900`;
// export default ({
//     Heading  ="hello caravane  ",

//   }) => {

//     return (
//       <AnimationRevealPage>
//      <p >{Heading}</p>
//       </AnimationRevealPage>
//     );
//   };
  
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../components/misc/Headings.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import deffiKHOK1 from "../images/activities_images/deffiKhok2.jpeg";
import deffiKhok2 from "../images/activities_images/deffiKhok3.jpeg";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
// const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    // {
    //   imageSrc: caravan1,
    //   // subtitle: "Paid",
    //   // title: "Loachella, NYC",
    //   description:
    //     "Dans le cadre de nos différentes activités humanitaires toujours fidèles à l'objectif ultime de notre club qui est de redonner le sourire aux pauvres et aux nécessiteux, l'équipe de BOUGEONS ENSEMBLE , organise chaque année une nouvelle édition  de l'activité: CARAVANE ALDIFEE au profit des habitants des provinces lointaines .",
    //   // url: "https://timerse.com"
    // },

    {
      imageSrc: deffiKHOK1,
          // subtitle: "Free",
      // title: "Rock In Rio, Upstate",
      description:
        "Il est nécessaire que l'environnement scolaire soit agréable pour que les élèves puissent étudier dans des conditions optimales. Le CLUB BOUGEONS ENSEMBLE  s'engage ainsi  à réaménager des écoles dans le cadre de l'un de ses projets annuels . L'objectif est de créer un espace de vie scolaire adapté et propice à l'apprentissage. Les activités menées dans le cadre de ce projet de réaménagement comprennent notamment la peinture, le jardinage, le dessin, et d'autres activités simples mais qui apportent de la joie aux élèves. L'objectif est d'embellir les espaces de vie scolaire, et de créer un environnement plus accueillant et plus engageant pour tous.",
      // url: "https://timerse.com"
    },

    {
      imageSrc: deffiKhok2,
          // subtitle: "Exclusive",
      // title: "Lollapalooza, Manhattan",
      description:
        "Ce projet est un exemple concret de la façon dont la communauté peut se mobiliser pour améliorer l'environnement éducatif et contribuer à l'épanouissement des enfants. En créant un environnement scolaire plus agréable et plus stimulant, nous pouvons aider les élèves à réaliser leur plein potentiel.",
      // url: "https://timerse.com"
    }
  ];

  return (
    <AnimationRevealPage>
      <Header />
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Deffi Khouk</HeadingTitle>
          <HeadingDescription>
            
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                {/* <Link href={card.url}>See Event Details</Link> */}
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
    <Footer/>
    </AnimationRevealPage>
  );
};

