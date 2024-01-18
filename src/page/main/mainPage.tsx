import React, { useState, useEffect } from 'react';
import * as S from './style';

import Logo from '../../img/Logo.svg';
import Img1 from '../../img/mainImg1.svg';
import Img2 from '../../img/mainImg2.svg';
import Img3 from '../../img/mainImg3.svg';

function Main() {
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
      <S.Header>
        <img src={Logo} alt="Logo" />
        <S.About>About our Service</S.About>
      </S.Header>
      <S.Main>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Main Image ${index + 1}`}
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              position: 'absolute',
              width: '100%',
              height: '92.3%',
            }}
          />
        ))}
        <>
            <div>
              <div>
                
              </div>
            </div>
        </>
      </S.Main>
    </>
  );
}

export default Main;
