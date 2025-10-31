<script setup lang="ts">
import {ELinkTypes} from "~/shared/types/constant/link";

const store = useStore(["auth"]);

async function logout() {
  await store.auth.logout();
}
</script>

<template>
  <div class="home">
    <div v-if="store.auth.role">
      <h1 class="home__text">
        Привет! Вы вошли как
        <b>{{
          store.auth.role === "admin"
            ? "Администратор"
            : store.auth.role === "user"
              ? "Пользователь"
              : ""
        }}</b>
      </h1>
    </div>
    <div v-if="!store.auth.role">
      <h1 class="home__text">Вы не авторизованы.</h1>
    </div>
    <div class="home__buttons">
      <UIButton v-if="store.auth.role" type="button" @click="logout">
        Выйти
      </UIButton>
      <UIButton v-if="!store.auth.role" :type="ELinkTypes.NUXTLINK" to="/auth">
        Войдите
      </UIButton>
      <UIButton :type="ELinkTypes.NUXTLINK" to="/catalog"> В каталог </UIButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  @include container();
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    justify-content: center;
  }

  &__text {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }
}
</style>
