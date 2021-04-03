import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NextNprogress from 'nextjs-progressbar'

import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
        <NextNprogress
          color="#d53f8c"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
