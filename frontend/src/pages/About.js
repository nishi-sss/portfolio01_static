import React from "react";
import styled from "styled-components";

const S3_BUCKET_URL = "https://portfolio-static-files-photo.s3.amazonaws.com"; // S3のURL

const AboutContainer = styled.div`
  background-color: #000;
  font-family: 'Lora', serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackgroundLogo = styled.img`
  position: absolute;
  width: 48%;
  height: auto;
  opacity: 0.4; /* 不透明度40% */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-10deg); /* ちょい斜め */
`;

const Title = styled.h1`
  position: absolute;
  top: 5%;
  left: 5%;
  font-size: 3rem;
  color: #ffffff;
  transform: rotate(-5deg); /* 地味に不規則に斜めｗ */
`;

const Subtitle = styled.h2`
  position: absolute;
  top: 18%;
  left: 10%;
  font-size: 1.5rem;
  color: #ffffff;
`;

const Description = styled.p`
  position: absolute;
  top: 30%;
  left: 10%;
  width: 50%;
  font-size: 1.2rem;
  color: #ffffff;
  line-height: 1.5;
`;

const Skills = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  font-size: 1.2rem;
  color: #ffffff;
  line-height: 1.5;
`;

const Contact = styled.div`
  position: absolute;
  bottom: 5%;
  left: 10%;
  font-size: 1rem;
  color: #ffffff;
`;

const About = () => {
  return (
    <AboutContainer>
      <BackgroundLogo src={`${S3_BUCKET_URL}/Logo.svg`} alt="Background Logo" />
      <Title>About this Site</Title>
      <Subtitle>Where design meets functionality.</Subtitle>
      <Description>
        This site is my portfolio, where ideas and technology come together.
      </Description>
      <Skills>
        <p>Skills:</p>
        <p>Frontend: React, CSS</p>
        <p>Backend: Flask</p>
        <p>Cloud: AWS (EC2, S3)</p>
        <p>Deployment: GitHub Pages</p>
      </Skills>
      <Contact>
        <p>Contact: co.creation.nishi@outlook.jp</p>
        <p>GitHub: github.com/yourusername</p>
      </Contact>
    </AboutContainer>
  );
};

export default About;
