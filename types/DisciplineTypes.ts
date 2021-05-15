/* eslint-disable camelcase */
export type PowerType = {
  title: string;
  description: Array<string>;
  source: string;
  extra_table?: Array<Array<string>>;
  extra_table_two?: Array<Array<string>>;
  name: string;
  subname: string;
  level: number;
};

export type LevelType = {
  powers: Array<PowerType>;
  level: number | string;
};

export type DisciplineType = PowerType;
