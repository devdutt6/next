import '../styles/globals.css';
import '../styles/layout.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import {ThemeProvider} from 'styled-components';

const theme = {
  colors: {
    primary: '#355C7D'
  }
}

export default function App({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>);
  }

  return (
    // <ThemeProvider theme={theme}>
    <>
    {/* <Header /> */}
    <Component {...pageProps} />
    {/* <Footer /> */}
    </>
    // </ThemeProvider>
  )
}
