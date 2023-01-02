import '../styles/globals.css';
import "../styles/style.css";
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
