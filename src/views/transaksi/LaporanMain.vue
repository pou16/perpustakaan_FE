<template>
  <div>
    <div class="page-header">
      <h2>Laporan & Rekap Perpustakaan</h2>
    </div>
    
    <div class="dashboard-cards" style="margin-bottom: 30px;">
      <div class="card bg-info">
        <h3>Total Buku Terdaftar</h3>
        <p class="card-value">{{ totalBuku }}</p>
      </div>
      <div class="card bg-warning">
        <h3>Total Anggota Aktif</h3>
        <p class="card-value">{{ totalAnggota }}</p>
      </div>
      <div class="card bg-success">
        <h3>Buku Sedang Keluar</h3>
        <p class="card-value">{{ pinjamList.filter(p => p.status === 'Dipinjam').length }}</p>
      </div>
    </div>

    <h3>Histori Seluruh Aktivitas Sirkulasi</h3>
    <table class="data-table" style="margin-top: 15px;">
      <thead>
        <tr>
          <th>ID</th>
          <th>Peminjam</th>
          <th>Buku</th>
          <th>Status Akhir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="log in pinjamList" :key="log.id">
          <td>{{ log.id }}</td>
          <td>{{ log.namaAnggota }}</td>
          <td>{{ log.judulBuku }}</td>
          <td><strong>{{ log.status }}</strong></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default { props: ['pinjamList', 'totalBuku', 'totalAnggota'] }
</script>