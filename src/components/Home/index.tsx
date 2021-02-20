import React from 'react'

import {
  Container,
  Left,
  Right,
  BoxHead,
  ButtonHead,
  TextButtonHead,
  ButtonLocation,
  ImageLocation,
  BoxBackgroundImage,
  WeatherImage,
  BoxImage,
  BoxNumber,
  NumberWeather,
  TemperatureWeather,
  BoxShower,
  TextShower,
  BoxData,
  TextData,
  BoxButonTemperature,
  ButtonTemperature
} from './styles'

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Left>
          <BoxHead>
            <ButtonHead>
              <TextButtonHead>Search for places</TextButtonHead>
            </ButtonHead>
            <ButtonLocation>
              <ImageLocation src="./images/location.svg" />
            </ButtonLocation>
          </BoxHead>
          <BoxBackgroundImage>
            <BoxImage>
              <WeatherImage src="./images/Shower.png" />
            </BoxImage>
          </BoxBackgroundImage>
          <BoxNumber>
            <NumberWeather>15</NumberWeather>
            <TemperatureWeather>°C</TemperatureWeather>
          </BoxNumber>
          <BoxShower>
            <TextShower>Shower</TextShower>
          </BoxShower>
          <BoxData>
            <TextData style={{ paddingBottom: '20px' }}>
              Today . Fri, 5 Jun
            </TextData>
            <TextData>
              {' '}
              <img
                src="./images/pin.svg"
                width="16px"
                height="16px"
                color="#88869D"
              />{' '}
              Helsinki
            </TextData>
          </BoxData>
        </Left>
        <Right>
          <BoxButonTemperature>
            <ButtonTemperature background={true} colorBg={true}>
              °C
            </ButtonTemperature>
            <ButtonTemperature
              background={false}
              style={{ marginLeft: '12px' }}
              colorBg={false}
            >
              °F
            </ButtonTemperature>
          </BoxButonTemperature>
        </Right>
      </Container>
    </>
  )
}

export default Home
