import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";

import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature id="experiences" />
    <Features />
    <MainFeature2 />
    {/* <Portfolio /> */}
    <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Our Clients <span tw="text-primary-500">Love Us.</span>
        </>
      }
      description="Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      testimonials={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          quote:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
          customerName: "Charlotte Hale",
          customerTitle: "CEO, Tesla Inc.",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
          quote:
            "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
          customerName: "Adam Cuppy",
          customerTitle: "Founder, Nestle",
        },
      ]}
      textOnLeft={true}
    />
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      description="Voici quelques questions fréquemment posées sur notre club par nos donateurs aimants. Si vous avez d'autres questions, n'hésitez pas à communiquer avec nous au moyen du formulaire ci-dessous."
      subheading="FAQs"
      heading={
        <>
          Avez-vous des <span tw="text-primary-500">questions ?</span>
        </>
      }
      faqs={[
        {
          question: "Comment nous rejoindre ?",
          answer:
            "Le club étant un club universitaire, l'adhésion est limitée aux seuls étudiants de la Faculté des Sciences et Techniques de Tanger.Les portes du club sont ouvertes aux étudiants au début de chaque saison académique et également pendant la saison scolaire (au besoin).",
        },
        {
          question: "Notre objectif ?",
          answer:
            "Notre objectif est de soutenir l'idée du volontariat comme mode de vie, à travers des actions, des activités et des voyages caritatifs visant à distribuer le bénéfice aux personnes en difficulté.",
        },
        {
          question: "Qui sommes-nous?",
          answer:
            "Bougeons Ensemble est un club universitaire caritatif à but non lucratif qui relève de la Faculté des Sciences et Techniques de Tanger et a été fondé en 2018 par les étudiants de cette faculté.Ce club humanitaire rassemble des personnes qui travaillent pour l'intérêt collectif qui prend soin des besoins de la communauté.",
        },
      ]}
    />
    {/* <Blog /> */}
    {/* <contactUs /> */}
    {/* <ContactUsForm /> */}
    <Footer />
  </AnimationRevealPage>
);
