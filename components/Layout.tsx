import Head from 'next/head';
import Link from 'next/link';
import React, { ReactNode, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import LightToggle from './LightToggle';
import ScrollToTopButton from './ScrollToTopButton';

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
            <header className="text-center text-4xl font-medium py-10 font-serif">
              <h1>{title}</h1>
            </header>
          ) : null}
          {children}
          {/* </div> */}
        </main>
        <footer className="italic text-center bg-gray-800 dark:bg-gray-900 text-white">
          <span className="py-6 pl-6 sm:pl-0 sm:pb-3 sm:pt-2 flex justify-center items-start sm:items-center flex-col sm:flex-row">
            <span className="sm:pr-1">
              <span>
                Made with
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
            </span>
            <span className="sm:pr-1">
              <a
                className="text-blue-400 hover:text-yellow-500"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://ko-fi.com/zaratan"
              >
                Buy me a tea
              </a>
              .
            </span>
            <span className="sm:pr-1">
              Data from
              <a
                className="pl-1 text-blue-400 hover:text-yellow-500"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="http://bindusara.free.fr"
              >
                Les Litanies de Sang
              </a>
              .
            </span>
            <span>
              <Link href="/about">
                <a className="text-blue-400 hover:text-yellow-500">About</a>
              </Link>
              .
            </span>
          </span>
        </footer>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
