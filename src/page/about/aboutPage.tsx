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
          <S.BTextContainer>
            <p>Push up</p>
          </S.BTextContainer>
          <S.STextContainer>
            <p>팔 굽혀펴기는 상체 근력을 강화하는<br/> 운동 중 하나로, 주로 <strong>상완삼두근, 가슴근육,<br/> 어깨 근육</strong> 등을 강화하는데에<br/> 효과적인 운동 입니다.</p>
          </S.STextContainer>
        </S.SubContainer>
        <S.SubContainer>
          <S.ImageContainer>
            <img src={Img2}/>
          </S.ImageContainer>
          <S.BTextContainer>
            <p>Squart</p>
          </S.BTextContainer>
          <S.STextContainer>
            <p>스쿼트는 하체 근육을 강화하는 데 효과적인<br/>운동 중 하나로, <strong>대퇴사두근, 종아리, 엉덩이,<br/>허벅지</strong> 등을 강화하는 운동 입니다.</p>
          </S.STextContainer>
        </S.SubContainer>
        <S.SubContainer>
          <S.ImageContainer>
            <img src={Img3}/>
          </S.ImageContainer>
          <S.BTextContainer>
            <p>Deadlift</p>
          </S.BTextContainer>
          <S.STextContainer>
            <p>데드리프트(Deadlift)는 전신 근육을 강화하는<br/> 데 효과적인 역도 운동 중 하나로, 주로 <strong>허리,<br/> 엉덩이, 허벅지, 등, 어깨, 팔</strong> 등 다양한 근육을<br/> 동시에 사용 하는 운동 입니다.</p>
          </S.STextContainer>
        </S.SubContainer>
        <S.SubContainer>
          <S.ImageContainer>
            <img src={Img4}/>
          </S.ImageContainer>
          <S.BTextContainer>
            <p>Machine<br/>Fly</p>
          </S.BTextContainer>
          <S.STextContainer>
            <p>버터플라이는 가슴 근육을 주로 타겟으로 하는<br/> 유산소와 근력 운동의 조합 운동입니다. 주로<br/> <strong>가슴</strong>을 개발하고 특히 <strong>가슴의 아랫부분</strong>을<br/> 강화하는 데 효과적인 운동 입니다..</p>
          </S.STextContainer>
        </S.SubContainer>
        <S.SubContainer>
          <S.ImageContainer>
            <img src={Img5}/>
          </S.ImageContainer>
          <S.BTextContainer>
            <p>Dumbbell<br/>Curl</p>
          </S.BTextContainer>
          <S.STextContainer>
            <p>컬(이두근 강화 운동)은 상완 이두근을 키워<br/> 팔 근력을 향상시키며, <strong>균형, 자세, 대사</strong> 등에 <br/>도움이 되는 운동 입니다.</p>
          </S.STextContainer>
        </S.SubContainer>
      </S.MainContainer>
    </>
  );
}

export default About;
