import React from "react";
import styled from "styled-components";

const S3_BUCKET_URL = "https://portfolio-static-files-photo.s3.amazonaws.com"; // S3のURL

const ProductsContainer = styled.div`
  background-color: #000;
  font-family: 'Lora', serif;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 40%;
  height: auto;
  top: 30%;
  left: 30%;
  opacity: 0.2; /* 背景画像の不透明度 */
`;

const Title = styled.h1`
  position: absolute;
  top: 5%;
  left: 5%;
  font-size: 2.5rem;
  color: #ffffff;
`;

const AuthButton = styled.button`
  position: absolute;
  top: 15%;
  left: 5%;
  padding: 10px 20px;
  background: #444;
  color: #fff;
  border: none;
  cursor: pointer;
  opacity: 0.8;
`;

const ProductList = styled.div`
  position: absolute;
  top: 25%;
  left: 5%;
  color: #ffffff;
  font-size: 1.2rem;
`;

const ProductItem = styled.div`
  margin-bottom: 20px;
  opacity: 0.4; /* 概要部分の不透明度 */
`;

const ComingSoon = styled.div`
  position: absolute;
  top: 60%;
  left: 5%;
  font-size: 1rem;
  color: #ffffff;
  opacity: 0.2; /* Coming soon の不透明度 */
`;

const PreviewImage = styled.img`
  position: absolute;
  width: 20%;
  top: 20%;
  right: 10%;
  filter: drop-shadow(0px 0px 80px rgba(255, 255, 255, 0.5));
`;

const Footer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  font-size: 0.9rem;
  color: #ffffff;
`;

const Products = () => {
  return (
    <ProductsContainer>
      <BackgroundImage src={`${S3_BUCKET_URL}/background_forest.jpg`} alt="Background" />
      <Title>Products</Title>
      <AuthButton>認証</AuthButton>
      
      <ProductList>
        <ProductItem>
          <strong>認証 Gallery in the Forest -Enter the Silence-</strong>
          <p>概要：現在のサイトと類似イメージの動的サイトです。</p>
        </ProductItem>
      </ProductList>

      <ComingSoon>Coming soon... テーマ：陰陽師（和風design）</ComingSoon>
      <PreviewImage src={`${S3_BUCKET_URL}/MistyForest.jpg`} alt="Preview" />
      
      <Footer>
        認証 - このマークが表示されているサイトは認証制です。フォームからリクエストを送信いただくと、アクセス権をお渡しします。
      </Footer>
    </ProductsContainer>
  );
};

export default Products;
