import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
// import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";

// import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature id="experiences" />
    {/* <Features /> */}
    <MainFeature2 />
    {/* <Portfolio /> */}
    {/* <Testimonial
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
    /> */}
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      description="Voici quelques questions fr??quemment pos??es sur notre club par nos donateurs aimants. Si vous avez d'autres questions, n'h??sitez pas ?? communiquer avec nous au moyen du formulaire ci-dessous."
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
            "Le club ??tant un club universitaire, l'adh??sion est limit??e aux seuls ??tudiants de la Facult?? des Sciences et Techniques de Tanger.Les portes du club sont ouvertes aux ??tudiants au d??but de chaque saison acad??mique et ??galement pendant la saison scolaire (au besoin).",
        },
        {
          question: "Notre objectif ?",
          answer:
            "Notre objectif est de soutenir l'id??e du volontariat comme mode de vie, ?? travers des actions, des activit??s et des voyages caritatifs visant ?? distribuer le b??n??fice aux personnes en difficult??.",
        },
        {
          question: "Qui sommes-nous?",
          answer:
            "Bougeons Ensemble est un club universitaire caritatif ?? but non lucratif qui rel??ve de la Facult?? des Sciences et Techniques de Tanger et a ??t?? fond?? en 2018 par les ??tudiants de cette facult??.Ce club humanitaire rassemble des personnes qui travaillent pour l'int??r??t collectif qui prend soin des besoins de la communaut??.",
        },
      ]}
    />
    {/* <Blog /> */}
    {/* <contactUs /> */}
    {/* <ContactUsForm /> */}
    <Footer />
  </AnimationRevealPage>
);
