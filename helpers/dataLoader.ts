import fs from 'fs';
import path from 'path';
import orderBy from 'lodash/orderBy';
import slugify from 'slugify';
import { compact, groupBy, sortBy } from 'lodash';
import { DisciplineType } from '../types/DisciplineTypes';
import { ComboPowerType } from '../types/ComboTypes';

export const loadDisciplinesData = () => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const disciplinePath = path.join(dataDirectory, 'disciplines.json');
  const disciplinesJson = fs.readFileSync(disciplinePath, 'utf8');
  const disciplines: Array<DisciplineType> = JSON.parse(disciplinesJson);

  return disciplines;
};

export const loadDisciplines = () => {
  const disciplines = loadDisciplinesData();

  const disciplinesReworked = disciplines.reduce<{
    disciplines: Record<string, { name: string; slug: string }>;
    thaumaturgies: Record<string, { name: string; slug: string }>;
  }>(
    (result, discipline) => {
      if (discipline.subname === '' && discipline.level !== 0) {
        if (!result.disciplines[discipline.name]) {
          result.disciplines[discipline.name] = {
            name: discipline.name,
            slug: slugify(discipline.name).toLowerCase(),
          };
        }
      } else if (
        discipline.subname !== '' &&
        !result.thaumaturgies[discipline.name]
      ) {
        result.thaumaturgies[discipline.name] = {
          name: discipline.name,
          slug: slugify(discipline.name).toLowerCase(),
        };
      }
      return result;
    },
    { disciplines: {}, thaumaturgies: {} }
  );

  return {
    disciplines: orderBy(Object.values(disciplinesReworked.disciplines), [
      'name',
    ]),
    thaumaturgies: orderBy(Object.values(disciplinesReworked.thaumaturgies), [
      'name',
    ]),
  };
};

export interface LevelPowerType {
  level: number;
  powers: Array<DisciplineType>;
}

export type PowersType = Array<LevelPowerType>;

export const loadDiscipline = (slug: string) => {
  const disciplines = loadDisciplinesData();
  const powers = disciplines.filter(
    (disc) => slugify(disc.name).toLowerCase() === slug
  );

  const cleanedPowers = compact(
    powers.reduce<PowersType>((result, power) => {
      result[power.level] ||= { level: power.level, powers: [] };
      result[power.level].powers.push(power);
      return result;
    }, [])
  ).map((levelPowers) => ({
    level: Number(levelPowers.level),
    powers: sortBy(levelPowers.powers, ['title']),
  }));

  return {
    powers: cleanedPowers,
    levels: cleanedPowers
      .map((e) => e.level)
      .filter((level) => level !== 0)
      .sort((a, b) => a - b),
    name: powers[0]?.name,
    slug,
  };
};

export const loadComboDisciplines = () => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const disciplineComboPath = path.join(
    dataDirectory,
    'disciplines_combo.json'
  );
  const disciplinesComboJson = fs.readFileSync(disciplineComboPath, 'utf8');
  const disciplinesCombo: Array<ComboPowerType> =
    JSON.parse(disciplinesComboJson);

  return disciplinesCombo;
};

export const loadComboDisciplinesRequirements = () => {
  const disciplinesCombo = loadComboDisciplines();

  const comboRequirements = Array.from(
    new Set(
      disciplinesCombo
        .map((e) => e.requirements)
        .flat()
        .map((e) => e.or)
        .flat()
        .map((e) => e.name)
    )
  )
    .sort()
    .map((discName) => ({
      name: discName,
      slug: slugify(discName).toLowerCase(),
    }));

  return comboRequirements;
};
