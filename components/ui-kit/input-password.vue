<script setup lang="ts">

const isPasswordVisible = ref<boolean>(false)

function togglePassword() {
    isPasswordVisible.value = !isPasswordVisible.value
}

</script>

<template>
    <UIInput class="input--password" name="password" label="Пароль" :type="isPasswordVisible ? 'text' : 'password'">
    <UIButton class="button--input" @click="togglePassword">
        <i-eye v-if="isPasswordVisible" aria-label="Показать пароль" class="nuxt-icon--eye" />
        <i-closed-eye v-else aria-label="Скрыть пароль" class="nuxt-icon--eye" />
    </UIButton>
    </UIInput>
</template>

<style lang="scss" scoped></style>
