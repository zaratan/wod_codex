import React from 'react';
import { ComboPowerType } from '../types/ComboTypes';
import { DisciplineType } from '../types/DisciplineTypes';
import Power from './Power';

const PowerList = ({
  powers,
  className,
}: {
  powers: Array<DisciplineType> | Array<ComboPowerType>;
  className?: string;
}) =>
  powers.length > 0 ? (
    <ul className={className}>
      {powers.map((power: DisciplineType | ComboPowerType) => (
        <li key={`power-${power.name}-${power.source.length}`}>
          <Power power={power} />
        </li>
      ))}
    </ul>
  ) : null;

export default PowerList;
