import Head from 'next/head';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bood imóveis: Venda de apartamentos, casas e mais.</title>
        <meta
          name='description'
          content='A nova forma de vender e comprar imóveis sem perder tempo. Financiamento de imóveis e créditos com garantia de imóveil. Tudo na palma da mão!'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={roboto.className}>
        <h1>Bood Imóveis</h1>
      </main>
    </>
  );
}
