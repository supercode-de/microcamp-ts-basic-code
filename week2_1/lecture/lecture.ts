type MyNumber = number;

const aNumber: MyNumber = 1;

const anotherNumber: number = aNumber;

type StringOrNumber = string | number;

const aString: StringOrNumber = "Ein string";

const bNumber: StringOrNumber = 5;

function printId(id: StringOrNumber) {
  console.log("Deine ID ist: " + id);
}

function printId_2(id: string | number) {
  console.log("Deine ID ist: " + id);
}

function printId_3(id: number | string) {
  if (typeof id === "string") {
    // Hier ist id ein string
    console.log(id.toUpperCase());
  } else {
    // Hier ist id eine number
    console.log(id);
  }
}
