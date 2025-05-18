// Вариант 1: Создаёт новый объект, объединяя свойства objA и objB, исходные объекты не изменяются (иммутабельность)
// T, U — любые типы
function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// Вариант 2: Мутирует (изменяет) исходный объект objA, добавляя в него свойства из objB
// T extends object, U extends object — только объекты

// function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
//     return Object.assign(objA, objB);
// }

// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
// function merge(objA, objB) {
//   return Object.assign(objA, objB);
// }
