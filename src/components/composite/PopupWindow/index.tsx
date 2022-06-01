import styled from "styled-components"

// Components
import { Container, CloseButton } from "@/components/ui"

const PopupWindow = ({ children, onCloseHandler, ...props }) => {
  return (
    <Root {...props}>
      <ControlsContainer>
        <CloseButton onClick={onCloseHandler} />
      </ControlsContainer>
      
      <Content>
        {children}
      </Content>
    </Root>
  )
}

export default PopupWindow

const Root = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  background-color: white;
  padding: 173px 0;
`

const ControlsContainer = styled(Container)`
  position: absolute;
  z-index: 10;
  top: 54px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
`

const Content = styled('div')`
  position: relative;
  z-index: 5;
`
