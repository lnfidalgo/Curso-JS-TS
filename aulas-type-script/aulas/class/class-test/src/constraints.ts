export {};
type GetKey = <O, K extends keyof O>(obj: O, key: K) => O[K];

const getKeyFn: GetKey = (obj, key) => obj[key];

const animal = {
  name: "Pantera",
  color: "cor de Rosa",
  age: 5,
};

console.log(getKeyFn(animal, "name"));
