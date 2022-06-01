// Core
import React from "react"
import styled from "styled-components"

const TextWithLabel = ({ data }) => {
  const { label, text } = data
  
  return (
    <React.Fragment>
      <Label>{label}</Label>
      <Text>{text}</Text>
    </React.Fragment>
  )
}

export default {
  name: 'TextWithLabel',
  Component: TextWithLabel
}

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