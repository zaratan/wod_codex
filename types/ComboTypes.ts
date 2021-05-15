/* eslint-disable camelcase */
export type RequirementType = {
  or: Array<{ name: string; level: number; subname: string }>;
};

export type RequirementsType = Array<RequirementType>;

export type ExtraRequirementsType = Array<string>;

export type ComboPowerType = {
  name: string;
  requirements: RequirementsType;
  extra_requirements: ExtraRequirementsType;
  description: Array<string>;
  source: string;
  extra_table: Array<Array<string>>;
};
