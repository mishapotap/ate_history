// Core
import styled from 'styled-components'

// Components
import { YandexMap as Map } from '@/components/composite'
import { Container } from '@/components/ui'

const Contacts = ({ data }) => {
  const { label, address, phones, fax, email, map } = data;
  
  return (
    <Root>
      <Container>
        <Wrapper>
          <Grid>
            <Label>{label}</Label>
      
            <Info>
              { address && (
                <Address>{address}</Address>
              ) }
  
              { phones && (
                <Phones>{phones}</Phones>
              ) }
  
              { fax && (
                <Fax>Факс: {fax}</Fax>
              ) }
  
              { email && (
                <Email>{email}</Email>
              ) }
            </Info>
          </Grid>
        </Wrapper>
      </Container>
  
      { map && (
        <MapWrapper>
          <Map url={map.shared}/>
        </MapWrapper>
      ) }
    </Root>
  )
}

export default {
  name: 'Contacts',
  Component: Contacts
}

const Root = styled('div')`
  padding-top: 60px;
  line-height: 2.14;
  letter-spacing: 0.1em;
`

const Wrapper = styled('div')`
  padding-left: 285px;
`

const Grid = styled('div')`
  display: flex;
  align-items: flex-start;
`

const Label = styled('div')`
  width: 107px;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: #263973;
`

const Info = styled('div')`
  font-size: 14px;
  margin-left: 89px;
  position: relative;
  
  &:before {
    content: '';
    width: 3px;
    background-color: #263973;
    position: absolute;
    top: 0;
    right: 100%;
    bottom: 0;
    margin-right: 55px;
    border-radius: 9999px;
  }

  p {
    margin: 0;
  }
`

const Address = styled('p')`
  font-weight: 500;
`

const Phones = styled('p')`
  font-weight: 300;
`

const Fax = styled('p')`
  font-weight: 300;
`

const Email = styled('p')`
  font-weight: 500;
`

const MapWrapper = styled('div')`
  height: 514px;
  margin-top: 62px;
`
