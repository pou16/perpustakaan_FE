<template>
  <Sidebar />

  <div class="content">
    <div class="top">
      <h1>Manajemen Siswa</h1>
      <button>+ Tambah Siswa</button>
    </div>

    <input type="text" placeholder="Cari siswa..." />

    <table>
      <thead>
        <tr>
          <th>NIS</th>
          <th>Nama</th>
          <th>JK</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>91829</td>
          <td>Ole Romeny</td>
          <td>L</td>
          <td>XI PPLG 2</td>
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