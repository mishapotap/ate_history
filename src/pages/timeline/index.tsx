// Global
import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from "styled-components";

// Swiper
import { Navigation, Controller, HashNavigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// Layout
import Layout from "@/components/layout/general";

// Components
import { Ellipse, EllipseActive, SlideArrow, SlideArrowSmall, SliderEllipseActive, SliderEllipse, EllipseGray } from '@/components/svg';
import { Carousel, PopupWindow } from '@/components/composite';
import { Container } from '@/components/ui';

// Interface
import { HistoryObject } from "@/components/interfaces/history.interface";

// Data
import historyList from "@/common/data/historyList.json";


const Timeline = () => {

  const [sortedArray, setSortedArray] = useState(historyList);
  const [activeFilter, setActiveFilter] = useState("ALL")
  // Swiper store
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  // PopUp
  const [popupVisibility, setPopupVisibility] = useState(false)
  const [popupVisibilityTwo, setPopupVisibilityTwo] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0);
  // Carousel
  const carouselSettings = {
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    // swipe: true,
    draggable: true,
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "ease",
    // centerPadding: "200px"
  }

  const openModal = (id: number) => {
    setPopupVisibility(true)
    setCurrentSlide(id - 1)
  }
  const isEmptyItem = (sortedArray: HistoryObject[], i: number) => {
    return sortedArray[i]?.year === sortedArray[i - 1]?.year
  }

  useEffect(() => {
    FilterArray();
  }, [activeFilter]);

  const FilterArray = () => {
    if (activeFilter === "ALL") {
      setSortedArray(historyList);
    }
    if (activeFilter === "????") {
      setSortedArray(historyList.filter((item) => item.event === "????"));
    } 
    if (activeFilter === "??????") {
      setSortedArray(historyList.filter((item) => item.event === "??????"));
    };
  };

  return (
    <Layout title={activeFilter === "ALL" ? "?????????????? ?????? ?? ?????????????? ????????????????" : activeFilter === "????" ? "?????????????? ?????????????? ????????????????" : "?????????????? ??????"}>
      <Root>
        
        <Swiper
          id='main_swiper_id'
          modules={[Navigation, Controller, HashNavigation]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          navigation={{
            nextEl: ".navigation_next_arrow",
            prevEl: ".navigation_prev_arrow",
          }}
          slidesOffsetBefore={300}
          spaceBetween={170}
          watchSlidesProgress
          slidesPerView={1.75}
          speed={1000}
          loop={true}
          loopedSlides={39}
          hashNavigation={{
            replaceState: true,
            watchState: true
          }}
          // initialSlide={index || 0 }          
          // onSlideChange
          // slideToLoop
          // setWrapperSize
          // onSlideChange={() => console.log('slide change')}
          // slidesPerGroup={1}
          // centeredSlides={true}
          // slideToClickedSlide={true}
          breakpoints={{
            2500: {
              slidesPerView: 1.75,
              slidesOffsetBefore: 0,
              centeredSlides: true,
            },
            1620: {
              slidesPerView: 1.75,
              slidesOffsetBefore: 300,
            },
            1200: {
              slidesPerView: 1,
              slidesOffsetBefore: 200,
            }
          }}
        >
          {sortedArray.map((item: HistoryObject) => (
            <SwiperSlide
              key={item.id}
              data-hash={item.id}
            >
              {({ isActive, isNext }) => (
                <>
                  {/* Slide - div ?? img ?????????? ???????????? */}
                  <Slide>
                    <Image
                      onClick={() => openModal(item.id)}
                      style={{
                        width: isActive ? "55vw" : "23.8vw",
                        height: isActive ? "43vh" : "21.7vh",
                        opacity: isActive ? 1 : 0.53,
                        position: 'relative',
                      }}
                      src={`/images/history/timeline/${item.id}/preview.jpg`}
                      alt={item.preview.caption}
                    />
                    {/* ???????????? */}
                    {isActive && <ImageIcon>{item.event === "??????" ? <img src="/images/history/timeline/icon/sort-ate.png" alt="Sort by ATE" /> : <img src="/images/history/timeline/icon/sort-ao.png" alt="Sort by ATE" />}</ImageIcon>}
                    {/* ?????????? ???????????? ???????? */}
                    {isActive && (<TopCaption>{item.preview.caption}</TopCaption>)}
                    {/* ?????????? ???????????? ???????? ?? ?????????????????????? ???????????????? */}
                    {isNext && (<EventPreview>{item.title}</EventPreview>)}
                  </Slide>
                  <MiddleWrap>
                    {isActive && (<NumberOfEvents>{item.worldEvents}</NumberOfEvents>)}
                    {isActive && (<NumberOfEmployees>{`${item.numberOfEmployees} ??????????????`}</NumberOfEmployees>)}
                  </MiddleWrap>
                  <EventWrap>
                    {isActive && <EventYear>{item.year}</EventYear>}
                    <div style={{flexDirection: 'column', display: 'flex', width: "100%", justifyContent: 'space-between'}}>
                      {isActive && <EventTitle onClick={() => openModal(item.id)}>{item.title}</EventTitle>}
                      {isActive && <EventMoreInfo onClick={() => openModal(item.id)}>??????????????????</EventMoreInfo>}
                    </div>
                  </EventWrap>
                  {/* ???????????? */}
                  {isActive && <SlideIcon src={item.sliderIcon} alt="slider_icon" />}
                  {/* Svg ???? ?????????? ?????????????? */}
                  {isActive && <DotsWrap><SliderEllipseActive /></DotsWrap>}
                  {isNext && <DotsWrap><SliderEllipse /></DotsWrap>}
                  
                </>
              )}
            </SwiperSlide>
            
          ))}
          {/* ?????????????? */}
          <ArrowPrev className="navigation_prev_arrow swiper-button-prev">
            <SlideArrow />
          </ArrowPrev>
          <ArrowNext className="navigation_next_arrow swiper-button-next">
            <SlideArrow />
          </ArrowNext>
          {/* ???????????????????? */}
          <Sort>
            <SortItem active={activeFilter === "??????"} onClick={() => {
              setActiveFilter("??????");
              FilterArray();
            }}><img src="/images/history/timeline/icon/sort-ate.png" alt="Sort by ATE" /></SortItem>
            <SortItem active={activeFilter === "????"} onClick={() => {
              setActiveFilter("????");
              FilterArray();
            }}><img src="/images/history/timeline/icon/sort-ao.png" alt="Sort by AO" /></SortItem>
            <SortItem active={activeFilter === "ALL"} onClick={() => {
              setActiveFilter("ALL");
              FilterArray();
            }}><img src="/images/history/timeline/icon/sort-all.png" alt="Show ALL" /></SortItem>
          </Sort>
          {/* Hr */}
          <Hr></Hr>
        </Swiper>


        {/* ???????????? Swiper */}
        <Swiper
          id='second_swiper_id'
          modules={[Navigation, Controller]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          navigation={{
            nextEl: ".navigation_next_arrow_small",
            prevEl: ".navigation_prev_arrow_small",
          }}
          watchSlidesProgress
          slidesPerView={20}
          speed={1000}
          slideToClickedSlide={true}
          loop={true}
          loopedSlides={39}
        // setWrapperSize
        // onSlideChange={() => console.log('slide change')}
        // slidesOffsetBefore={360}
        // slidesPerGroup={1}
        // simulateTouch={true}
        >

          {sortedArray.map((item: HistoryObject, i: number) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <>
                  <MiniSlide>
                    <MiniDate style={{
                      fontSize: isActive
                        ? "18px"
                        : "11px",
                      color: isActive ? "#000000" : "#707070",
                    }}>
                      {/* ???????????????? ???????? */}
                      {isEmptyItem(sortedArray, i) ? null : sortedArray[i].year}
                    </MiniDate>
                    {/* ???????????????? svg */}
                    {isActive
                      ? <EllipseActive />
                      : isEmptyItem(sortedArray, i)
                        ? <Ellipse />
                        : <EllipseGray />}
                  </MiniSlide>
                </>
              )}
            </SwiperSlide>
          ))}
          {/* ?????????????? */}
          <ArrowPrevSmall className="navigation_prev_arrow_small swiper-button-prev">
            <SlideArrowSmall />
          </ArrowPrevSmall>
          <ArrowNextSmall className="navigation_next_arrow_small swiper-button-next">
            <SlideArrowSmall />
          </ArrowNextSmall>
          {/* Hr */}
          <MiniHr></MiniHr>
        </Swiper>

        
        {/* 2 PopUp */}
        <PopupWindow_
          active={popupVisibility}
          onCloseHandler={() => {
            setPopupVisibility(false)
          }}
        >
          {/* ???????? + ?????????? ???? ???????? */}
          <ImgWrapper bg={sortedArray[currentSlide]?.preview?.image}>
            <ImgContainer>
              <ImgTitle>{sortedArray[currentSlide].title}</ImgTitle>
              <Grid>
                <Col>
                  <Label>??????</Label>
                  <Text>{sortedArray[currentSlide].year}</Text>
                </Col>
              </Grid>
            </ImgContainer>
          </ImgWrapper>
          {/* ???????????????? 1 */}
          <FirstParagraph>
            <FirstWrapper>
              <p>{sortedArray[currentSlide].firstParagraph}</p>
            </FirstWrapper>
          </FirstParagraph>

          {/* ???????????????? 2 */}
          <SecondParagraph>
            <SecondWrapper>
              <p>{sortedArray[currentSlide].secondParagraph}</p>
            </SecondWrapper>
          </SecondParagraph>

          {/* 3 ?????????????? */}
          <Items>
            <ItemsWrapper>
              <Item>
                <ItemText>?????????????? ?? ???????? ??????????</ItemText>
                <ItemFlex>
                  <ItemImage src="/images/history/card/card-1.png" />
                  <ItemEvent>{sortedArray[currentSlide].worldEvents}</ItemEvent>
                </ItemFlex>
              </Item>
              <Item>
                <ItemText>???????????????????????? ???? ???????????????????????????????? ???? ???????????? ??????????????</ItemText>
                <ItemFlex>
                  <ItemImage src="/images/history/card/card-2.png" />
                  <ItemEvent>{`${sortedArray[currentSlide].numberOfEmployees} ??????????????`}</ItemEvent>
                </ItemFlex>
              </Item>
              {/* <Item>
                <ItemText>?????????????????????????? ?????? ??????</ItemText>
                <ItemFlex>
                  <ItemImage src="/images/history/card/card-3.png" />
                  <ItemEvent>{sortedArray[currentSlide].unEvents}</ItemEvent>
                </ItemFlex>
              </Item> */}
            </ItemsWrapper>
          </Items>
          {/* ???????????????? */}
          <CarouselWrapper>
            <Carousel {...carouselSettings}>
              {sortedArray[currentSlide].images.map((item, i) => (
                <SlideWrapper key={i}>
                  <Image
                    alt="slider_image"
                    width="732px"
                    height="488px"
                    // width="100%"
                    // height="100%"
                    src={item}
                    style={{cursor: "default"}}
                    // onClick={() => {
                    //   setPopupVisibility(false)
                    //   setPopupVisibilityTwo(true)
                    //   setPreviewImage(item)
                    // }}
                  />
                </SlideWrapper>
              ))}
            </Carousel>
          </CarouselWrapper>
        </PopupWindow_>
        {/* 2 PopUp */}
        <PopupWindow_Inside
          active={popupVisibilityTwo}
          onCloseHandler={() => {
            setPopupVisibility(true)
            setPopupVisibilityTwo(false)
            setPreviewImage(null)
          }}
        >
          <CarouselContainer>
            {previewImage && (
              <Image_Inside
                alt="slider_image"
                width="1100px"
                height="733.33px"
                src={previewImage}
              />
            )}
          </CarouselContainer>
        </PopupWindow_Inside>
      </Root>
    </Layout>
  );
};

