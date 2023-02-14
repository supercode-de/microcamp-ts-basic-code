interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "John",
  age: 30,
};

interface Shape {
  width: number;
  height: number;
}

interface Color {
  color: string;
}

type ColoredShape = Shape & Color;

let square: ColoredShape = {
  width: 10,
  height: 10,
  color: "red",
};

interface Dictionary {
  [key: string]: number;
}

const dict: Dictionary = {
  Eins: 1,
  Zwei: 2,
};

interface Person {
  name: string;
  age: number;
  phone?: string;
}

let person: Person = {
  name: "John",
  age: 30,
};

let personWithPhone: Person = {
  name: "Jane",
  age: 25,
  phone: "555-555-5555",
};

interface Bankaccount {
  readonly accountNumber: number;
  balance: number;
}

let account: Bankaccount = {
  accountNumber: 1234567890,
  balance: 0,
};

account.accountNumber = 9876543210;
// Error, die Eigenschaft ist readonly
