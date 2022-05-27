import React, {Fragment, useState} from "react";
import styled, { css, keyframes } from "styled-components";

// Components
import { Arrow, MapPoint } from "@/components/svg"

const LocationItem = ({ location, onClick, content, name, ...props }) => {
  const { coordinates, label, supTitle, title, contentId } = location
  const [ active, setActive ] = useState(false)
  const hasSections = typeof content?.sections !== 'undefined'
  
  return (
    <Root
      coordinates={coordinates}
      onClick={typeof contentId === 'undefined' ? onClick : null}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      {...props}
    >
      { label && (
        <>
          <Label position={label.position}>
            <Caption
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              { supTitle && (
                <SupTitle>{supTitle}</SupTitle>
              ) }
              
              <Title>{title}</Title>
            </Caption>
  
            { typeof contentId === 'number' ? (
              <ContentWrapper>
                <ContentPreview
                  bg={
                    content?.preview?.image
                      ? content.preview.image
                      : `/images/${name}/${contentId}/main.png`
                  }
                >
                  <ContentCaption
                    onClick={
                      typeof contentId !== 'undefined' && hasSections
                        ? onClick
                        : null
                    }
                    clickable={hasSections}
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                  >
                    { content.preview && content.preview.supTitle ? (
                      <SupTitle>{content.preview.supTitle}</SupTitle>
                    ) : supTitle ? (
                      <SupTitle>{supTitle}</SupTitle>
                    ) : null }
      
                    { content.preview && content.preview.title ? (
                      <Title>{content.preview.title}</Title>
                    ) : content.name ? (
                      <Title>{content.name}</Title>
                    ) : (
                      <Title>{title}</Title>
                    ) }
      
                    {hasSections ? (
                      <LinkIcon/>
                    ) : null}
                  </ContentCaption>
                </ContentPreview>
  
                {content?.preview?.info && content.preview.info.length ? (
                  <ContentInfo>
                    {content.preview.info.map((item, index) => (
                      <FirstInfoItem key={index}>
                        <FirstInfoRow>{item.first}</FirstInfoRow>
                        <SecondInfoRow>{item.second}</SecondInfoRow>
                      </FirstInfoItem>
                    ))}
                  </ContentInfo>
                ) : null}
              </ContentWrapper>
            ) : null }
          </Label>
          
          <Point/>
  
          <MapPoint_ />
        </>
      ) }
    </Root>
  )
}

export default LocationItem

const ContentWrapper = styled('div')`
  width: 323px;
  height: 323px;
  
  position: absolute;
  z-index: 10;
  top: -500px;
  right: -500px;
  bottom: -500px;
  left: -500px;
  margin: auto;
  
  opacity: 0;
  transform: scale(0);
  transition: .3s opacity ease-in-out .3s, .3s transform ease-in-out .3s;
`

const ContentPreview = styled('div')`
  width: 100%;
  height: 100%;
  
  border-radius: 999px;
  background-color: #C4C4C4;
  
  position: relative;
  z-index: 10;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 30px;
  padding-bottom: 30px;
  
  ${({ bg }) => bg && css`
    background-image: url('${bg}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `}
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.45) 82.46%);
  }
