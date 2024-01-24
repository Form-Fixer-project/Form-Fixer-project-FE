import React from 'react';
import Header from '../../component/headerF/header';
import * as S from './style';

import Img1 from '../../img/aboutImg1.svg';
import Img2 from '../../img/aboutImg2.svg';
import Img3 from '../../img/aboutImg3.svg';
import Img4 from '../../img/aboutImg4.svg';
import Img5 from '../../img/aboutImg5.svg';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <S.MainContainer>
        <S.SubContainer>
          <S.ImageContainer>
            <img src={Img1}/>
          </S.ImageContainer>
          <S.TextContainer>
            <p>텍스트</p>
          </S.TextContainer>
        </S.SubContainer>
      </S.MainContainer>
    </>
  );
}

export default About;
