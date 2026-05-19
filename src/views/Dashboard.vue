<template>
  <Sidebar />

  <div class="content">
    <h1>Dashboard</h1>

    <div class="card-container">
      <div class="card">
        <h2>Total Siswa</h2>
        <p>68</p>
      </div>

      <div class="card">
        <h2>Total Kelas</h2>
        <p>2</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>

<style>
.content {
  margin-left: 240px;
  padding: 20px;
}

.card-container {
  display: flex;
  gap: 20px;
}

.card {
  width: 200px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 5px #ccc;
}
</style>