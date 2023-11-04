import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import { ReactComponent as SupportIconImage } from "images/support-icon.svg";
import { ReactComponent as ShieldIconImage } from "images/shield-icon.svg";
import { ReactComponent as CustomerLoveIconImage } from "images/simple-icon.svg";
import { ReactComponent as financeImage } from "images/love-icon.svg";

import FistImage from "../images/be-apropos.png";
import SecondImage from "../images/be-vesion.png";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";

// grid images
import image1 from "../images/team_images/1.png";
import image2 from "../images/team_images/2.png";
import image3 from "../images/team_images/3.png";
import image4 from "../images/team_images/4.png";
import image5 from "../images/team_images/5.png";
import image6 from "../images/team_images/6.png";
import image7 from "../images/team_images/7.png";
import image8 from "../images/team_images/8.jpg";
import image9 from "../images/team_images/9.jpg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const cards = [
  {
    imageSrc: image6,
    position: "Président",
    name: "Yasser Zahri",
    links: [
      {
        url: "https://www.linkedin.com/in/zahri-yasser-b4846b256/",
        icon: LinkedinIcon,
      },
    ],
  },
  {
    imageSrc: image2,
    position: "Vice-président ",
    name: "Safae Afass",
    links: [
      {
        url: "https://www.linkedin.com/in/safae-afassi-824505266",
        icon: LinkedinIcon,
      },
    ],
  },
  {
    imageSrc: image7,
    position: "Responsable RH",
    name: "Sami Bouzerouata",
    links: [
      {
        url: "https://www.linkedin.com/in/sami-bouzerouata-2a5075269/",
        icon: LinkedinIcon,
      },
    ],
  },
  {
    imageSrc: image4,
    position: "Responsable Finance",
    name: "Mayssoun El Messoudi",
    links: [
      {
        url: "https://www.linkedin.com/in/maysoun-el-messaoudi-089079273",
        icon: LinkedinIcon,
      },
    ],
  },
  {
    imageSrc: image5,
    position: "Responsable Média",
    name: "Salma Aanzi",
    links: [
      {
        url: "https://www.linkedin.com/in/salma-aanzi-152a66265/",
        icon: LinkedinIcon,
      },
    ],
  },
  {
    imageSrc: image1,
    position: "Responsable Design",
    name: "Mohamed El Mrabet",
    links: [
      {
        url: "https://www.linkedin.com/in/mohamed-el-mrabet-231b74255/",
        icon: LinkedinIcon,
      },
    ],
  },
  {
    imageSrc: image3,
    position: "Secrétaire général",
    name: "Fatimaezzahra Gannoune",
    links: [
      {
        url: "https://linkedin.com/in/FatimaezzahraGannoune",
        icon: LinkedinIcon,
      },
    ],
  },
  {
    imageSrc: image8,
    position: "Responsable communication",
    name: "Ghizlane Hajji",
    links: [
      {
        url: "https://www.linkedin.com/in/ghizlane-hajji-60096b218",
        icon: LinkedinIcon,
      },
    ],
  },
  {
    imageSrc: image9,
    position: "Responsable de rédaction",
    name: "Imene bellout",
    links: [
      {
        url: "https://www.linkedin.com/in/imane-bellout-71a0b5255",
        icon: LinkedinIcon,
      },
    ],
  },
];
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>A propos de Bougeons ensemble</Subheading>}
        heading="Nous sommes un club à but non lucratif. "
        buttonRounded={false}
        primaryButtonText="Plus de details "
        description="Bougeons Ensemble est un club humanitaire universitaire,
        fondé le 12/10/2018 par des jeunes étudiants de la Faculté
        des Sciences et Techniques de Tanger, qui ont eu l'idée de
        créer un nouveau concept. Ce club humanitaire et charitable
        rassemble des personnes qui agissent pour un intérêt
        collectif, attentif aux besoins de la société. Son objectif est
        de soutenir l'idée de faire du bénévolat en tant que mode de
        vie, ceci à travers des actions et des activités associatives
        dont le but est la distribution d'un bénéfice aux personnes
        souffrant de difficultés."
        imageSrc={FistImage}
        // imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        id="ourvision"
        subheading={<Subheading>Notre vision</Subheading>}
        description="Le club compte à contribuer de manière significative au bien-être des membres les plus vulnérables de notre société. Nous avons choisi des domaines clés sur lesquels nous nous concentrons pour atteindre cet objectif, comme tout d'abord forer des puits, nourrir les pauvres et mener des activités culturelles qui nous aideront à récupérer des fonds. Nous répartissons également nos contributions dans le domaine de la santé, en organisant des journées de don du sang pour sensibiliser les personnes de son importance. Nous sommes déterminés à faire une différence par le biais de notre travail caritatif et nous voulons être le catalyseur dont le monde a besoin pour s'améliorer.  "
        heading="Notre objectif est de perturber l'espace de conception."
        buttonRounded={false}
        primaryButtonText="Contact nous"
        imageSrc={SecondImage}
        // imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Nos cellules</Subheading>}
        heading="les cellules ."
        description="Bougeons ensemble est un club composé de 4 cellules. "
        iconFill="#f6303f"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "cellule media",
            description:
              "est responsable de la création de contenu qui informe les gens sur le travail que le club réalise et sensibilise aux enjeux sociaux importants.",
          },
          {
            imageSrc: ShieldIconImage,
            title: "cellule design",
            description:
              "est responsable de développer des solutions créatives aux problèmes, comme la conception de logos ou la création de supports visuels pour les projets du club",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "cellule communication ",
            description:
              "est responsable de la coordination de toutes les communications du club, y compris la gestion des relations avec les médias.",
          },
          {
            imageSrc: financeImage,
            title: "cellule finance",
            description:
              "est chargée de collecter des fonds pour soutenir les activités du club et de gérer ses finances de manière responsable",
          },
        ]}
        linkText=""
      />
      <TeamCardGrid
        cards={cards}
        subheading={<Subheading>Notre équipe</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
