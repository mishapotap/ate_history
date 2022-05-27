import React from 'react'
import type { AppProps } from 'next/app'
import { GlobalStyle } from "@/components/service"
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'
import { AppProvider } from "@/components/context/App";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  )
}

export default MyApp
