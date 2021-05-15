import { Switch } from '@headlessui/react';
import React, { useContext, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import classMerge from '../helpers/classMerge';
import ThemeContext from '../contexts/ThemeContext';

const LightToggle = () => {
  const { darkMode: enabled, setDarkMode: setEnabled } =
    useContext(ThemeContext);
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classMerge(
        enabled ? 'bg-indigo-600' : 'bg-yellow-300',
        'relative inline-flex flex-shrink-0 h-9 w-16 border-4 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      )}
    >
      <span className="sr-only">Dark mode</span>
      <span
        className={classMerge(
          enabled ? 'translate-x-7' : 'translate-x-0',
          'pointer-events-none relative inline-block h-7 w-7 rounded-full bg-white dark:bg-gray-200 shadow transform ring-0 transition ease-in-out duration-200'
        )}
      >
        <span
          className={classMerge(
            enabled
              ? 'opacity-0 ease-out duration-100'
              : 'opacity-100 ease-in duration-200',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <SunIcon className="h-4 w-4 text-gray-800" />
        </span>
        <span
          className={classMerge(
            enabled
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <MoonIcon className="h-4 w-4 text-gray-800" />
        </span>
      </span>
    </Switch>
  );
};

export default LightToggle;
