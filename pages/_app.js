import '../styles/globals.css'
import { RobinhoodProvider } from '../context/RobinhoodContext'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://4g8hdzbkldsd.usemoralis.com:2053/server'
      appId='SSYpbJwC30YvEj31lbUye0habOSlsJRZQNDY51wt'
    >
      <RobinhoodProvider>
          <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>


    )
}

export default MyApp
 