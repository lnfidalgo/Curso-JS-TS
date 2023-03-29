export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function sumArgs<T>(...args: T[]): number {
  const argsResult = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return argsResult;
}

console.log(sumArgs(5, 4, 1,));
console.log(sumArgs(...[5, "a", "b", 4, 1, 1]));
