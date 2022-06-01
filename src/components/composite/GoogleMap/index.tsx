import React, { useEffect, useRef, ReactElement } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function MyMapComponent({
  center,
  zoom,
} : {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef();
  
  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });
  
  return <div ref={ref} id="map" style={{height: '100%'}} />;
}

const GoogleMap = ({ lat = -34.397, lng = 150.644 }) => {
  const center = { lat, lng };
  const zoom = 4;
  
  return (
    <Wrapper apiKey="" render={render}>
      <MyMapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
}

export default GoogleMap