<template>
  <div>
    <div class="page-header">
      <h2>Manajemen Buku</h2>
      <button class="btn-primary" @click="$emit('navigate', 'tambah-buku')">+ Tambah Buku</button>
    </div>
    <div class="search-filter">
      <input type="text" placeholder="Cari buku...">
    </div>
    <table class="data-table">
      <thead>
        <tr>
          <th>Kode Buku</th>
          <th>Judul Buku</th>
          <th>Jumlah Stok</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(b, index) in bukuList" :key="index">
          <td>{{ b.kode }}</td>
          <td>{{ b.judul }}</td>
          <td>{{ b.stok }}</td>
          <td>
            <span class="action-link" @click="$emit('edit', b)">Edit</span> | 
            <span class="action-link delete" @click="$emit('delete', index)">Delete</span> | 
            <span class="action-link" @click="$emit('detail', b)">Detail</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default { props: ['bukuList'] }
</script>