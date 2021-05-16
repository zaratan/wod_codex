import React from 'react';
import { LevelPowerType } from '../helpers/dataLoader';
import LevelTitle from './LevelTitle';
import PowerList from './PowerList';

const LevelPowers = ({ levelPowers }: { levelPowers: LevelPowerType }) => (
  <section id={`level-${levelPowers.level}`}>
    <LevelTitle level={levelPowers.level} />
    <PowerList powers={levelPowers.powers} />
  </section>
);

export default LevelPowers;
