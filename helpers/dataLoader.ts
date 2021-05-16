import fs from 'fs';
import path from 'path';
import orderBy from 'lodash/orderBy';
import slugify from 'slugify';
import { compact, sortBy } from 'lodash';
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
    thaumaturgies: Record<
      string,
      {
        name: string;
        slug: string;
        paths: Record<string, { name: string; slug: string }>;
      }
    >;
  }>(
    (result, discipline) => {
      if (discipline.subname === '' && discipline.level !== 0) {
        if (!result.disciplines[discipline.name]) {
          result.disciplines[discipline.name] = {
            name: discipline.name,
            slug: slugify(discipline.name).toLowerCase(),
          };
        }
      } else if (discipline.subname !== '') {
        if (!result.thaumaturgies[discipline.name]) {
          result.thaumaturgies[discipline.name] = {
            name: discipline.name,
            slug: slugify(discipline.name).toLowerCase(),
            paths: {},
          };
        }
        if (!result.thaumaturgies[discipline.name].paths[discipline.subname]) {
          result.thaumaturgies[discipline.name].paths[discipline.subname] = {
            name: discipline.subname,
            slug: slugify(discipline.subname).toLowerCase(),
          };
        }
      }
      return result;
    },
    { disciplines: {}, thaumaturgies: {} }
  );

  const cleanedPowers = {
    disciplines: orderBy(Object.values(disciplinesReworked.disciplines), [
      'name',
    ]),
    thaumaturgies: orderBy(Object.values(disciplinesReworked.thaumaturgies), [
      'name',
    ]).map((thau) => ({
      name: thau.name,
      slug: thau.slug,
      paths: orderBy(Object.values(thau.paths), ['name']),
    })),
  };

  return {
    disciplines: cleanedPowers.disciplines,
    thaumaturgies: cleanedPowers.thaumaturgies,
  };
};

export interface LevelPowerType {
  level: number;
  powers: Array<DisciplineType>;
}

export type PowersType = Array<LevelPowerType>;

const cleanPowers = (powers: Array<DisciplineType>) =>
  compact(
    powers.reduce<PowersType>((result, power) => {
      result[power.level] ||= { level: power.level, powers: [] };
      result[power.level].powers.push(power);
      return result;
    }, [])
  ).map((levelPowers) => ({
    level: Number(levelPowers.level),
    powers: sortBy(levelPowers.powers, ['title']),
  }));

export const loadDiscipline = (slug: string) => {
  const disciplines = loadDisciplinesData();
  const powers = disciplines.filter(
    (disc) => slugify(disc.name).toLowerCase() === slug
  );

  const cleanedPowers = cleanPowers(powers);

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

export const loadThaumaturgyPaths = (slug: string) => {
  const disciplines = loadDisciplinesData();
  const powers = disciplines.filter(
    (disc) => slugify(disc.name).toLowerCase() === slug
  );
  const thaumaParsed = powers.reduce<{
    paths: Record<string, { name: string; slug: string }>;
    powers: Array<DisciplineType>;
  }>(
    (result, power) => {
      if (power.subname) {
        result.paths[power.subname] ||= {
          name: power.subname,
          slug: slugify(power.subname).toLowerCase(),
        };
      } else if (power.level === 0) result.powers.push(power);
      return result;
    },
    { paths: {}, powers: [] }
  );

  return {
    paths: sortBy(Object.values(thaumaParsed.paths), ['name']),
    powers: thaumaParsed.powers,
    name: powers[0].name,
    slug,
  };
};

export const loadThaumaturgyPath = (
  thaumaturgySlug: string,
  pathSlug: string
) => {
  const disciplines = loadDisciplinesData();
  const powers = disciplines.filter(
    (disc) => slugify(disc.name).toLowerCase() === thaumaturgySlug
  );
  const pathPowers = powers.filter(
    (disc) => slugify(disc.subname).toLowerCase() === pathSlug
  );

  const cleanedPowers = cleanPowers(pathPowers);

  return {
    powers: cleanedPowers,
    levels: cleanedPowers
      .map((e) => e.level)
      .filter((level) => level !== 0)
      .sort((a, b) => a - b),
    name: pathPowers[0]?.name,
    subname: pathPowers[0]?.subname,
    thaumaturgySlug,
    pathSlug,
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
