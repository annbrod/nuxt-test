<script setup lang="ts">
interface Props {
  label?: string;
  type: string;
  autocomplete: string;
  placeholder: string;
  required: boolean;
  name: string;
  modelValue: string;
}

withDefaults(defineProps<Partial<Props>>(), {
  type: "text",
  required: false,
  autocomplete: "off",
});

const emit = defineEmits(["update:modelValue"]);
const inputRef = ref<HTMLInputElement | null>(null);

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <div class="input">
    <label class="input__label">{{ label }}</label>
    <div class="input__field">
      <input
        ref="inputRef"
        :type="type"
        :name="name"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="onInput"
      />
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input {
  display: block;
  position: relative;

  &__label {
    display: block;
    margin-bottom: 4px;
  }

  &__field {
    border: 1px solid grey;
    border-radius: 4px;
    background: none;

    width: 100%;
    position: relative;

    input {
      padding: 8px 12px;
      width: 100%;
      border: none;
      background: none;
      border-radius: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
    }
  }

  &--error & {
    &__field {
      border-color: $color-error;
    }

    &__label {
      color: $color-error;
    }
  }

  &--password & {
    &__field {
      input {
        padding-right: 40px;
      }
    }
  }
}
</style>
