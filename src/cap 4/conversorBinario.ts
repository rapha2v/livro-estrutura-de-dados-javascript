import { Stack } from "./stackClass";

const conversor = (decNumber: number): any => {
  const stack = new Stack();
  let isRest: boolean;
  while (decNumber >= 1) {
    isRest = decNumber % 2 === 0;
    stack.push(isRest ? 0 : 1);
    decNumber /= 2;
    decNumber = Math.floor(decNumber);
  }
  return parseInt(stack.itemsStack().join(""));
};

console.log(conversor(15000));
