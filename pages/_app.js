import 'styles/globals.css';
import 'styles/layout.css';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
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
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
    // </ThemeProvider>
  )
}
