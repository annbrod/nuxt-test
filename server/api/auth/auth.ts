import { Roles } from "~/shared/types/roles";

export default defineEventHandler(async (event) => {
    
  interface IAuthBody {
    login: string;
    password: string;
  }
 
  const {login, password}: IAuthBody = await readBody(event)

  const users: Record<string, string> = {
    admin: 'Admin1',
    user: 'User1',
  };


  if (!users[login]) {
    throw createError({
      status: 401,
      statusMessage: 'Bad Request',
      message: 'Такого логина не существует',
      data: { field: 'login' },
    })
  }

  if (users[login] !== password) {
    throw createError({
      status: 401,
      statusMessage: 'Bad Request',
      message: 'Неверный пароль',
      data: { field: 'password' },
    })
  }

  if (login === Roles.Admin) {
    return {
      role: 'admin',
      message: 'Авторизация успешна',
    };
  } else if (login === Roles.User) {
    return {
      role: 'user',
      message: 'Авторизация успешна',
    };
  }
})
  