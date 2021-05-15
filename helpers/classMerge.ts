const classMerge = (...classes: Array<string>) =>
  classes.filter(Boolean).join(' ');

export default classMerge;
