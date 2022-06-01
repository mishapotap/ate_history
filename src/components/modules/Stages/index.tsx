import styled from 'styled-components'

// Components
import { Container } from '@/components/ui';

const Stages = ({ data }) => {
  const { label } = data;
  
  return (
    <Root>
      <Wrapper>
        <Label>{label}</Label>
      </Wrapper>
    </Root>
  )
}

export default {
  name: 'Stages',
  Component: Stages
}

const Root = styled(Container)`
  margin-top: 56px;
  margin-bottom: 62px;
`

const Wrapper = styled('div')`
  padding-left: 285px;
`

const Label = styled('div')`
  font-weight: bold;
  font-size: 15px;
  line-height: 1.73;
  letter-spacing: 0.1em;
`
