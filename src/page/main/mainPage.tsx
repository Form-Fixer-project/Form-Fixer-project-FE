import React, { useState, useEffect } from 'react';
import * as S from './style';

import Logo from '../../img/Logo.svg';
import Img1 from '../../img/mainImg1.svg';
import Img2 from '../../img/mainImg2.svg';
import Img3 from '../../img/mainImg3.svg';

const Main: React.FC = () => {
  const images = [Img1, Img2, Img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <>
      <S.GlobalStyle />
      <S.Header>
        <img src={Logo} alt="Logo" />
        <S.About>About our Service</S.About>
      </S.Header>
      <S.MainContainer>
        {images.map((image, index) => (
          <S.Image
            key={index}
            src={image}
            alt={`Main Image ${index + 1}`}
            isVisible={index === currentImageIndex}
          />
        ))}
        <S.Content>
          <S.TitleContainer>
            <S.Title>
              Form Fixer
            </S.Title>
            <S.SubTitle>
              더욱 완벽하게
            </S.SubTitle>
          </S.TitleContainer>
          <div>
            <S.MainContent>
              Push up 푸쉬 업
            </S.MainContent>
          </div>
        </S.Content>
      </S.MainContainer>
    </>
  );
};

export default Main;