export default Timeline;

const Sort = styled('div')`
  position: absolute;
  z-index: 10;
  top: 15vh;
  left: 2.5vw;
  display: flex;
  flex-direction: column;
`

const SortItem = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 5vw;
  height: 5vw;
  max-width: 77px;
  max-height: 77px;
  border-radius: 50%;
  background-color: rgba(113, 181, 244, 0.55);
  margin-bottom: 10px;
  cursor: pointer;
    &:hover {
      background-color: rgba(78, 164, 217, 0.87);;
    }
    &:active {
      background-color: #3B99D2;
    }
  ${({ active }) => active && css`
      background-color: #3B99D2;
  `}
`

const ImageIcon = styled('div')`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  /* height: 77px; */
  /* width: 77px; */
  width: 5vw;
  height: 5vw;
  max-width: 77px;
  max-height: 77px;
  border-radius: 50%;
  background-color: rgba(113, 181, 244, 0.55);
`


// Animation
const slide_in_bottom = keyframes`
  0% { -webkit-transform: translateY(300px); transform: translateY(300px); opacity: 0;}
  100% { -webkit-transform: translateY(0); transform: translateY(0); opacity: 1;}
`

// POPUP
const PopupWindow_ = styled(PopupWindow)`
  position: absolute;
  padding: 0;
  overflow-y: auto;
  /* top: -88px; */
  /* background-color: #ffffff; */
  /* z-index: 1000; */
  display: none;
  transform: translateY(-200vh);
  /* transition: transform 1s ease-in-out .5s; */
  
  ${({ active }) => active && css`
    display: block;
    transform: translateY(0vh);
  `}
