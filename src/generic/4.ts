// 1-variant

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// Partial<User> -  усі поля типу User стають необов’язковими.
// Можна передавати будь-яку частину об’єкта User без помилок типізації.
// Якщо вам не потрібно зберігати конкретний тип полів, які передаються.

// function createOrUpdateUser(initialValues: Partial<User>) {
// Оновлення користувача
// }

// createOrUpdateUser({
//   email: "user@mail.com",
//   password: "password123",
// });

// 2-variant

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

// Використання generic T extends Partial < User > дозволяє функції
// приймати будь - який підтип(частковий або повний) цього типу,
// зберігаючи інформацію про конкретний склад полів(корисно для подальшої типізації).

function createOrUpdateUser<T extends Partial<User>>(initialValues: T) {
  // Оновлення користувача з partial-даними
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

// Ви маєте форму реєстрації користувачів. Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, залишивши ім'я та прізвище без змін.

// Використовуючи утиліту Partial та generics, виправте тип параметра функції так, щоб уникнути помилок типізації.

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// function createOrUpdateUser(initialValues: User) {
//   // Оновлення користувача
// }

// createOrUpdateUser({
//   email: "user@mail.com",
//   password: "password123",
// });
