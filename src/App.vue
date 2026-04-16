<script setup>

import LoginForm from './components/LoginForm.vue'


const handleLogin = (payload) => {
  console.log('✅ Datos recibidos del formulario:', payload)
  alert('Login enviado con éxito. Revisa la consola (F12).')
}
</script>

<template>
  <div class="app-container">
    <h1 class="main-title">Formulario Ingreso de Sesión y Pruebas Unitarias</h1>
    
  
    <LoginForm @submit="handleLogin" />
    

    <p class="hint">Presiona F12 para ver el evento en la consola</p>
  </div>
</template>

<style scoped>
.app-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  box-sizing: border-box;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.5px;
  line-height: 1.2;
  animation: fadeInDown 0.6s ease-out;
}

.hint {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin-top: 30px;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 20px;
  display: inline-block;
  backdrop-filter: blur(10px);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@media (max-width: 768px) {
  .main-title {
    font-size: 1.8rem;
  }
}
</style>