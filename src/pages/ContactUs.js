import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import Localistion from "../images/localisation.jpg"
const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "FSTT ",
            description: (
              <>
                <Address>
                  <AddressLine>maroc , Tanger , Boukhalf , Faculté des sciences et techniques  </AddressLine>
                  <AddressLine>fstt </AddressLine>
                </Address>
                <Email>bougeonsensemblefstt@gmail.com</Email>
                <Phone>+0627721832</Phone>
              </>
            )
          },
           ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
