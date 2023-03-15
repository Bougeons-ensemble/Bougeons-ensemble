import React from "react";
import styled from "styled-components";

import CountUp from "react-countup";

const NumberCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3rem;
  font-weight: bold;
  color: #243e63;
  gap: 2rem;
  @media (max-width: 62x) {
    font-size: 0.5rem;
  }
`;
const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  @media (max-width: 600px) {
    gap: 2rem;
    flex-direction: column;
  }
`;

const PostText = styled.div`
  font-size: 2rem;
  font-weight: normal;
  color: #7c8ba1;
  @media (max-width: 62px) {
    font-size: 1.5rem;
  }
`;

export default function App() {
  return (
    <Counter>
      <NumberCounter>
        <PostText> Activités</PostText>
        <CountUp enableScrollSpy={true} end={40} duration={2} prefix={"+ "} />
      </NumberCounter>
      <NumberCounter>
        <PostText>Membres</PostText>
        <CountUp enableScrollSpy={true} end={75} duration={2} prefix={"+ "} />
      </NumberCounter>
      <NumberCounter>
        <PostText> Bénéficiaires</PostText>
        <CountUp enableScrollSpy={true} end={2500} duration={2} prefix={"+ "} />
      </NumberCounter>
    </Counter>
  );
}
