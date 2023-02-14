let nums: number[] = [1, 2, 3];

const anArray: (number | string)[] = [1, "eins"];

let strs: Array<string> = ["eins", "zwei"];
let arrs: Array<Array<number>> = [
  [1, 2],
  [9, 8],
];

function first<T>(elements: Array<T>): T {
  return elements[0];
}
