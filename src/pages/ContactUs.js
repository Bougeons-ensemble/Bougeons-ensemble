import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

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
            title: "tanger ",
            description: (
              <>
                <Address>
                  <AddressLine>maroc , Tanger , Boukhalf  </AddressLine>
                  <AddressLine>tanger </AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "FSTT",
            description: (
              <>
                <Address>
                  <AddressLine>Faculté des sciences et techniques de Tanger</AddressLine>
                  <AddressLine>BP، Tanger</AddressLine>
                </Address>
                <Email>http://www.fstt.ac.ma/</Email>
                <Phone> 0539393954</Phone>
              </>
            )
          },
          
          
          
          
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
