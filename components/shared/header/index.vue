<script lang="ts" setup>
import HeaderAdmin from './ui/admin.vue'
import HeaderUser from './ui/user.vue'

const store = useStore(['auth'])

</script>

<template>
    <HeaderUser v-if="store.auth.role === 'user'"/>
    <HeaderAdmin v-if="store.auth.role === 'admin'"/>
</template>

<style lang="scss"></style>
