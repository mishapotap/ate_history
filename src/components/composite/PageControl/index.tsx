// Core
import React, { useRef, useEffect, useState } from 'react'
import styled from "styled-components"

// Service
import { useAppContext } from "@/components/context/App"

// Components
import { Control } from "@/components/ui"
import { Question as IconInfo, Volume as IconVolume } from "@/components/svg"

const Root = styled.div`
  display: flex;
  button + button {
    margin-left: -1px;
  }
`


const PageControl = () => {
  const ref = useRef()
  const appContext = useAppContext()

  const [toggleMusic, setToggleMusic] = useState(false);  

  useEffect(() => {
    // Записываем ссылку на PageControl для добавления доп элементов через портал
    if (ref && !appContext.pageControlRef) {
      appContext.pageControlRef = ref
    }
  }, [ ref ])
  
  return (
    <Root ref={ref}>
      {/* <Control>
        <IconInfo/>
      </Control> */}
      
      {/* Кнопка с svg внутри */}
      <Control onClick={() => setToggleMusic((prev) => !prev)}>
        <audio key={+(toggleMusic)} autoPlay={toggleMusic}>
          <source src="/creative.ogg" type='audio/ogg; codecs=vorbis'/>
          <source src="/creative.mp3" type='audio/mpeg'/>
        </audio>
        <IconVolume/>
      </Control>
    </Root>
  );
}

export default PageControl
