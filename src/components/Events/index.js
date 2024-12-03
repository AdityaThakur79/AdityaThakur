import React from "react";
import styled, { keyframes } from "styled-components";

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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
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
    font-size: 32px;
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
  }
`;
const index = () => {
  const EventImages1 = [
    "https://drive.google.com/file/d/1n1dvBymKjnkfiVTKI_hyjpvk6qrX1-xl/view?usp=sharing",
    "https://drive.google.com/file/d/14Gvpg28oLTcL2ie7vFK41szSFd0gA9_U/view?usp=sharing",
    "https://drive.google.com/file/d/1RWbaZTeMNII2g4C9FdsSl-vqF6nF19CU/view?usp=sharing",
    "https://drive.google.com/file/d/1XNkUYTWYj6yHC2eSFtMJoSRU52yZPN1a/view?usp=sharing",
    "https://drive.google.com/file/d/15D3CNQ7ZCNWJcFoHkqKYWaDaNbTcL-SM/view?usp=sharing",
    "https://drive.google.com/file/d/1TzLxH1kvv0UOlimESaOXEtbwdB2nB96Q/view?usp=sharing",
    "https://drive.google.com/file/d/1YstqDeH9fPrBiYz8VG2MLithBsAXFSXt/view?usp=sharing",
  ];
  const EventImages2 = [
    "https://drive.google.com/file/d/16dHyIvReDJCL3uxnQP0Ho37Efe6qcPRk/view?usp=sharing",
    "https://drive.google.com/file/d/1kUkI6UaInXFpbPvbw2qDDzm3WHk53tgI/view?usp=sharing",
    "https://drive.google.com/file/d/1wJKZ1SeOJZunoxAcjOfHNXfiP6GU7Wmy/view?usp=sharing",
    "https://drive.google.com/file/d/16-JaM98Bs8XLZ3rLoSWFMnc2PhuOEnIe/view?usp=sharing",
    "https://drive.google.com/file/d/1QmUWTcECKvBqYkIjdRe7JH9qKa5RxNsM/view?usp=sharing",
    "https://drive.google.com/file/d/1jpXHAv_6OTWUyUgDa8hl6w43iYpQ_S5N/view?usp=sharing",
    "https://drive.google.com/file/d/1u5CZqM122gYChcLwQ8fmM8XgY6-s87uk/view?usp=sharing",
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
