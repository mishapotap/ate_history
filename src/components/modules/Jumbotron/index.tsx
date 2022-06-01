// Core
import React from "react"
import styled, { css } from "styled-components"

// Components
import { ContentModule } from "@/components/composite";
import { Container } from "@/components/ui";

//
import modules from '@/components/modules'

const Jumbotron = ({ data }) => {
  const { fullName, image, columns } = data;
  const sortedColumns = columns.sort((a, b) => a.order - b.order);
  
  return (
    <Root bg={image}>
      <Container_>
        <Title>{fullName}</Title>
  
        {sortedColumns && (
          <Grid>
            {sortedColumns.map((column, index) => (
              <Col key={index} num={index}>
                <ContentModule
                  data={column}
                  modules={modules.jumbotron}
                />
              </Col>
            ))}
          </Grid>
        )}
      </Container_>
    </Root>
  )
}

export default {
  name: 'Jumbotron',
  Component: Jumbotron
}

const Root = styled('div')`
  height: 769px;
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

const Container_ = styled(Container)`
  position: relative;
  z-index: 10;
`

const Title = styled('p')`
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