`

// Photo

const ImgWrapper = styled('div')`
  height: 71.2vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #ffffff;
  position: relative;
  margin-bottom: 67px;
  
  ${(p) => p.bg && css`
    background: url('${p.bg}') no-repeat center center / cover;
  `}
  
  &:before {
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 16.67%, rgba(0, 0, 0, 0.78) 100%);
  }
`
const ImgContainer = styled(Container)`
  position: relative;
  z-index: 10;
`
const ImgTitle = styled('p')`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 125%;
  letter-spacing: 0.1em;
  margin-bottom: 37px;
`
const Grid = styled('div')`
  display: flex;
  padding-bottom: 62px;
`
const Col = styled('div')`
  min-width: 285px;
  min-height: 88px;
  position: relative;
  padding: 18px 80px 0 79px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 1px;
    background-color: white;
  }
  &:first-of-type {
    padding-left: 0;
  }
  &:last-of-type {
    &:after {
      display: none;
    }
  }
`
const Label = styled('div')`
  font-weight: bold;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  margin-bottom: 7px;
`
const Text = styled('div')`
  font-weight: 300;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.14em;
`


// ???????????????? 1
const FirstParagraph = styled(Container)`
`
const FirstWrapper = styled('div')`
  padding-left: 14vw;
  animation: ${slide_in_bottom} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
  p {
    font-weight: bold;
    font-size: 15px;
    line-height: 30px;
    letter-spacing: 0.1em;
    margin: 0 0 24px;
  }
