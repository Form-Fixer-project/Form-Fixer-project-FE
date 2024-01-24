import React from 'react';
import * as S from './style'
import Logo from '../../img/Logo.svg';

const App: React.FC = () => {
  return (
    <S.Header>
        <img src={Logo} alt="Logo" />
        <S.About>About our Service</S.About>
    </S.Header>
  );
}

export default App;
