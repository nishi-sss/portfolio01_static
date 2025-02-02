import React from "react";
import styled from "styled-components";

const S3_BUCKET_URL = "https://portfolio-static-files-photo.s3.amazonaws.com"; // S3のURL

const WorksContainer = styled.div`
  background-color: #000;
  font-family: 'Lora', serif;
  width: 100vw;
  height: 500vh; /* 5画面分の高さ */
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
`;

const ImageMain = styled.img`
  width: 45%;
  position: absolute;
  left: 10%;
  filter: drop-shadow(0px 0px 30px rgba(255, 255, 255, 225)) blur(0.5px);
`;

const ImageSub = styled.img`
  width: 22%;
  position: absolute;
  right: 5%;
  border-radius: 15px;
  opacity: 0.7;
  bottom: 5%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  position: absolute;
  left:30%;
  top: 5%;
`;

const Title = styled.h1`
  margin: 0;
  color: #C0C0C0;
  opacity: 0.5;
  font-size: clamp(3rem, 4wv, 4.0rem)
`;

const Silent = styled(Title)`
  transform: rotate(-4deg) translate(2px, 2px);
  font-size: 4.0rem;
`
const Server = styled(Title)`
  margin-top: 40px;
  font-size: 4.0rem;
`
const Gallery = styled(Title)`
  margin-right: 10px;
  font-size: 4.0rem;
  transform: rotate(-10deg) translate(5px, 5px); /* ちょい右下に移動 */
`
const In = styled(Title)`
  margin-right: 0px;
  font-size: 3.0rem;
`
const The = styled(Title)`
  margin-right: 10px;
`
const Forest = styled(Title)`
  margin-right: 100px;
  font-size:3.0rem;
`
const Tapp = styled(Title)`
  margin-left: 20px;
  font-size: 5.0rem;
`
const Gallery2 = styled(Title)`
  margin-left: 20px;
  font-size: 4.0rem;
`
const In2 = styled(Title)`
  margin-left: 0px;
`
const The2 = styled(Title)`
  margin-left: 0px;
  font-size:3.0rem;
  transform: rotate(5deg) translate(2px, 2px);
`
const Forest2 = styled(Title)`
  margin-left: 0px;
  font-size:3.0rem;
`
const Static2 = styled(Title)`
  margin-left: 0px;
  transform: rotate(-10deg) translate(5px, 5px); /* ちょい右下に移動 */
`
const Codey = styled(Title)`
  margin-left: 20px;
  font-size: 4.0rem;
`
const Description = styled.p`
  position: absolute;
  top: 30%;
  right: -3%;
  text-align: left;
  width: 40%;
  color: #C0C0C0;
  font-size: 1.5rem;
  white-space: pre-line;
`;

const TechStack = styled.p`
  position: absolute;
  bottom: 5%;
  left: 10%;
  color: #C0C0C0;
  font-size: 1rem;
  line-height: 1.5;
`;

const Subtitle = styled.p`
  position: absolute;
  bottom: 6%;
  right: %;
  color: #C0C0C0;
  font-size: 1.2rem;
`;

const Works = () => {
  return (
    <WorksContainer>
      {/* スライド1 */}
      <Slide>
        <ImageMain src={`${S3_BUCKET_URL}/ForestOfDancingFireflies.jpg`} alt="ForestOfDancingFireflies" />
        <Subtitle>Hidden in plant sight</Subtitle>
        <TechStack>
          技術スタック：Python, Flask, AWS(S3) {"\n"}
          React, GitHub Pages
        </TechStack>
        <TitleContainer>
          <Silent>Silent</Silent>
          <Server>Server</Server>
        </TitleContainer>
        <Description>
          このシステムは、googleFormからの入力を{"\n"}
          googlespreadsheetで受け取ってFlaskで加工し、{"\n"}
          googlesheetに返却するシステムです。{"\n"}
        </Description>
        <ImageSub src={`${S3_BUCKET_URL}/Codey01.jpg`} alt="Codey1" />
      </Slide>

      {/* スライド2 */}
      <Slide>
        <ImageMain src={`${S3_BUCKET_URL}/WaterRipple.jpg`} alt="WaterRipple" />
        <Subtitle>Enter the Silence</Subtitle>
        <TechStack>
          技術スタック：JavaScript, Node.js, Express {"\n"}
          MongoDB, React
        </TechStack>
        <TitleContainer>
          <Gallery>Gallery</Gallery>
          <In>in</In>
          <The>the</The>
          <Forest>Forest</Forest>
        </TitleContainer>
        <Description>
          このシステムは、AWSからFlaskAPIを使用して{"\n"}
          画像を取り込み、表示します。{"\n"}
          ポートフォリオ、個人ホームページなど様々な用途で使用可能です。{"\n"}
        </Description>
        <ImageSub src={`${S3_BUCKET_URL}/Codey01.jpg`} alt="Codey" />
      </Slide>

      {/* スライド3 */}
      <Slide>
        <ImageMain src={`${S3_BUCKET_URL}/ClusterOfAzaleas.jpg`} alt="ClusterOfAzaleas" />
        <Subtitle>Your tasks, simplified.</Subtitle>
        <TechStack>
          技術スタック：C++, OpenGL, Vulkan {"\n"}
          Unreal Engine, Unity
        </TechStack>
        <TitleContainer>
          <Tapp>Tapp</Tapp>
        </TitleContainer>
        <Description>
          different sample text3{"\n"}
          different sample text3{"\n"}
          different sample text3{"\n"}
        </Description>
        <ImageSub src={`${S3_BUCKET_URL}/Codey01.jpg`} alt="Codey3" />
      </Slide>

      {/* スライド4 */}
      <Slide>
        <ImageMain src={`${S3_BUCKET_URL}/TreeInTheFog.jpg`} alt="TreeInTheFog" />
        <Subtitle>Enter the Silence...</Subtitle>
        <TechStack>
          技術スタック：Go, Rust, PostgreSQL {"\n"}
          AWS Lambda, Terraform
        </TechStack>
        <TitleContainer>
          <Gallery2>Gallery</Gallery2>
          <In2>In</In2>
          <The2>The</The2>
          <Forest2>Forest</Forest2>
          <Static2>-Static-</Static2>
        </TitleContainer>
        <Description>
          Gallery in the Forestの静的サイトバージョンです。{"\n"}
          コンセプトは無料枠の限界を攻めるです。{"\n"}
        </Description>
        <ImageSub src={`${S3_BUCKET_URL}/Codey01.jpg`} alt="Codey4" />
      </Slide>

      {/* スライド5 */}
      <Slide>
        <ImageMain src={`${S3_BUCKET_URL}/VividSunflowers.jpg`} alt="VividSunflowers" />
        <Subtitle>Carried in your bag,but not in your shadow.</Subtitle>
        <TechStack>
          技術スタック：Swift, Kotlin, Firebase {"\n"}
          Google Cloud, React Native
        </TechStack>
        <TitleContainer>
          <Codey>Codey</Codey>
        </TitleContainer>
        <Description>
          openaiAPI使用の会話型システムです。{"\n"}
          デスクトップで会話ー＞ラズパイへの移行ー＞{"\n"}
          ぬいぐるみへの組み込みの順に進めていくプロジェクトです。{"\n"}
          今回はデスクトップでの会話を実現しています。{"\n"}
        </Description>
        <ImageSub src={`${S3_BUCKET_URL}/Codey01.jpg`} alt="Codey5" />
      </Slide>
    </WorksContainer>
  );
};

export default Works;