`

const Root = styled('div')`
  position: absolute;
  width: 0;
  height: 0;
  
  ${({ coordinates }) => coordinates && css`
    bottom: ${coordinates.y}px;
    left: ${coordinates.x}px;
  `}
  
  &:hover ${ContentWrapper} {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
`

const Point = styled('div')`
  position: absolute;
  top: -100vw;
  right: -100vw;
  bottom: -100vw;
  left: -100vw;
  margin: auto;
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background-color: #155B86;
`

const Label = styled('div')`
  position: absolute;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.1em;
  color: #000;
  padding: 7px 0;
  white-space: nowrap;
  
  &:hover {
    z-index: 50;
  }
  
  ${({ position }) => position && css`
    ${position.vertical === 'top' && `
      bottom: 126px;
      border-bottom: 1px solid #2885BE;
    `}
    
    ${position.vertical === 'bottom' && `
      top: 126px;
      border-top: 1px solid #2885BE;
    `}
    
    ${position.horizontal === 'left' && `
      right: 126px;
    `}
    
    ${position.horizontal === 'right' && `
      left: 126px;
    `}

    ${position.inside && position.horizontal === 'left' && `
      left: -126px;
      right: initial;
    `}

    ${position.inside && position.horizontal === 'right' && `
      right: -126px;
      left: initial;
    `}
  `}
  
  &:before {
    content: '';
    position: absolute;
    width: 1px;
    height: 180px;
    background-color: #2885BE;
    
    ${({ position }) => position && css`
      ${position.vertical === 'top' && `
        top: 100%;
        margin-top: -26px;
      `}
      
      ${position.vertical === 'bottom' && `
        bottom: 100%;
        margin-bottom: -26px;
      `}
      
      ${position.horizontal === 'left' && `
        left: 100%;
        margin-left: 63px;
      `}
      
      ${position.horizontal === 'right' && `
        right: 100%;
        margin-right: 63px;
      `}
      
      ${position.horizontal === 'right' && position.vertical === 'top' && `
        transform: rotate(45deg);
      `}
      
      ${position.horizontal === 'right' && position.vertical === 'bottom' && `
        transform: rotate(-45deg);
      `}
      
      ${position.horizontal === 'left' && position.vertical === 'top' && `
        transform: rotate(-45deg);
      `}
      
      ${position.horizontal === 'left' && position.vertical === 'bottom' && `
        transform: rotate(45deg);
      `}
      
      ${position.inside && position.horizontal === 'left' && `
        left: 0;
      `}
      
      ${position.inside && position.horizontal === 'right' && `
        right: 0;
      `}
    `}
  }
`

const SupTitle = styled('div')`
  font-size: 10px;
  color: #263973;
  letter-spacing: 0.1em;
  font-weight: 500;
  transition: .15s color ease-in-out;
`

const Title = styled('div')`
  font-size: 12px;
  letter-spacing: 0.1em;
  font-weight: 500;
  transition: .15s color ease-in-out;
`

const LinkIcon = styled(Arrow)`
  display: inline-block;
  margin: 20px auto 0;
  color: currentColor;
  transition: .15s color ease-in-out;
  position: absolute;
  right: 0;
  bottom: 4px;
  left: 0;
  margin: auto;
`

const Caption = styled('div')`
  cursor: pointer;
  display: flex;
  align-items: start;
  flex-direction: column;
  
  &:hover {
    color: #4EA4D9;
  }
`

const ContentCaption = styled(Caption)`
  align-items: stretch !important;
  text-align: center;
  position: relative;
  z-index: 20;
  justify-content: end;
  padding: 4px 34px 39px;
  color: #fff;
  
  ${({clickable}) => !clickable && css`
    cursor: default;
    
    &:hover {
      color: #fff;
    }
  `}
  
  ${SupTitle} {
    font-size: 11px;
    color: currentColor;
    letter-spacing: 0.17em;
    font-weight: 700;
  }
  
  ${Title} {
    color: currentColor;
    letter-spacing: 0.18em;
    white-space: normal;
  }
`

const bounce = keyframes`
  0%   { transform: scale(1,1)      translateY(0); }
  10%  { transform: scale(1.1,.9)   translateY(0); }
  30%  { transform: scale(.9,1.1)   translateY(-10px); }
  50%  { transform: scale(1.05,.95) translateY(0); }
  57%  { transform: scale(1,1)      translateY(-5px); }
  64%  { transform: scale(1,1)      translateY(0); }
  100% { transform: scale(1,1)      translateY(0); }
`;

const MapPoint_ = styled(MapPoint)`
  font-size: 30px;
  max-width: initial;
  position: absolute;
  z-index: 10;
  bottom: 10px;
  right: -105px;
  left: -100px;
  margin: 0 auto;
  
  animation-name: ${bounce};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-delay: 2s;
  
  stop {
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
  }
`

const ContentInfo = styled('div')`
  position: absolute;
  left: 50%;
  top: 22px;
  bottom: 22px;
  background-color: #fff;
  width: 500px;
  padding: 40px 65px 40px 194px;
  white-space: pre-wrap;
  font-weight: 500;
  letter-spacing: 0.18em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
`

const FirstInfoItem = styled('div')`

`

const FirstInfoRow = styled('div')`
  font-size: 12px;
  line-height: 1.33;
`

const SecondInfoRow = styled('div')`
  font-size: 14px;
  line-height: 1.44;
`