`


// ???????????????? 2
const SecondParagraph = styled(Container)`
`
const SecondWrapper = styled('div')`
  padding-left: 14vw;
  animation: ${slide_in_bottom} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.2s both;
  p {
    font-weight: 300;
    font-size: 15px;
    line-height: 2;
    letter-spacing: 0.1em;
    margin: 0 0 24px;
  }
`


// ??????????????
const Items = styled(Container)`
`
const ItemsWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 14vw;
  animation: ${slide_in_bottom} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.9s both;
`
const Item = styled('div')`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-self: flex-start;
  position: relative;
  &:first-child:before {
      content: "";
      position: absolute;
      display: block;
      width: 41px;
      height: 12px;
      background: #FF8A4B;
      opacity: 0.4;
      top: 1px;
      left: 0;
    }
    &:nth-child(2):before {
      content: "";
      position: absolute;
      display: block;
      width: 41px;
      height: 12px;
      background: #38EBEB;
      opacity: 0.4;
      top: 1px;
      left: 0;
    }
    &:nth-child(3):before {
      content: "";
      position: absolute;
      display: block;
      width: 41px;
      height: 12px;
      background: rgba(126, 108, 238, 0.63);
      opacity: 0.4;
      top: 1px;
      left: 0;
    }
`
const ItemText = styled('div')`
    height: 40px;
    font-weight: 700;
    font-size: 11px;
    line-height: 18px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    margin-bottom: 34px;
`
const ItemFlex = styled('div')`
    display: flex;

`
const ItemImage = styled('img')`
  display: block;
  width: 70px;
  height: 70px;
`
const ItemEvent = styled('div')`
  margin-left: 45px;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.12em;
  color: #000000;
  @media (max-width: 1600px) {
  margin-left: 20px;
  }
`

