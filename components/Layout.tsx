import Head from 'next/head';
import Link from 'next/link';
import React, { ReactNode, useContext } from 'react';
import ThemeContext, { ThemeProvider } from '../contexts/ThemeContext';
import classMerge from '../helpers/classMerge';
import LightToggle from './LightToggle';

const Layout = ({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title?: string;
  description: string;
}) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen h-full flex flex-col bg-white dark:bg-gray-800 dark:text-gray-200 text-lg">
        <Head>
          <title>{`WoD Codex${title ? `: ${title}` : ''}`}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="bg-gray-900 mb-6">
          <header className="py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between sm:items-center">
              <header>
                <Link href="/">
                  <a>
                    <h1 className="text-3xl font-bold text-gray-100  hover:text-yellow-500 transition-colors ease-in-out duration-300">
                      WoD Codex
                    </h1>
                  </a>
                </Link>
                <sub className="text-gray-100 italic" />
              </header>
              <LightToggle />
            </div>
          </header>
        </div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow mb-8">
          {/* <div className="max-w-5xl mx-auto"> */}
          {title ? (
            <header className="text-center text-4xl font-medium py-10">
              <h1>{title}</h1>
            </header>
          ) : null}
          {children}
          {/* </div> */}
        </main>
        <footer className="italic text-center bg-gray-800 dark:bg-gray-900 text-white">
          <span className="pb-3 pt-2 flex justify-center items-center">
            <span>
              Made with{' '}
              <span
                className="transition-colors hover:text-red-500 duration-5000 ease-in-out hover:duration-200 mx-1"
                style={{ cursor: 'grab' }}
              >
                ♥
              </span>
              by
            </span>
            <a
              className="pl-1 text-blue-400 hover:text-yellow-500"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://twitter.com/zaratan"
            >
              @zaratan
            </a>
            .
            <a
              className="pl-1 text-blue-400 hover:text-yellow-500"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://ko-fi.com/zaratan"
            >
              Buy me a tea
            </a>
            . Data from
            <a
              className="pl-1 text-blue-400 hover:text-yellow-500"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="http://bindusara.free.fr"
            >
              Les Litanies de Sang
            </a>
            .
            <Link href="/about">
              <a className="pl-1 text-blue-400 hover:text-yellow-500">
                Learn more
              </a>
            </Link>
            .
          </span>
        </footer>
      </div>
    </div>
  );
};

const WrappedLayout = ({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title?: string;
  description: string;
}) => (
  <ThemeProvider>
    <Layout title={title} description={description}>
      {children}
    </Layout>
  </ThemeProvider>
);

export default WrappedLayout;
