<template>
  <div>
    <div class="page-header">
      <h2>Sistem Pengembalian & Denda</h2>
    </div>
    <table class="data-table">
      <thead>
        <tr>
          <th>ID Transaksi</th>
          <th>Nama Anggota</th>
          <th>Judul Buku</th>
          <th>Jatuh Tempo</th>
          <th>Kalkulasi Denda</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in pinjamList" :key="index">
          <template v-if="p.status === 'Dipinjam'">
            <td>{{ p.id }}</td>
            <td>{{ p.namaAnggota }}</td>
            <td>{{ p.judulBuku }}</td>
            <td>{{ p.tglKembali }}</td>
            <td><span class="text-danger">Rp {{ p.denda }}</span></td>
            <td>
              <button class="btn-primary btn-sm" @click="$emit('kembalikan', index)">Proses Kembali</button>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default { props: ['pinjamList'] }
</script>

<style scoped>
.btn-sm { padding: 6px 15px; font-size: 12px; width: auto; }
.text-danger { color: #d9534f; font-weight: bold; }
</style>