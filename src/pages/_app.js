import { appWithTranslation } from 'next-i18next';
import '@/styles/globals.css';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

const App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default appWithTranslation(App);
