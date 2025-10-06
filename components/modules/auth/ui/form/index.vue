<script setup lang="ts">
import * as yup from 'yup'

const isFormValid = ref<boolean>(false)
const serverError = ref<string | boolean>(false)

const formData = ref({
  login: '',
  password: ''
})
const store = useStore(['auth'])

const fieldErrors = ref({
  login: '',
  password: '',
})

const formSchema = yup.object({
  login: yup.string().required('Поле обязательно для заполнения'),
  password: yup.string()
    .matches(regEx.password, 'Пароль должен содержать минимум одну заглавную букву и минимум одну цифру')
    .required('Поле обязательно для заполнения'),
})


function clearErrors() {
  Object.keys(fieldErrors.value).forEach((key) => {
    fieldErrors.value[key as keyof typeof fieldErrors.value] = ''
  })
}

function onInput() {
  clearErrors()
}

async function validateForm() {
  clearErrors()
  try {
    await formSchema.validate(formData.value, { abortEarly: false })
    isFormValid.value = true
  }
  catch (error: any) {

    isFormValid.value = false

    error.inner.forEach((err: { path: string; message: string }) => {
      fieldErrors.value[err.path as keyof typeof fieldErrors.value] = err.message
    })
  }
}

async function sendForm(payload: IAuthLoginP) {
  try {
    await store.auth.authUser(payload)
    navigateTo('/')
  }
  catch (error: any) {
    if (error.data.data.field) {
      fieldErrors.value[error.data.data.field as keyof typeof fieldErrors.value] = error.data.message
    }
    serverError.value = error.data.message
  }
}

async function handleSubmit() {
  await validateForm();
  if (isFormValid.value === true) {
    await sendForm(formData.value)
  }
}

</script>

<template>
  <UIForm id="auth-form">
    <UIInput name="login" label="Логин" type="text" v-model="formData.login"
      :class="fieldErrors.login && 'input--error'" @input="onInput" />
    <p class="error-text" v-if="fieldErrors.login && !serverError">{{ fieldErrors.login }}</p>
    <UIInputPassword name="login" label="Пароль" v-model="formData.password"
      :class="fieldErrors.password && 'input--error'" @input="onInput" />
    <p class="error-text" v-if="fieldErrors.password && !serverError">{{ fieldErrors.password }}</p>
    <UIButton type="button" @click="handleSubmit">
      Отправить
    </UIButton>
    <p class="error-text" v-if="serverError">{{ serverError }}</p>
  </UIForm>
</template>

<style lang="scss" scoped></style>
