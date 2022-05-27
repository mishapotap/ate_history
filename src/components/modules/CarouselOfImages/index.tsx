// Core
import { useState } from 'react'
import styled, { css } from 'styled-components'

// Components
import { Carousel, PopupWindow } from '@/components/composite';
import { Container } from '@/components/ui';

const CarouselOfImages = ({ data: list }) => {
  const [ popupVisibility, setPopupVisibility ] = useState(false)
  const [ previewImage, setPreviewImage ] = useState(null)
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
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "ease",
    centerPadding: "200px"
  }
  
  return (
    <Root>
      <Carousel {...carouselSettings}>
        {list.map((item, i) => (
          <SlideWrapper key={i}>
            <Image
              width="732px"
              height="488px"
              src={item}
              onClick={() => {
                setPopupVisibility(true)
                setPreviewImage(item)
              }}
            />
          </SlideWrapper>
        ))}
      </Carousel>
  
      <PopupWindow_
        active={popupVisibility}
        onCloseHandler={() => {
          setPopupVisibility(false)
          setPreviewImage(null)
        }}
      >
        <Container_>
          { previewImage && (
            <Image
              width="1100px"
              height="733.33px"
              src={previewImage}
            />
          ) }
        </Container_>
      </PopupWindow_>
    </Root>
  )
}

export default {
  name: 'CarouselOfImages',
  Component: CarouselOfImages
}

const Root = styled('div')`
  margin-top: 62px;
  margin-bottom: 64px;
  padding-top: 21px;
  padding-bottom: 21px;
`

const SlideWrapper = styled('div')`
  padding-right: 167px;
`

const Image = styled('img')`

`

const PopupWindow_ = styled(PopupWindow)`
  transform: translateY(-200vh);
  transition: transform .3s ease-in-out .1s;
  
  ${({active}) => active && css`
    transform: translateY(0vh);
  `}
`

const Container_ = styled(Container)`
  display: flex;
  justify-content: center;
`
