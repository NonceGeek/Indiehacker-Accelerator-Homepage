import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {
  Press_Start_2P,
  Alef,
} from 'next/font/google';

const press_Start_2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ps2p',
})

const alef = Alef({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alef',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`
      ${press_Start_2P.variable}
      ${alef.variable}
    `}>
      <Component {...pageProps} />
    </main>
  );
}
