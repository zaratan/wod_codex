import { LinkIcon } from '@heroicons/react/outline';
import React from 'react';
import slugify from 'slugify';
import { PowerType } from '../types/DisciplineTypes';
import PowerTitle from './PowerTitle';

const Power = ({ power }: { power: PowerType }) => (
  <article className="py-6">
    <PowerTitle title={power.title} source={power.source} />
    <section className="space-y-1">
      {power.description.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </section>
    <footer className="text-xs flex justify-end w-full">
      <div className="max-w-md pt-4">{power.source}</div>
    </footer>
  </article>
);

export default Power;
