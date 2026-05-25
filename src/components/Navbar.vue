<template>
  <header class="navbar">
    <div class="search-bar">
      <input type="text" placeholder="Search....">
    </div>
    
    <div class="user-profile" style="margin-left: auto; display: flex; align-items: center; gap: 10px;">
      <div class="avatar" style="width: 35px; height: 35px; background: #ccc; border-radius: 50%;"></div>
      <span style="font-weight: 600; font-size: 14px;">Admin ▾</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>
/* Pengaturan tambahan jika diperlukan untuk area profile */
.user-profile {
  cursor: pointer;
}
</style>