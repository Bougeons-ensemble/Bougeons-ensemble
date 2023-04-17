import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
// import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
// import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
// import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";


const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)`text-gray-700 `;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

// const RatingsInfo = styled.div`
//   ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
//   svg {
//     ${tw`w-6 h-6 text-yellow-500 fill-current`}
//   }
// `;
// const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

// const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
// const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
// const IconContainer = styled.div`
//   ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
//   svg {
//     ${tw`w-3 h-3`}
//   }
// `;
// const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Caravane Aldifee",
      description: "Dans le cadre de nos différentes activités humanitaires toujours fidèles à l'objectif ultime de notre club qui est de redonner le sourire aux pauvres et aux nécessiteux, l'équipe de BOUGEONS ENSEMBLE , organise chaque année une nouvelle édition  de l'activité: CARAVANE ALDIFEE au profit des habitants des provinces lointaines . Dans chaque édition, plusieurs familles bénéficient d’un panier de produits alimentaires élémentaires ainsi qu’un ensemble des vêtements et de chaussures pour les membres de chaque famille , au-cours de la préparation pour cette action un ensemble des pré-activités ont eu lieu : tri de vêtements , stands, porte à porte… Nous sommes reconnaissants envers La charité des bienfaiteurs qui permet d'offrir chaleur et réconfort aux familles défavorisées chaque hiver, créant ainsi une expérience mémorable. à faire une différence dans la vie des gens.",
      // locationText: "Ibiza, Spain",
      // pricingText: "USD 50/Day",
      // rating: "4.8",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Réaménagement des écoles",
      description: "Il est nécessaire que l'environnement scolaire soit agréable pour que les élèves puissent étudier dans des conditions optimales. Le CLUB BOUGEONS ENSEMBLE  s'engage ainsi  à réaménager des écoles dans le cadre de l'un de ses projets annuels . L'objectif est de créer un espace de vie scolaire adapté et propice à l'apprentissage. Les activités menées dans le cadre de ce projet de réaménagement comprennent notamment la peinture, le jardinage, le dessin, et d'autres activités simples mais qui apportent de la joie aux élèves. L'objectif est d'embellir les espaces de vie scolaire, et de créer un environnement plus accueillant et plus engageant pour tous. Ce projet est un exemple concret de la façon dont la communauté peut se mobiliser pour améliorer l'environnement éducatif et contribuer à l'épanouissement des enfants. En créant un environnement scolaire plus agréable et plus stimulant, nous pouvons aider les élèves à réaliser leur plein potentiel",
      // locationText: "Ibiza, Spain",
      // pricingText: "USD 50/Day",
      // rating: 4.9,
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Deffi Khouk",
      description: "L'initiative < Défi Khouk > est une action louable qui vise à soutenir les sans-abris de Tanger en leur fournissant des vêtements chauds pour lutter contre les conditions climatiques rigoureuses de la région. Les membres de l'équipe ont travaillé avec ardeur pour collecter des vêtements auprès de donateurs, puis les trier et les distribuer aux personnes les plus nécessiteuses.  Cette initiative est empreinte de solidarité et de compassion envers les personnes qui vivent dans des conditions précaires, souvent ignorées par la société. Grâce à l'engagement de ces bénévoles, les sans-abris ont pu recevoir des vêtements de qualité qui leur ont permis de se protéger du froid et de retrouver une dignité qu'ils méritent.",
      // locationText: "Palo Alto, CA",
      // pricingText: "USD 19/Day",
      // rating: "5.0",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Panier du Ramadan",
      description: "Le mois du Ramadan est l'occasion pour les musulmans de renforcer leur spiritualité et leur engagement envers la générosité et la solidarité. Dans ce contexte, le CLUB BOUGEONS ENSEMBLE lance < Le panier de Ramadan >, une initiative qui consiste à collecter des denrées alimentaires de base ;  sucre,  farine, huile  et autres produits de première nécessité pour les redistribuer aux familles démunies de Tanger à s'alimenter dignement.  Grâce à cette initiative, le CLUB BOUGEONS ENSEMBLE espère apporter un peu de réconfort et de soulagement aux personnes en difficulté pendant ce mois sacré de l'année.",
      // locationText: "Arizona, RAK",
      // pricingText: "USD 99/Day",
      // rating: 4.5,
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Iftar Saim",
      description: "Le CLUB BOUGEONS ENSEMBLE a mené une action humanitaire remarquable en distribuant des repas pour les gens sans abri pour qu'ils puissent rompre leurs jeun. dans le cadre du mois de Ramadan. Cette initiative visait à soulager les personnes en situation de précarité qui n'ont pas les moyens de se nourrir convenablement pendant cette période de jeun. Les membres du club ont travaillé avec dévouement pour préparer ces repas équilibrés et nutritifs, comprenant du lait, des dattes, du pain, des mini sandwichs , et d'autres produits pour les distribuer aux pauvres  à l'heure de la rupture du jeûne.",
      // locationText: "Arizona, RAK",
      // pricingText: "USD 99/Day",
      // rating: 4.5,
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Forage de puit",
      description: "forage de puits Une initiative humanitaire en partenariat avec la Fondation Souqya pour forer des puits dans des régions reculées où l'accès à l'eau potable est malheureusement difficile pour ces communautés . Et Pour rendre cette action plus ludique et interactive pour les enfants  de ces régions , des activités de divertissement ont été organisées pendant les fouilles. Cette action humanitaire illustre parfaitement les valeurs fondamentales que prône le CLUB BOUGEONS ENSEMBLE, à savoir l'empathie, la bienveillance et le souci du bien-être collectif pour une société plus juste et solidaire .",
      // locationText: "Arizona, RAK",
      // pricingText: "USD 99/Day",
      // rating: 4.5,
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Don du sang ",
      description: "Chaque jour au moins une dizaine de patients galèrent pour être transfusés. Et afin de répondre à la pénurie du sang à laquelle notre pays fait face , le club Bougeons Ensemble, en partenariat avec le centre régional de transfusion sanguine de Tanger, s'engage chaque année dans l'organisation des compagnes de don du sang au sein de la faculté de sciences et techniques de Tanger en facilitant le processus du don et permettant aux donateurs de laisser eux aussi un impact positif dans la vie des autres qui qu'une poche de sang peut leurs sauver la vie . BOUGEONS ENSEMBLE vous donne rendez-vous chaque année en vous apportant l'opportunité de sauver la vie de vos frères et sœurs, d'aider à arracher une mère aux griffes de la mort et aussi de faire voir à un enfant l'aube d'un nouveau jour.",
      // locationText: "Arizona, RAK",
      // pricingText: "USD 99/Day",
      // rating: 4.5,
    },
  ]

  return (
    <AnimationRevealPage>
      <Header />
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Nos activities</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  {/* <RatingsInfo>
                    <StarIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo> */}
                </TitleReviewContainer>
                {/* <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer> */}
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton>plus details</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
    </AnimationRevealPage>
  );
};
