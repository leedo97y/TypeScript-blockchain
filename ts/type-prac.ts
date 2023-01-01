type Person = {
  name: string;
  age?: number;
  readonly like?: string;
};

const player: Person = {
  name: "amy",
  age: 23,
  like: "music",
};

const players = (name: string): Person => {
  return { name };
};

const hey = players("hey");
hey.age = 22;
// hey.like = "flower" - readonly 이므로 바꿀 수 없다.
