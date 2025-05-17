enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

// вар2
// const isWeekend = (day: DayOfWeek): boolean =>
//   day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;

// вар3
// const isWeekend = (day: DayOfWeek) =>
//   day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;

// enum DayOfWeek { - ошибку выдало
// проблема связана со строкой DayOfWeek. Когда erasableSyntaxOnly включен (tsconfig.json), вы не можете использовать тип enum напрямую в качестве аннотации типа. Вместо этого вам нужно использовать ключевое слово type для создания псевдонима типа для перечисления.

// Чтобы решить проблему, вы можете изменить строку на:

// type DayOfWeekType = DayOfWeek;
// const isWeekend = (day: DayOfWeekType): boolean => {

// Альтернативно, вы можете отключить опцию erasableSyntaxOnly в файле tsconfig.json или использовать компиляторную опцию --noErasableTypeSyntax.

// Примечание: опция erasableSyntaxOnly не часто используется в большинстве проектов TypeScript, поэтому вам может быть полезно пересмотреть конфигурацию вашего проекта, чтобы определить, необходима ли эта опция.
