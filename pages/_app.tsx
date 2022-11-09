import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AutProvider } from '../contexts/authContext';
import Layout from '../components/Layout';
import AuthStateChanged from '../helpers/authStateChanged';


export default function App({ Component, pageProps }: AppProps) {
  return (
    // 2. Use at the root of your app
      <AutProvider>
        <Layout>
          <AuthStateChanged>
          <Component {...pageProps} />
          </AuthStateChanged>
        </Layout>
      </AutProvider>    
 
  );
}
