// Определяет форму (структуру) объекта: какие свойства, какие типы у этих свойств.
// Если объект не соответствует интерфейсу (например, пропущено поле, или типы не совпадают) — TypeScript выдаст ошибку.

interface User {
  name: string;
  age: number;
  email: string;
  address?: {
    // ? - поле address опционально (может отсутствовать)
    city?: string; //? - поле city внутри address теперь опционально (может отсутствовать)
    country?: string; //? -  поле country внутри address тоже опционально (может отсутствовать)
  };
}

const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

console.log(mango);
console.log(poly);
