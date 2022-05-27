// Core
import React from "react"
import styled from "styled-components"

// Instruments
import { getImageOfLocale } from "@/utils/helpers";

const FlagWithLabel = ({ data }) => {
  const { flag, text } = data
  const src = getImageOfLocale(flag);
  
  return (
    <Root>
      <Image src={src} alt=""/>
      <Text>{text}</Text>
    </Root>
  )
}

export default {
  name: 'FlagWithLabel',
  Component: FlagWithLabel
}

const Root = styled('div')`
  display: flex;
  align-items: center;
`

const Image = styled('img')`
  height: 60px;
`

const Text = styled('div')`
  font-weight: bold;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  margin-left: 25px;
`