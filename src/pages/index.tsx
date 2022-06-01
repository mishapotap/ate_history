// Service
import Layout from '@/components/layout/general';
import styled, { keyframes } from "styled-components";
import { useRouter } from 'next/router';

// STYLES
// Animation
const slide_in_left = keyframes`
  0% { -webkit-transform: translateX(-1000px); transform: translateX(-1000px); opacity: 0;}
  100% { -webkit-transform: translateX(0); transform: translateX(0); opacity: 1;}
`
const slide_in_right = keyframes`
  0% { -webkit-transform: translateX(1000px); transform: translateX(1000px); opacity: 0;}
  100% { -webkit-transform: translateX(0); transform: translateX(0); opacity: 1;}
`
const opacity_main = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;
const scale_up_dots = keyframes`
  0% { -webkit-transform: scale(0); transform: scale(0);}
  70% { -webkit-transform: scale(1); transform: scale(1);}
  100% { -webkit-transform: scale(1); transform: scale(1);}
`;
const scale_up_years = keyframes`
  0% { -webkit-transform: scale(0); transform: scale(0);}
  100% { -webkit-transform: scale(1); transform: scale(1);}
`;


// WRAPPERS

const Wrap = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`
const Left = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  animation: ${slide_in_left} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
  @media (max-height: 900px) {
    width: 310px;
  }
`
const Right = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
  animation: ${slide_in_right} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
`

// INSIDE

const Title = styled.div`
  font-weight: 300;
  font-size: 38px;
  line-height: 53px;
  color: #263973;
  letter-spacing: 0.1em;
  @media (max-height: 900px) {
    font-size: 32px;
  }
`
const EventsBtn = styled.div`
    position: relative;
    margin-top: 40px;
    align-self: flex-end;
    cursor: pointer;
    /* text */
    font-weight: 900;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.26em;
    color: #263973;
    &:hover {
        color: #1A588B;
        &:before {
            background-color: #1A588B;
        }
    }
    &:active {
        color: #263973;
        &:before {
            background-color: #263973;
        }
    }
    &:before {
        content: "";
        display: block;
        position: absolute;
        width: 32px;
        height: 2px;
        background-color: #263973;
        top: 10px;
        left: -56px;
    }
`

// MIDDLE

const Hexoid = styled.div`
    width: 42.4vw;
    height: 66.3vh;
    position: relative;
    cursor: pointer;
`;
const Main = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 42.4vw;
    height: 66.3vh;
    animation: ${opacity_main} 1s linear;
`;
const Dots = styled.img`
    position: absolute;
    top: 3.8vh;
    left: 6.82vw;
    width: 31.25vw;
    height: 58.7vh;
    animation: ${scale_up_dots} 1.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s both;
`;
const Years = styled.img`
    position: absolute;
    top: 4.9vh;
    left: 5.1vw;
    width: 30vw;
    height: 56.66vh;
    animation: ${scale_up_years} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1.3s both;
`;


// Right 
const MoreBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 185px;
  height: 55px;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 104px;
  
  /* text */
  letter-spacing: 0.17em;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 10px;
  line-height: 28px;
  background: #FFFFFF;
  color: #000000;
  cursor: pointer;
  transition: .15s ease-in-out background-color, .15s ease-in-out color, .15s ease-in-out border-color;

  &:hover {
    background-color: #2D74AD;
    color: #fff;
  }
    &:active {
    background-color: #1A588B;
    color: #fff;
  }
`

const Home = () => {
  const router = useRouter();

  const goToTimeline = () => {
    router.push("/timeline");
  };

  return (
    <Layout title='История АО «Атомтехэнерго»'>
      <Wrap>
        <Left>
          <Title>История «Атомтехэнерго»</Title>
          <EventsBtn onClick={goToTimeline}>Все события</EventsBtn>
        </Left>
        <Hexoid onClick={goToTimeline}>
          <Main src="/images/history/main.png" />
          <Dots src="/images/history/dots.png" />
          <Years src="/images/history/years.png" />
        </Hexoid>
        <Right>
          <MoreBtn onClick={goToTimeline}>Подробнее</MoreBtn>
        </Right>
      </Wrap>
    </Layout>
  )
}



export default Home