import styled from 'styled-components';


export const MainContainer = styled.div`
  overflow-x: hidden;
`;

export const SubContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Img = styled.img`
  height: auto;
  display: block;
`;

export const BTextContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 170px;
  p {
    color: white;
    font-size: 128px;
    font-weight: bold;
  }
`;

export const STextContainer = styled.div`
  position: absolute;
  top: 130px;
  left: 850px;
  p {
    color: white;
    font-size: 48px;
  }
`;
