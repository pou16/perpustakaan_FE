<template>
  <div>
    <div class="page-header">
      <h2>Manajemen Anggota</h2>
      <button class="btn-primary" @click="$emit('tambah')">+ Tambah Anggota</button>
    </div>
    <div class="search-filter">
      <input type="text" placeholder="Cari anggota...">
    </div>
    <table class="data-table">
      <thead>
        <tr>
          <th>No Anggota</th>
          <th>Nama Lengkap</th>
          <th>JK</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, index) in anggotaList" :key="index">
          <td>{{ a.nomor }}</td>
          <td>{{ a.nama }}</td>
          <td>{{ a.jk }}</td>
          <td>{{ a.kelas }}</td>
          <td>
            <span class="action-link" @click="$emit('edit', a)">Edit</span> | 
            <span class="action-link delete" @click="$emit('delete', index)">Delete</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default { props: ['anggotaList'] }
</script>