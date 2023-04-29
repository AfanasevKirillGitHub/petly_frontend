import styled from 'styled-components';

import loginBGM from '../../helpers/photos/authBgM.png';
import loginBgT from '../../helpers/photos/authBgT.png';
import loginBgD from '../../helpers/photos/authBgD.png';

export const Main = styled.div`
 height: 100%;
 display:flex;
 justify-content:center;
 align-items:center;
  @media screen and (max-width: 767px) {
    height: 600px;
    background: url(${loginBGM});
    background-size: 500px auto;
    background-position: bottom -50px left 0px;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 1100px;
    background: url(${loginBgT});
    background-size: 768px auto;
    background-position: bottom 0px left 0px;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1280px) {
    height: 100vh;
    background-image: url(${loginBgD});
    background-position: bottom 0px left 0px;
    background-size: 1240px, contain;
    background-repeat: no-repeat;
  }

`