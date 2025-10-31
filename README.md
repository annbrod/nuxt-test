# Учебный проект для отработки Vue/Nuxt, Pinia, TypeScript

# Пользователи:

— Админ

логин: admin
пароль: Admin1

— Пользователь

логин: user
пароль: User1

# Реализовано:

— Редирект с главной страницы неавторизованного пользователя на страницу авторизации
— Шапка есть только у авторизованных пользователей
— Авторизация пользователя/админа
— Разлогин
— Каталог с возможностью добавить в корзину/избранное
— У пользователя есть страница корзины/избранного
— Обновление корзины/избранного в шапке



# 🚀 Boilerplate

![Vue3](https://img.shields.io/badge/-Vue3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Nuxt](https://img.shields.io/badge/nuxt-00C58E?style=for-the-badge&logo=nuxtdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/-Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

<br />

## 📦 Начало работы

### Минимальная версия Node.js

- **Node.js**: v22 или выше

### Установка пакетов

Установите необходимые пакеты с помощью `npm` или `bun`:

```sh
//* --- npm ----------------------------------------------- *//
npm i --force
npm i -g eslint

//* --- bun ----------------------------------------------- *//
bun install
bun install -g eslint
```

### Запуск проекта

Запустите сервер разработки:

```sh
//* --- npm ----------------------------------------------- *//
npm run dev

//* --- bun ----------------------------------------------- *//
bun run dev
```

<br />

## 🧩 Структура проекта

### Shared

> Переиспользуемый функционал по всему проекту.

- **composables**: Vue composables
- **constants**: Глобальные константы
- **lib**: Разнообразные фичи и утилиты
- **store**: Глобальные сторы (`auth`, `global`). Остальные сторы хранятся на уровне компонента страницы.
- **types**: Типизация TypeScript

### Components

> UI компоненты.

- **modules**: Компоненты, специфичные для конкретной страницы (например, `modules/authorization`, `modules/catalog`)
- **shared**: Переиспользуемые компоненты (например, `shared/header`, `shared/footer`)
- **ui-kit**: Компоненты UI-kit

### Pages

> Страницы, которые используют `components/modules` и `components/shared`.

<br />

## 🎨 Работа с иконками

### Шаги для добавления и использования иконок

1. **Добавьте иконку**: Поместите SVG файл в директорию `/assets/svg/`.
2. **Используйте компонент иконки**: иконка будет являться компонентом, самон название всегда начинается с i-, например `<i-book />`.
3. **Опционально**: Для компонента иконки всегда используется класс nuxt-icon, вы можете добавить `class` и специализировать стили для своей иконки. Учитывайте что классы задаются для svg!

---

Не стесняйтесь вносить свой вклад и делать этот boilerplate еще лучше! 🌟
