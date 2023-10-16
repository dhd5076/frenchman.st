import Head from 'next/head';
import Header from './header';

import { useState, useEffect } from 'react';

import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <div className="mx-auto">
        <Header />
        <Analytics />
        <div className="mx-auto">
          {children}
          <div className="w-full p-4 text-center text-white bg-black">
                <div className="">   
                    <a></a>
                </div>
                <span className="text-center w-full block rosewood-font">Copyright &copy; 2023 Frenchman Street</span>
                <span className="text-xs italic"> Made With ❤️ By <a className="underline" href="https://dylandunn.me">Dylan Dunn</a></span>
            </div>
        </div>
      </div>
    </>
  );
}
