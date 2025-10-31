<script lang="ts" setup>
import { Roles } from "~/shared/types/roles";
import HeaderAdmin from './ui/admin.vue'
import HeaderUser from './ui/user.vue'

const store = useStore(['auth'])

</script>

<template>
    <HeaderUser v-if="store.auth.role === Roles.User"/>
    <HeaderAdmin v-if="store.auth.role === Roles.Admin"/>
</template>

<style lang="scss"></style>
