import * as React from 'react'
import Head from 'next/head'
import { logPageView, initGA } from '../utils/googleAnalytics'

type LayoutProps = {
  title?: string
}

const layoutStyle = {
  display: 'flex',
  flex: 1,
  'flex-direction': 'column',
  border: '10px solid white',
  backgroundColor: 'white',
  color: 'black',
  height: '100vh'
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => {
  React.useEffect(() => {
    // window is accessible here.
    if (!(window as any).GA_INITIALIZED) {
      initGA()
      ;(window as any).GA_INITIALIZED = true
    }
    logPageView()
  })

  return (
    <div style={layoutStyle}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Dosis&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <style jsx global>{`
        body {
          margin: 0px;
        }
      `}</style>
      {children}
    </div>
  )
}
export default Layout
