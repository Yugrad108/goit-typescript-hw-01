function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

// Функция customError с возвращаемым типом never обозначает, что она никогда не возвращает управление вызывающему коду
function customError(): never {
  // Тип never в TypeScript используется для таких функций, которые либо выбрасывают ошибку, либо входят в бесконечный цикл и никогда не возвращаются.
  throw new Error("Error"); // то есть функция всегда выбрасывает ошибку.
}
