import React from "react";
import styled, { keyframes } from "styled-components";

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Scroll to half the total content width */
  }
`;

const ScrollContent = styled.div`
  display: flex;
  animation: ${scrollAnimation} 20s linear infinite; /* Adjust timing for smoothness */
  width: calc(200%); /* Set width to accommodate the duplicated content */
`;

const Container = styled.div`
  display: flex;
  max-width: 100vw;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 20px 0;
  @media (max-width: 960px) {
    padding: 20px 0; /* Adjust padding for smaller screens */
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 100wv;
  padding: 20px 0;
  gap: 12px;
  @media (max-width: 960px) {
    padding: 40px 20px; /* Reduce padding and add horizontal spacing */
    gap: 8px; /* Decrease gap for smaller screens */
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px; /* Smaller font for mobile */
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
    max-width: 90%; /* Reduce max-width for better fit on smaller screens */
  }
`;

const ScrollBarContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    height: 150px; /* Reduce height for smaller screens */
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  margin: 0px 10px;
  img {
    width: 400px;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    object-fit: contain;
    @media (max-width: 768px) {
      width: 200px;
    }
  }
`;
const ImageWrapper2 = styled.div`
  flex-shrink: 0;
  margin: 0px 10px;
  img {
    width: 300px;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    object-fit: contain;
    @media (max-width: 768px) {
      width: 200px;
    }
  }
`;

const Index = () => {
  const EventImages1 = [
    "./EventImages/techx.jpeg",
    "./EventImages/techtalk.jpeg",
    "./EventImages/inaugration.jpeg",
    "./EventImages/Mongo.jpeg",
    "./EventImages/techtalk3.jpeg",
    "./EventImages/observability.jpeg",
    "./EventImages/MH3.jpeg",
    "./EventImages/mongo2.jpeg",
    "./EventImages/resilience.jpeg",
  ];

  const EventImages2 = [
    "./EventImages/cloud.jpeg",
    "./EventImages/mug.jpeg",
    "./EventImages/MH.jpeg",
    "./EventImages/techfest.jpeg",
    "./EventImages/techtalk2.jpeg",
    "./EventImages/mongodb.jpeg",
    "./EventImages/MH2.jpeg",
    "./EventImages/cloud2.jpeg",
  ];

  return (
    <Container id="events">
      <Wrapper>
        <Title>Tech Meets and Beyond: My Mumbai Diaries</Title>
        <Desc>
          Showcasing memorable tech events I organize and attend regularly
        </Desc>

        <ScrollBarContainer>
          <ScrollContent>
            {[...EventImages1, ...EventImages1].map((src, index) => (
              <ImageWrapper key={index}>
                <img src={src} alt={`image-${index}`} />
              </ImageWrapper>
            ))}
          </ScrollContent>
        </ScrollBarContainer>
        <ScrollBarContainer>
          <ScrollContent>
            {[...EventImages2, ...EventImages2].map((src, index) => (
              <ImageWrapper2 key={index}>
                <img src={src} alt={`image-${index}`} />
              </ImageWrapper2>
            ))}
          </ScrollContent>
        </ScrollBarContainer>
      </Wrapper>
    </Container>
  );
};

export default Index;
