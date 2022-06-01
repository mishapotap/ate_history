import React from 'react'

const YandexMap = ({ url }) => {
  return (
    <iframe
      src={url}
      width="100%"
      height="514"
      frameBorder="0"
    />
  );
}

export default YandexMap