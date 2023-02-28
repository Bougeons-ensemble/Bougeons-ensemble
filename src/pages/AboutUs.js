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

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>A propos de Bougeons ensemble</Subheading>}
        heading="nous sommes non lucratif club "
        buttonRounded={false}
        primaryButtonText="plus de details "
        primaryButtonUrl = "#ourvision"
        description="Bougeons ensemble est un club à but non lucratif dont le but est d'aider les personnes dans le besoin #TeamBe"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        />
      <MainFeature1
        id="ourvision"
        subheading={<Subheading>Notre vision</Subheading>}
        description="La vision du Club Bougeons Ensemble à Tanger est de créer une communauté d'individus partageant les mêmes idées et passionnés par l'idée d'avoir un impact positif dans leur région. Grâce à la collaboration, l'innovation et l'engagement actif, nous visons à construire un réseau dynamique qui permet aux membres de contribuer au développement de Tanger et de ses habitants. Notre vision est de devenir une force motrice de changement positif, en promouvant la responsabilité sociale, le développement durable et l'inclusivité. Nous croyons qu'en travaillant ensemble, nous pouvons créer un avenir meilleur pour tous et inspirer les autres à nous rejoindre dans notre mission.
        "
        heading="Notre objectif est de perturber l'espace de conception."
        buttonRounded={false}
        primaryButtonText="Contact nous"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
        primaryButtonUrl = "/contactus"
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Bougeons ensemble est un club à but non lucratif dont le but est d'aider les personnes dans le besoin #TeamBe"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
