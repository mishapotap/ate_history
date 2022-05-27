import styled from 'styled-components'

// Components
import { Container } from '@/components/ui';

const ImageWithCaption = ({ data }) => {
  const { image, caption } = data;
  
  return (
    <Root>
      <Grid>
        <Image
          src={image}
          alt={caption.title}
        />
  
        <Caption>
          <Title>{caption.title}</Title>
          <Description>{caption.description}</Description>
        </Caption>
      </Grid>
    </Root>
  )
}

export default {
  name: 'ImageWithCaption',
  Component: ImageWithCaption
}

const Root = styled(Container)`
  margin-top: 98px;
  margin-bottom: 77px;
`

const Grid = styled('div')`
  display: flex;
`

const Image = styled('img')`
  width: 690px;
`

const Caption = styled('div')`
  margin-left: 155px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 100%;
    margin-right: 22px;
    width: 98px;
    height: 1px;
    background-color: #000000;
  }
  
  p + p {
    margin-top: 15px;
    margin-bottom: 0;
  }
`

const Title = styled('p')`
  font-weight: bold;
  font-size: 15px;
  line-height: 1,73;
  letter-spacing: 0.1em;
`

const Description = styled('p')`
  font-size: 13px;
  line-height: 2;
  letter-spacing: 0.1em;
  color: #545454;
  white-space: pre-wrap;
`
