import React from 'react'
import styled from "styled-components"

const Root = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  background: transparent;
  border: 0.5px solid #000000;
  color: #000000;
  font-size: 12px;
  cursor: pointer;
`

const Button = ({ children, ...props }) => {
  return (
    <Root {...props}>
      {children}
    </Root>
  )
}

export default Button