// ???????????????? 
const CarouselWrapper = styled('div')`
  margin: 62px auto;
  /* margin-bottom: 64px; */
  /* padding-top: 21px; */
  /* padding-bottom: 21px; */
`
const SlideWrapper = styled('div')`
  padding-right: 5vw;
  /* margin-right: 5vw; */
  /* margin-right: 500px; */
  /* width: 43.125vw; */
  /* height: 45.185vh; */
`
const Image_Inside = styled('img')`
`
const PopupWindow_Inside = styled(PopupWindow)`
  transform: translateY(-200vh);
  /* transition: transform 1s ease-in-out .5s; */
  /* z-index: 900; */
  
  ${({ active }) => active && css`
    transform: translateY(0vh);
  `}
`
const CarouselContainer = styled(Container)`
  display: flex;
  justify-content: center;
`




// 
const Root = styled('div')`
  overflow-y: auto;
  #main_swiper_id {
    padding-top: 4vh;
  }
  #second_swiper_id {
    margin-left: 18vw;
    padding-top: 2vh;
    padding-bottom: 10px;
  }
`


// ???????????? SWIPER


// ?????????????? ????????????
const Slide = styled("div")`
    display: flex;
    position: relative;
    width: 55vw;
    height: 43vh;
`;
// ?????????????? img
const Image = styled("img")`
  transition: all 1s ease;
  align-self: flex-end;
  cursor: pointer;
  &:hover { 
    transform: scale(1.025);
  }
`;
// ?????????????? ???????? ????????
const TopCaption = styled('div')`
  display: block;
  width: 215px;
  /* height: 32px; */
  position: absolute;
  top: 0;
  /* right: -320px; */
  right: calc((-215px - 4.5vw));
  /* text */
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.14em;
  color: #000000;
  &:before{
    content: "";
    display: block;
    /* width: 64px; */
    width: 2.5vw;
    height: 1px;
    background-color: #000000;
    position: absolute;
    top: 0;
    /* left: -85px; */
    left: -3.5vw;
  }
  @media (max-height: 900px) {
    font-size: 10px;
  }
`
// ???????????? ???????? ???????????? ???????????????????? ??????????????
const EventPreview = styled('div')`
  display: block;
  width: 330px;
  height: 19px;
  position: absolute;
  top: 13vh;
  left: 5px;
  /* text */
  font-weight: 700;
  font-size: 13px;
  line-height: 23px;
  letter-spacing: 0.14em;
  color: #000000;
  @media (max-height: 900px) {
    font-size: 10px;
  }
`
// ???????????????????????????????? + 384 ??????????????
const MiddleWrap = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 55vw;
  min-height: 10vh;
  padding-top: 1vh;
`
// ?????? ???????? ??????????????
const NumberOfEvents = styled("div")`
    display: inline-block;
    max-width: 380px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.12em;
    color: #000000;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      display: block;
      width: 41px;
      height: 12px;
      background: #FF8A4B;
      opacity: 0.4;
      top: 5px;
      left: -24px;
    }
    @media (max-height: 900px) {
      font-size: 10px;
    }
`;
// ?????? ???????? ???????????????????? ??????????????
const NumberOfEmployees = styled("div")`
    display: inline-block;
    max-width: 100px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.12em;
    color: #000000;
    margin-left: 40px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      display: block;
      width: 41px;
      height: 12px;
      background: #38EBEB;
      opacity: 0.4;
      top: 5px;
      left: -24px;
    }
    @media (max-height: 900px) {
      font-size: 10px;
    }
`;
// ?????????????? ?????? Svg
const DotsWrap = styled('div')`
  position: absolute;
  bottom: 12vh;
  left: 120px;
