import styled from 'styled-components'

// Components
import { Container } from '@/components/ui';

const Paragraph = ({ data: text }) => {
  
  return (
    <Root>
      <Wrapper>
        <p>{text}</p>
      </Wrapper>
    </Root>
  )
}

export default {
  name: 'Paragraph',
  Component: Paragraph
}

const Root = styled(Container)`

  p {
    font-weight: 300;
    font-size: 15px;
    line-height: 2;
    letter-spacing: 0.1em;
    margin: 0 0 24px;
  }
`

const Wrapper = styled('div')`
  padding-left: 285px;
`
