import React from 'react';
import { ComboPowerType } from '../types/ComboTypes';
import { PowerType } from '../types/DisciplineTypes';
import PowerTitle from './PowerTitle';
import Table from './Table';

const Power = ({ power }: { power: PowerType | ComboPowerType }) => (
  <article className="py-6 group">
    <PowerTitle
      title={power.title}
      source={power.source}
      requirements={
        (power as ComboPowerType).requirements
          ? (power as ComboPowerType).requirements
          : null
      }
      extraRequirements={
        (power as ComboPowerType).extra_requirements
          ? (power as ComboPowerType).extra_requirements
          : null
      }
    />
    <section className="space-y-1">
      {power.description.map((paragraph, i) => (
        <p key={`power-${power.title}-para-${i}`}>{paragraph}</p>
      ))}
    </section>
    <footer className="text-xs flex justify-end w-full">
      <div className="sm:max-w-md pt-4">{power.source}</div>
    </footer>
    {power.extra_table ? <Table table={power.extra_table} /> : null}
    {(power as PowerType).extra_table_two ? (
      <Table table={(power as PowerType).extra_table_two} />
    ) : null}
  </article>
);

export default Power;