`
// ?????????????? 1983 + ?????????????? + ??????????????????
const EventWrap = styled('div')`
  display: flex;
  width: 70vw;
  min-height: 11vh;
  padding-top: 2vh;
`
// ?????? ???????? ??????
const EventYear = styled("div")`
    align-self: center;
    margin-right: 5vw;
    /* text */
    font-weight: 700;
    font-size: 92px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #263973;
    @media (max-height: 900px) {
      font-size: 55px;
    }
`;
// ?????? ???????? ???????????????? ??????????????
const EventTitle = styled("div")`
    /* text */
    font-weight: 700;
    font-size: 21px;
    /* line-height: 27px; */
    color: #000000;
    letter-spacing: 0.14em;
    cursor: pointer;
    &:hover {
      color: #1A588B;
    }
    &:active {
      color: #263973;
    }
    @media (max-height: 900px) {
      font-size: 16px;
    }
`;
// ???????????? ??????????????????
const EventMoreInfo = styled('div')`
    position: relative;
    margin-left: 130px;
    display: block;
    width: 203px;
    height: 19px;
    cursor: pointer;
    /* text */
    font-weight: 700;
    font-size: 10px;
    line-height: 19px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #000000;
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
        width: 120px;
        height: 1px;
        background-color: #000000;
        bottom: 5px;
        left: -130px;
    }
`
// ???????????? ???????????? ?? ????????????
const SlideIcon = styled('img')`
    position: absolute;
    bottom: 12.6vh;
    left: -165px;
`
// ?????????? ??????????????
const ArrowPrev = styled("div")`
    position: absolute;
    top: 4vh;
    left: 2.5vw;
    width: 7vw;
    height: 94px;
    &::after {
      display: none;
    }
    svg {
      transform: rotate(180deg);
    }
    svg:hover path {
    stroke: #2D74AD;
    }
    svg:active path {
    stroke: #1A588B;
    }
`;
// ???????????? ??????????????
const ArrowNext = styled("div")`
    position: absolute;
    top: 4vh;
    right: 2.5vw;
    width: 7vw;
    /* width: 134px; */
    height: 94px;
    &::after {
      display: none;
    }
    svg:hover path {
    stroke: #2D74AD;
    }
    svg:active path {
    stroke: #1A588B;
    }
`
// ??????????????
const Hr = styled('div')`
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 12.78vh;
    /* bottom: 138px; */
    background-color: #878787;
`



// ???????????? SWIPER


// ?????????????? ????????????????????
const MiniSlide = styled("div")`
    display: flex;
    position: relative;
    width: 78px;
    height: 7vh;
    min-height: 70px;
    justify-content: center;
    cursor: pointer;
    :hover svg path {
      fill  : #263973 ;
      stroke: #263973;
    } 
    svg {
      position: absolute;
      bottom: -5px;
      z-index: 15;
      cursor: pointer;
      &:hover path {
      fill  : #263973 ;
      stroke: #263973;
      }
    }
`;
// ???????? ??????????????????
const MiniDate = styled('div')`
  align-self: flex-end;
  padding-bottom: 12px;
  /* text */
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #707070;
  cursor: pointer;
`
// ?????????? ?????????????? ???????? ??????????
const ArrowPrevSmall = styled("div")`
    position: absolute;
    top: calc(2vh + 23px);
    left: 0px;
    width: 46px;
    height: 33px;
    &::after {
      display: none;
    }
    svg {
      transform: rotate(180deg);
    }
    svg:hover path {
    stroke: #2D74AD;
    }
    svg:active path {
    stroke: #1A588B;
    }
`;
// ???????????? ?????????????? ???????? ??????????
const ArrowNextSmall = styled("div")`
    position: absolute;
    top: calc(2vh + 23px);
    right: 2.5vw;
    width: 46px;
    height: 33px;
    &::after {
      display: none;
    }
    svg:hover path {
    stroke: #2D74AD;
    }
    svg:active path {
    stroke: #1A588B;
    }
`
// ?????????????? ???????? ??????????
const MiniHr = styled('div')`
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 10px;
    background-color: #C1C1C1;
`