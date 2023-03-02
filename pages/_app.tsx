import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Claudio Cassimiro - Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer - React, NextJS, React Native, Type-Script, NestJS, NodeJS, Front-End Engineer, Back-End Engineer, Mobile Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
