import styled from 'styled-components'

// Components
import { Container } from '@/components/ui';

const Heading = ({ data: text }) => {
  
  return (
    <Root>
      <Wrapper>
        <p>{text}</p>
      </Wrapper>
    </Root>
  )
}

export default {
  name: 'Heading',
  Component: Heading
}

const Root = styled(Container)`

  p {
    font-weight: bold;
    font-size: 15px;
    line-height: 2;
    letter-spacing: 0.1em;
    margin: 0 0 24px;
  }
`

const Wrapper = styled('div')`
  padding-left: 285px;
`
