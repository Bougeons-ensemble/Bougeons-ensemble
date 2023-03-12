import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import CountUp from 'react-countup';


const NumberCounte = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3rem;
  font-weight: bold;
  color: #243E63;
  gap: 2rem;
  @media (max-width: 610x) {
    font-size: 0.5rem;
  }

`;
const Cuontnumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap : 4rem;
  @media (max-width: 600px) {
   gap : 2rem;
   flex-direction: column;
   
  }
  
`;

const PostText = styled.div`
  font-size: 2rem;
  font-weight: normal;
  color: #7c8ba1;
  @media (max-width: 610px) {
    font-size: 1.5rem;
  }
`;


export default function App() {
  return (
    <Cuontnumb>
    <NumberCounte>
      <PostText> Activités</PostText>
    <CountUp
      end={15}
      duration={20}
      prefix ={"+ "}
    />
    
  </NumberCounte>
    <NumberCounte>
      <PostText>Membres</PostText>
    <CountUp
      end={80}
      duration={20}
      prefix ={"+ "}
    />
    
  </NumberCounte>
    <NumberCounte>
      <PostText> Bénéficiaires</PostText>
    <CountUp
      end={80}
      duration={20}
      prefix ={"+ "}
    />
    
  </NumberCounte>
    
  </Cuontnumb>
  );
}