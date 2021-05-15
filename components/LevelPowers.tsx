import React from 'react';
import { LevelPowerType } from '../helpers/dataLoader';
import LevelTitle from './LevelTitle';
import Power from './Power';

const LevelPowers = ({ levelPowers }: { levelPowers: LevelPowerType }) => (
  <section key={`level-${levelPowers.level}`} id={`level-${levelPowers.level}`}>
    <LevelTitle level={levelPowers.level} />
    <ul>
      {levelPowers.powers.map((power) => (
        <li key={`power-${power.name}`}>
          <Power power={power} />
        </li>
      ))}
    </ul>
  </section>
);

export default LevelPowers;
