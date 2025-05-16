import "./style.css";

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(add(11, 2));

// type User = {
//   name: string;
//   age: number;
// };

// let user: User = {
//   name: "Lion",
//   age: 108,
// };

// let userJAck: User = {
//   name: "lAck",
//   age: 108,
// };

// console.log(user, userJAck);

// interface User {
//   name: string;
//   age: number;
// }

// let user: User = {
//   name: "Lion",
//   age: 108,
// };

// console.log(user);

// export {};

// let arrString: string[];

// arrString = ["Text", "1"];
// console.log(arrString);

// let matrix: number[][] = [
//   [1, 2],
//   [3, 4],
// ];

// console.log(matrix);

// let numbers: Array<number> = [1, 2, 3];
// console.log(numbers);

// let mixed: (number | string)[] = [1, "two", 2, "sad", 33, 33];

// console.log(mixed);

// type User = {
//   name: string;
//   age: number;
// };

// let users: User[] = [
//   { name: "Rama", age: 30 },
//   { name: "Hare", age: 30 },
//   { name: "Krisna", age: 30 },
// ];

// console.log(users);

// let arrAny: any[];

// arrAny = [123, "rama", { name: "Rama" }, [1, 0, 8]];

// console.log(arrAny);

// let tupleType: [string, boolean];
// tupleType = ["hello", true]; // OK
// tupleType = [true, "hello"]; // Error. Неправильні типи
// tupleType = ["hello", true, true]; // Error. Більше значень ніж у tuple
//
// console.log(tupleType);

// let fixed: [string, number];

// fixed = ["Text", 10];

// fixed.push("Add this text");

// console.log(fixed);

// let tuple: [string, ...number[]];

// tuple = ["hello", 42, 100, 200, 108, "Lion", true]; // OK

// console.log(tuple);

// enum Role {
//   ADMIN,
//   USER,
// }

// const person = {
//   role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
//   console.log("Role: ", Role.ADMIN);
// }

// console.log(Role[Role.ADMIN]);

// enum UserStatus {
//   Active = "ACTIVE",
//   Inactive = "INACTIVE",
//   Banned = "BANNED",
// }
// // let status: UserStatus = UserStatus.Active;
// let status: UserStatus = UserStatus.Banned;

// console.log(status);

// enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// function respond(status: HttpCodes) {
//   // handle response
// }

// respond(HttpCodes.OK);

// console.log(HttpCodes.BadRequest);
// console.log(HttpCodes);

// const enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// const status = HttpCodes.OK;

// console.log(status);

// const enum Test {
//   A = 1,
//   B = 2,
// }

// for (let item in Test) {
//   console.log(item);
// }

// let mixedType: string | number | boolean;

// mixedType = "string"; // OK
// mixedType = 10; // OK
// mixedType = true; // OK
// mixedType = {}; // Error: Type '{}' is not assignable to type 'string | number | boolean'.

// console.log(mixedType);

// function combine(param1: number | string, param2: number | string) {
//   return param1 + param2;
// }

// console.log(combine("1", "2"));
// console.log(combine(11, 21));

// function combine(param1: number | string, param2: number | string) {
//   if (typeof param1 === "number" && typeof param2 === "number") {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }

// console.log(combine(1, "2"));
// console.log(combine(11, 21));

// export {};

// type Dog = {
//   legs: 4;
//   bark: () => void;
// };

// type Fish = {
//   fins: 2;
//   swim: () => void;
// };

// let pet: Dog | Fish;
// bark: () => console.log("Гав!");
// // type guard function
// function isDog(pet: Dog | Fish): pet is Dog {
//   return "bark" in pet;
// }

// // Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
// if (isDog(pet)) {
//   pet.bark(); // OK, тепер TypeScript знає, що pet - це Dog
//   console.log(pet.legs);
// } else {
//   pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
// }
// console.log(pet.fins);

type Dog = {
  legs: 4;
  bark: () => void;
};

type Fish = {
  fins: 2;
  swim: () => void;
};

let pet: Dog | Fish = {
  legs: 4,
  bark: () => console.log("Гав!"),
};

// type guard function
// function isDog(pet: Dog | Fish): pet is Dog {
//   return "bark" in pet;
// }

// if (isDog(pet)) {
//   pet.bark(); // Работает, pet — Dog
//   console.log(pet.legs); // Выводит 4
// } else {
//   pet.swim();
//   console.log(pet.fins);
// }

export {};
