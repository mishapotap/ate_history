import Head from 'next/head'
import React from "react";
// import { useData } from '../context/DataContext'

export default function AppHead({ title = 'ATE' }) {
  // const { metatitle, metadesc } = useData()
  
  return (
    <Head>
      <title>{ title }</title>
      {/*<link
        rel="preload"
        href="/fonts/montserrat-v18-latin_cyrillic-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin='true'
      />
      <link
        rel="preload"
        href="/fonts/montserrat-v18-latin_cyrillic-500.woff2"
        as="font"
        type="font/woff2"
        crossOrigin='true'
      />
      <link rel="shortcut icon" href="/favicon.ico" />*/}
      <meta name="description" content="meta description" />
      
      {/*<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />*/}
    </Head>
  )
}
