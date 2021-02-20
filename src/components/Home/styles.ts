import styled from 'styled-components';

interface HomeProps {
  background?: boolean;
  colorBg: boolean;
}

export const Container =  styled.main`
  min-width: 100%;
  height: 100vh;

  display: flex;
`;

export const Left = styled.div`
  width:20%;
  min-height: 100%;

  background-color: #1E213A;
`;

export const Right = styled.div`
  width: 80%;
  min-height: 100%;

  background-color: #100E1D;
`;


export const BoxHead = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonHead = styled.button`
  width: 161px;
  height: 40px;

  background-color: #6E707A;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const TextButtonHead = styled.h6`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #E7E7EB;
`;

export const ButtonLocation = styled.button`
  width: 40px;
  height: 40px;

  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  outline: none;
  border: none;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageLocation = styled.img`
  width: 22px;
  height: 22px;

  color: #fff;
`;

export const BoxBackgroundImage = styled.div`
 /* width: 100vw; */
  height: 300px;

  background-image: url('./images/Cloud-background.png');
  background-size: cover;
  background-position: center;

  /* margin-top: 20px; */

  display: flex;

  align-items: center;
  justify-content: center;

`;

export const BoxImage = styled.div`
  width: 202px;
  height: 234px;
  opacity: 1;
`;

export const WeatherImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const BoxNumber = styled.div`
  width: 100%;
  max-height: 169px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NumberWeather = styled.h1`
  font-size: 144px;
  font-weight: 500;
  color: #E7E7EB;
  line-height: 169px;
`;

export const TemperatureWeather = styled.h3`
  font-size: 48px;
  font-weight: 100;
  line-height: 56px;
  color: #E7E7EB;
`;

export const BoxShower = styled.div`
  width: 100%;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextShower = styled.h5`
  font-size: 36px;
  font-weight: 600;
  color: #A09FB1;
`;

export const BoxData = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top: 40px;
`;

export const TextData = styled.p`
  font-size: 18px;
  font-weight: 600px;
  color: #88869D;
  line-height: 21px;
`;


// styles from Right

export const BoxButonTemperature = styled.div`
  width: 100%;
  margin-top: 42px;
  padding-right: 125px;


  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonTemperature = styled.button<HomeProps>`
  width: 40px;
  height: 40px;
  border-radius: 40px;

  border: none;
  outline: none;

  background-color: ${({ background }) => (background ? '#E7E7EB' : '#585676')};

  font-size: 18px;
  font-weight: 700;

  color: ${({ colorBg }) => (colorBg ? '#110E3C' : '#E7E7EB')};

  cursor: pointer;
`;
