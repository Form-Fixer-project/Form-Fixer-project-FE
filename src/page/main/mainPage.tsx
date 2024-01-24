import React, { useState, useEffect } from 'react';
import * as S from './style';
import Header from '../../component/headerF/header'

import Logo from '../../img/Logo.svg';
import Img1 from '../../img/mainImg1.svg';
import Img2 from '../../img/mainImg2.svg';
import Img3 from '../../img/mainImg3.svg';

const Main: React.FC = () => {
  const images = [Img1, Img2, Img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const dummyDataList = [
    [
      { en: 'Push up', ko: '푸쉬 업' }
    ],
    [
      { en: 'Squart', ko: '스쿼트' }
    ],
    [
      { en: 'Deadlift', ko: '데드리프트' }
    ],
    [
      { en: 'Machine fly', ko: '버터 플라이' }
    ],
    [
      { en: 'Curls', ko: '컬' }
    ],
  ];

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
      <Header />
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
            <S.Title>Form Fixer</S.Title>
            <S.SubTitle>더욱 완벽하게</S.SubTitle>
          </S.TitleContainer>
          <S.MainContentContainer>
            {dummyDataList.map((dataList, dataIndex) => (
              <S.MainContent key={dataIndex}>
                <React.Fragment>
                  <S.MainContentE>
                    {dataList.map((data, index) => (
                      <div key={index}>{data.en}</div>
                    ))}
                  </S.MainContentE>
                  <S.MainContentK>
                    {dataList.map((data, index) => (
                      <div key={index}>{data.ko}</div>
                    ))}
                  </S.MainContentK>
                </React.Fragment>
              </S.MainContent>
            ))}
          </S.MainContentContainer>
        </S.Content>
      </S.MainContainer>
    </>
  );
};

export default Main;
