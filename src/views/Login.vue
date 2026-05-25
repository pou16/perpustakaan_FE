<template>
  <div class="login-box">
    <h2>LOGIN PERPUS</h2>
    <div class="input-group">
      <label>Email</label>
      <input type="email" placeholder="@.......">
    </div>
    <div class="input-group">
      <label>Password</label>
      <div class="password-wrapper">
        <input :type="showPassword ? 'text' : 'password'" placeholder="**">
        <span class="eye-icon" @click="showPassword = !showPassword">👁️</span>
      </div>
    </div>
    <div class="forgot-password">Forgot Password?</div>
    <button class="btn-login" @click="$emit('login-success')">Login</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const showPassword = ref(false);
    return { showPassword };
  }
}
</script>