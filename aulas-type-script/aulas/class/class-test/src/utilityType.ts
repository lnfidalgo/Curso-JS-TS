export {};

const obj1: Record<string, string | number> = {
  name: "Lucas",
  surname: "Fidalgo",
  age: 30,
};
console.log(obj1);

type OriginalObj={
  name: string,
  surname?: string,
  age: number
};

type RequiredObj = Required<OriginalObj>
type OptionalObj = Partial<OriginalObj>
type ReadonlyObj = Readonly<OriginalObj>
