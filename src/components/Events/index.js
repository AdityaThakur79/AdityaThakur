import React from "react";
import styled, { keyframes } from "styled-components";
import { EventImages1, EventImages2 } from "../../data/constants";

const scrollAnimation = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-100%);
}
`;

const ScrollBarContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 220px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ScrollContent = styled.div`
  display: flex;
  animation: ${scrollAnimation} 20s linear infinite;
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  margin: 0px 10px;
  img {
    width: 400px;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
`;

const index = () => {
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
              <ImageWrapper key={index}>
                <img src={src} alt={`image-${index}`} />
              </ImageWrapper>
            ))}
          </ScrollContent>
        </ScrollBarContainer>
      </Wrapper>
    </Container>
  );
};

export default index;
