import { isArray } from './utils';

export function min() {
  isArray();
  if (arguments === undefined) return undefined;

  let myParams = [...arguments];

  if (typeof myParams[0] === "object") {
    let myNew = myParams[0];
    return myNew.sort()[0];
  }

  return myParams.sort()[0];
}

export function copy() {
  let type = arguments['0'].constructor.name;
  if (type === "Object") return { ...arguments['0'] }
  return [...arguments['0']];

}
export function reverseMerge() {
  let newArray = [...arguments];
  let data = newArray[0];
  let newData;
  for (let i in newArray) {
    if (i !== 0) {
      newData = [...newArray[i], ...data];
    }
  }
  return newData;
}

export function filterAttribs() {

  let newObject = {};
  Object.entries(...arguments).map((key) => {
    if (key[0] !== "a" && key[0] !== "b") {
      newObject[key[0]] = key[1];
    }
  });

  return newObject;
}
