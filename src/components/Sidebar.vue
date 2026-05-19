<template>
  <div class="sidebar">
    <h2>Perpustakaan</h2>

    <router-link to="/dashboard">Home</router-link>
    <router-link to="/kelas">Manajemen Kelas</router-link>
    <router-link to="/siswa">Manajemen Siswa</router-link>
  </div>
</template>

<style>
.sidebar {
  width: 220px;
  height: 100vh;
  background: #1e293b;
  color: white;
  padding: 20px;
  position: fixed;
}

.sidebar a {
  display: block;
  color: white;
  text-decoration: none;
  margin: 15px 0;
}
</style>