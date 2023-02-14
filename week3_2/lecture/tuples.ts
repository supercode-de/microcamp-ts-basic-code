const person: [string, number] = ["Lars", 28];

const employees: [string, number][] = [
  ["Lars", 28],
  ["Ruben", 30],
];

const lars: [string, number] = employees[0];

type Employee = [string, number];

const employees_2: Employee[] = [
  ["Lars", 28],
  ["Ruben", 30],
];
