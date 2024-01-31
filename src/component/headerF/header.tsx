// Header.tsx

import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.svg';

const Header: React.FC = () => {
  return (
    <S.Header>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Link to="/about">
        <S.About>About our Service</S.About>
      </Link>
    </S.Header>
  );
}

export default Header;
