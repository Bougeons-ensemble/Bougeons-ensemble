import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/Mail-sent.webp";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

//npm i react-hot-toast

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8 `;

export default ({
  subheading = "Contact nous ",
  heading = (
    <>
      {" "}
      N'hésitez pas <span tw="text-primary-500">de contacter</span>
      <wbr /> nous .
    </>
  ),
  description = "Si vous avez des questions, des commentaires ou des suggestions à propos du Club Bougeons Ensemble, n'hésitez pas à nous contacter. Nous sommes toujours heureux de recevoir des nouvelles de notre communauté et de discuter de toutes les idées que vous pourriez avoir.",
  submitButtonText = "Envoyer",
  // formAction = "#",
  // formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const form = useRef();

  const [formSubmitted, setFormSubmitted] = useState(false); // state variable to track form submission

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9mc4d9o",
        "template_6rqyv8h",
        form.current,
        "30Q31FxrcIstbbQR_"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email est envoyé");
          // Set the formSubmitted state to true to hide the submit button
          setFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image loading="lazy" imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form ref={form} onSubmit={sendEmail}>
              <Input
                type="email"
                name="email"
                placeholder="Votre adresse e-mail "
                required
              />
              <Input
                type="text"
                name="name"
                placeholder="Nom et prénom"
                required
              />
              <Input type="text" name="subject" placeholder="Subjet" required />
              <Textarea
                name="message"
                placeholder="Votre message ici"
                required
              />
              <SubmitButton disabled={formSubmitted} type="submit">
                {submitButtonText}
              </SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
