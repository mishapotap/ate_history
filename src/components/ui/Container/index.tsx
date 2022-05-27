import React from 'react';
import styled, { css } from "styled-components";

const Container = styled('div')`
  width: 100%;
  
  ${({ theme }) => css`
    padding-right: ${theme.grid.gutter / 2}px;
    padding-left: ${theme.grid.gutter / 2}px;
  `}
  
  margin-right: auto;
  margin-left: auto;
  
  ${({ isFluid, theme }) => !isFluid && css`
    max-width: 480px;
    
    ${Object.keys(theme.grid.breakpoints).map((bpItem) => `
      ${theme.grid.mq(bpItem)} {
        max-width: ${theme.grid.maxContainerWidth[bpItem]}px;
      }
    `)}
  `}
`

Container.defaultProps = {
  isFluid: false,
}

export default Container;
