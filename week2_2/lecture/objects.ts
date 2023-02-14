const car = {
  brand: "Fiat",
  model: "500",
  color: "white",
};

type Car = {
  brand: string;
  model: string;
  color: string;
};

const greenCar: Car = {
  brand: "Fiat",
  model: "500",
  color: "green",
};

const redCar: Car = {
  brand: "Fiat",
  model: "500",
  color: "red",
};

type Car_2 = {
  brand: string;
  model: string;
  color: string;
  owner: {
    name: string;
    birthday: string;
  };
};

type Owner = {
  name: string;
  birthday: string;
};

type Car_3 = {
  brand: string;
  model: string;
  color: string;
  owner: Owner;
};

type Motorcycle = {
  brand: string;
  model: string;
  wheels: number;
  owner: Owner;
};

function printOwnerOfCar(car: Car_3) {
  console.log(
    "Der Besitzer ist :" +
      car.owner.name +
      " und der hat am " +
      car.owner.birthday +
      " Geburtstag."
  );
}

function printOwnerOfMotorcycle(motorcycle: Motorcycle) {
  console.log(
    "Der Besitzer ist :" +
      motorcycle.owner.name +
      " und der hat am " +
      motorcycle.owner.birthday +
      " Geburtstag."
  );
}

function printOwner({ owner }: { owner: Owner }) {
  console.log(
    "Der Besitzer ist :" +
      owner.name +
      " und der hat am " +
      owner.birthday +
      " Geburtstag."
  );
}
