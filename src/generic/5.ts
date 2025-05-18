export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Визначає тип окремо, потім використовує його
// — корисно,якщо тип треба повторювати, або для кращої читабельності та підтримки

type Description = Record<UserRole, string>;

const RoleDescription: Description = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

// або так
// Визначає тип одразу в місці використання (коротше, зрозуміло, коли тип один і проста структура)

// const RoleDescription: Record<UserRole, string> = {
//   [UserRole.admin]: "Admin User",
//   [UserRole.editor]: "Editor User",
//   [UserRole.guest]: "Guest User",
// };

// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку. Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.

// export enum UserRole {
//   admin = "admin",
//   editor = "editor",
//   guest = "guest",
// }

// // Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
//   admin: "Admin User",
//   editor: "Editor User",
//   guest: "Guest User",
// };
