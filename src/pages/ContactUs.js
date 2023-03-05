import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import Localistion from "../images/localisation.jpg";
const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.a`text-sm mt-6 block text-gray-500`;
const Phone = tw.a`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "FSTT",
            description: (
              <>
                <Address>
                  <AddressLine>
                    Ancienne Route de l'Aéroport, Km 10, Ziaten. BP : 416.
                    Tanger - Maroc{" "}
                  </AddressLine>
                </Address>
                <Email href="mailto:bougeonsensemblefstt@gmail.com">
                  bougeonsensemblefstt@gmail.com
                </Email>
                <Phone href="tel:+ 212 (0) 6 27 72 18 32">
                  + 212 (0) 6 27 72 18 32
                </Phone>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
