<script setup lang="ts">
interface Props {
    id: string
}

defineProps<Props>()
</script>

<template>
    <form class="form" :id="id">
        <slot></slot>
    </form>
</template>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
}
</style>
