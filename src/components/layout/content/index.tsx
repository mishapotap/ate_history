import { Fragment } from 'react'
import styled from "styled-components"

// Constants
import { section } from '@/common/constants'

// Components
import { Container, CloseButton } from "@/components/ui"
import { Head } from "@/components/service"

const ControlsContainer = styled(Container)`
  position: absolute;
  z-index: 10;
  top: 54px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
`

const Content = styled.div`
  position: relative;
  z-index: 5;
`

const Layout = ({ children, title, backUrl = section.home }) => {
  return (
    <Fragment>
      <Head title={title}/>
      
      <ControlsContainer>
        <CloseButton href={backUrl} />
      </ControlsContainer>
      
      <Content>
        {children}
      </Content>
    </Fragment>
  )
}

export default Layout