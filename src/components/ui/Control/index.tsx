import React from 'react'
import styled from "styled-components"

// Components
import { Button } from "@/components/ui"

const Root = styled(Button)`
  font-size: 26px;
  padding-right: 0;
  padding-left: 0;
  transition: .15s ease-in-out background-color, .15s ease-in-out color, .15s ease-in-out border-color;
  
  &:hover {
    background-color: #2D74AD;
    color: #fff;
    z-index: 10;
    border-color: #2D74AD;
  }
  
  &:active {
    background-color: #1A588B;
    color: #fff;
    z-index: 10;
    border-color: #1A588B;
  }
`

const Control = ({ children, ...props }) => {
  return (
    <Root {...props}>
      {children}
    </Root>
  )
}

export default Control
