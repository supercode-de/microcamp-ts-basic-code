class Manager extends Employee {
  private department: string;

  constructor(name: string, age: number, department: string) {
    super(name, age);
    this.department = department;
  }

  getDepartment(): string {
    return this.department;
  }
}

class Developer extends Employee {
  private programmingLanguage: string;

  constructor(name: string, age: number, programmingLanguage: string) {
    super(name, age);
    this.programmingLanguage = programmingLanguage;
  }

  getProgrammingLanguage(): string {
    return this.programmingLanguage;
  }
}

function printNames(es: Employee[]) {
  es.forEach((e) => console.log(e.getName()));
}

class Employee {
  //...
  getName(): string {
    return this.name;
  }
}

class Manager extends Employee {
  //...
  getName(): string {
    return "Manager: " + super.getName();
  }
}

class Developer extends Employee {
  //...
  getName(): string {
    return "Developer: " + super.getName();
  }
}

const employees: Employee[] = [
  new Manager("Sophie", 25, "HR"),
  new Developer("Lars", 28, "TypeScript"),
];

printNames(employees);
