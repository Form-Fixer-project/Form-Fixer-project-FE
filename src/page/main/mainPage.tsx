import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Header from '../../component/headerF/header';

import Logo from '../../img/Logo.svg';
import Img1 from '../../img/mainImg1.svg';
import Img2 from '../../img/mainImg2.svg';
import Img3 from '../../img/mainImg3.svg';

type ExerciseData = {
  en: string;
  ko: string;
  link: string;
};

const Main = () => {
  const images: string[] = [Img1, Img2, Img3];
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const dummyDataList: ExerciseData[] = [
    {
      en: 'Push up',
      ko: '푸쉬 업',
      link: 'exercise/1/'
    },
    {
      en: 'Squart',
      ko: '스쿼트',
      link: 'exercise/2/'
    },
    {
      en: 'Deadlift',
      ko: '데드리프트',
      link: 'exercise/3/'
    },
    {
      en: 'Sit Up',
      ko: '윗몸 일으키기',
      link: 'exercise/4/'
    },
    {
      en: 'Curls',
      ko: '컬',
      link: 'exercise/5/'
    }
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
            {dummyDataList.map((data, dataIndex) => (
              <S.MainContent key={dataIndex}>
                <Link to={data.link}>
                  <React.Fragment>
                    <S.MainContentE>{data.en}</S.MainContentE>
                    <S.MainContentK>{data.ko}</S.MainContentK>
                  </React.Fragment>
                </Link>
              </S.MainContent>
            ))}
          </S.MainContentContainer>
        </S.Content>
      </S.MainContainer>
    </>
  );
};

export default Main;
