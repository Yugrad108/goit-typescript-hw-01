type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// Определяем тип TopType, который выбирает только свойства name и color из AllType
type TopType = Pick<AllType, "name" | "color">;

// Определяем тип BottomType, который выбирает только свойства position и weight из AllType
type BottomType = Pick<AllType, "position" | "weight">;

// Функция compare принимает два параметра: top и bottom
// top должен соответствовать типу TopType
// bottom должен соответствовать типу BottomType
// Функция возвращает объект типа AllType

function compare<T extends TopType, B extends BottomType>(
  top: T,
  bottom: B
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick та generics для вказівки, що поля цих параметрів належать AllType. Функція compare повинна повертати AllType.

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function compare(top, bottom): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }
