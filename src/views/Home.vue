<template>
  <div>
    <div class="page-header">
      <h2>Home Dashboard</h2>
    </div>
    <div class="dashboard-cards">
      <div class="card">
        <h3>Total Anggota</h3>
        <p class="card-value">{{ totalAnggota }}</p>
      </div>
      <div class="card">
        <h3>Total Koleksi Buku</h3>
        <p class="card-value">{{ totalBuku }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default { props: ['totalAnggota', 'totalBuku'] }
</script>