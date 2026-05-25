<template>
  <div>
    <div class="page-header">
      <h2><span class="back-arrow" @click="$emit('navigate', 'buku')">←</span> Detail Buku</h2>
    </div>
    <table class="detail-table">
      <tr><th>Kode Buku</th><td>{{ buku.kode }}</td></tr>
      <tr><th>Judul Buku</th><td>{{ buku.judul }}</td></tr>
      <tr><th>Jumlah Stok</th><td>{{ buku.stok }} pcs</td></tr>
    </table>
    <div class="form-actions" style="margin-top: 20px;">
      <button class="btn-secondary" @click="$emit('navigate', 'buku')">Kembali</button>
      <button class="btn-primary" @click="$emit('edit')">Edit</button>
    </div>
  </div>
</template>

<script>
export default { props: ['buku'] }
</script>