export interface AdvFlawType {
  name: string;
  description: string;
  kind: 'Atout' | 'Handicap';
  type:
    | 'Social'
    | 'Mental'
    | 'Surnaturel'
    | 'Physique'
    | 'Psychologique'
    | 'Possession';
  subtype: string;
  level: Array<number> | number;
  source: string;
}

export type AdvFlawsType = Array<AdvFlawType>;
