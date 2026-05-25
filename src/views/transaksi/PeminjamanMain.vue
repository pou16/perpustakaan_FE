<template>
  <div>
    <div class="page-header">
      <h2>Sirkulasi Peminjaman</h2>
      <button class="btn-primary" @click="$emit('navigate', 'tambah-peminjaman')">+ Input Pinjam Baru</button>
    </div>
    <table class="data-table">
      <thead>
        <tr>
          <th>ID Transaksi</th>
          <th>Nama Anggota</th>
          <th>Judul Buku</th>
          <th>Tgl Pinjam</th>
          <th>Jatuh Tempo</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in pinjamList" :key="index">
          <td>{{ p.id }}</td>
          <td>{{ p.namaAnggota }}</td>
          <td>{{ p.judulBuku }}</td>
          <td>{{ p.tglPinjam }}</td>
          <td>{{ p.tglKembali }}</td>
          <td>
            <span :class="p.status === 'Dipinjam' ? 'status-pinjam' : 'status-kembali'">
              {{ p.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default { props: ['pinjamList'] }
</script>

<style scoped>
.status-pinjam { background: #fff3cd; color: #856404; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; }
.status-kembali { background: #d4edda; color: #155724; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; }
</style>