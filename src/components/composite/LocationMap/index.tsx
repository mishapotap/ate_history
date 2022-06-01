import React from "react"
import styled, { css } from "styled-components"

// Components
import { MapAreas } from "@/components/svg"

const LocationMap = ({ children, id, name }) => {
  
  return (
    <Root id={id} name={name}>
      { id !== 0 ? null : (
        <MapAreas_ name={name}/>
      ) }
      
      <ZeroPoint>
        {children}
      </ZeroPoint>
    </Root>
  )
}

export default LocationMap

const Root = styled('div')`
  height: 100%;
  background-size: 1920px 1080px;
  background-position: center;
  background-repeat: no-repeat;
  
  ${(p) => typeof p.id === 'number' && typeof p.name === 'string' && css`
    background-image: url("/images/map/${p.name}/${p.id}.png");
  `}
  
  .location-area {
    color: transparent;
    transition: .15s color ease-in-out;
    
    &:hover {
      color: #ffffff50;
    }
  }
`

const ZeroPoint = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 0;
  height: 0;
`

const MapAreas_ = styled(MapAreas)`
  position: absolute;
  top: -500px;
  right: -500px;
  bottom: -500px;
  left: -500px;
  margin: auto;
`
