import isArray from './utils';

export const min = (...args) => {

  let data = args;
  if (data === undefined || !data.length) return undefined;
  data = data.flat();
  return Math.min(...data);

}

export const copy = (args) => (isArray(args)) ? [...args] : { ...args };

export const reverseMerge = (...args) => (args.reverse().flat());

export const filterAttribs = ({ a, b, ...rest } = { ...args }) => (rest);
