type callbackItem = (item: string) => string;

export function mapString(array: string[], callbackfn: callbackItem): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const newUpperArray = mapString(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(newUpperArray);
