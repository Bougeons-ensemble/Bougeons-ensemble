import { NavLink } from "components/headers/light";
import React from "react";
import tw from "twin.macro";
const Container = tw.div`
flex
items-center
justify-center
w-screen
h-screen
bg-gradient-to-r
from-primary-600
to-primary-400
`;
const FirstHeader = tw.h1`font-bold text-blue-600 text-5xl`;
const SmallHeader = tw.h6`mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl`;
const Span = tw.span`text-red-500`;
const Paragraph = tw.p`mb-8 text-center text-gray-500 md:text-lg`;
const Main = tw.div`px-40 py-20 bg-white rounded-md shadow-xl`;
const Article = tw.div`flex flex-col items-center`;
function NotFoundPage() {
  return (
    <Container>
      <Main>
        <Article>
          <FirstHeader>404</FirstHeader>

          <SmallHeader>
            <Span>Oops!</Span> Page not found
          </SmallHeader>

          <Paragraph>The page you're looking for doesn't exist.</Paragraph>

          <NavLink
            to={"/"}
            className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
          >
            Go home
          </NavLink>
        </Article>
      </Main>
    </Container>
  );
}

export default NotFoundPage;
