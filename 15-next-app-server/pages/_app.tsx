import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <h1>The movies app</h1>
      </header>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
