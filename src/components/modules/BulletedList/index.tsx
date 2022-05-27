import styled from 'styled-components'

// Components
import { Container } from '@/components/ui';

const BulletedList = ({ data: list }) => {
  return (
    <Root>
      <Wrapper>
        <List>
          { list.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </List>
      </Wrapper>
    </Root>
  )
}

export default {
  name: 'BulletedList',
  Component: BulletedList
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

const List = styled('ul')`
  padding-left: 54px;
  font-weight: 300;
  font-size: 15px;
  line-height: 2;
  letter-spacing: 0.1em;
`

const Item = styled('li')`
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0.85em;
    right: 100%;
    margin-right: 48px;
    width: 6px;
    height: 6px;
    background: #263973;
    border-radius: 9999px;
  }
`
