<template>
  <div class="login-container">
    <div class="login-box">
      <h1>LOGIN</h1>

      <input type="email" placeholder="Email">
      <input type="password" placeholder="Password">

      <p>Forgot Password?</p>

      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function login() {
  router.push('/dashboard')
}
</script>

<style>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f5f9;
}

.login-box {
  background: white;
  padding: 30px;
  width: 300px;
  border-radius: 10px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background: #2563eb;
  color: white;
  border: none;
}
</style>