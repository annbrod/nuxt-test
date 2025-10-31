<script setup lang="ts">
import {ELinkTypes} from "~/shared/types/constant/link";
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="empty">
    <h2 class="empty__title">
      {{ title }}
    </h2>
    <p>Перейдите в каталог</p>
    <UIButton :type="ELinkTypes.NUXTLINK" to="/catalog"> В каталог </UIButton>
  </div>
</template>

<style lang="scss" scoped>
.empty {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 0;
  }
}
</style>
