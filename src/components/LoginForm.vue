<template>
  <form @submit.prevent="handleSubmit" class="login-form">
    <div class="form-group">
      <label for="email">Email:</label>
      <input
        id="email"
        v-model="email"
        type="email"
        data-testid="email"
        @input="validateEmail"
        :class="{ 'error': !isValidEmail && emailTouched }"
      />
      <span 
        v-if="!isValidEmail && emailTouched" 
        data-testid="error" 
        class="error-message"
        role="alert"
      >
        Email inválido. Debe contener @ y un dominio válido.
      </span>
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input
        id="password"
        v-model="password"
        type="password"
        data-testid="password"
      />
    </div>

    <button
      type="submit"
      data-testid="submit-button"
      :disabled="!canSubmit"
      class="submit-button"
    >
      Ingresar
    </button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const password = ref('')
const emailTouched = ref(false)

const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})

const canSubmit = computed(() => {
  return isValidEmail.value && password.value.trim() !== ''
})

const validateEmail = () => {
  emailTouched.value = true
}

const handleSubmit = () => {
  if (canSubmit.value) {
    const payload = {
      email: email.value.trim(),
      password: password.value
    }
    
   
    emit('submit', payload)
    
  
    password.value = ''
  }
}

const emit = defineEmits(['submit'])
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: Arial, sans-serif;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

input.error {
  border-color: #dc3545;
}

.error-message {
  color: #dc3545;
  font-size: 12px;
  margin-top: 5px;
  display: block;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.submit-button:not(:disabled):hover {
  background-color: #0056b3;
}
</style>