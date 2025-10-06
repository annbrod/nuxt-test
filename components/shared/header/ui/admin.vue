<script lang="ts" setup>

const store = useStore(['auth'])

async function logout() {
    await store.auth.logout()
}
</script>

<template>
    <header class="header">
        
        <div class="container">
            <div class="header__inner">
                <UILogo/>
                <div class="header__buttons">
                    <UIButton v-if="store.auth.role" type="button" @click="logout">
                        Выйти
                    </UIButton>
                </div>
            </div>
        </div>

    </header>
</template>

<style lang="scss">
@import url('../style.scss');
</style>
