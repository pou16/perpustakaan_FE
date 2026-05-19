<template>
  <Sidebar />

  <div class="content">
    <div class="top">
      <h1>Manajemen Kelas</h1>
      <button>+ Tambah Kelas</button>
    </div>

    <input type="text" placeholder="Cari kelas..." />

    <table>
      <thead>
        <tr>
          <th>Kelas</th>
          <th>Wali Kelas</th>
          <th>Jumlah Siswa</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>XI PPLG 2</td>
          <td>Ibu Fera</td>
          <td>34</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
            <button>Detail</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>

<style>
.top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
}
</style>