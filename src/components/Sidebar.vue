<template>
  <aside class="sidebar">
    <div class="logo">Perpustakaan</div>
    <nav>
      <button :class="{ active: currentPage === 'home' }" @click="$emit('navigate', 'home')">Home</button>
      <button :class="{ active: ['buku', 'tambah-buku', 'edit-buku', 'detail-buku'].includes(currentPage) }" @click="$emit('navigate', 'buku')">Manajemen Buku</button>
      <button :class="{ active: ['anggota', 'tambah-anggota'].includes(currentPage) }" @click="$emit('navigate', 'anggota')">Manajemen Anggota</button>
      
      <button :class="{ active: ['peminjaman', 'tambah-peminjaman'].includes(currentPage) }" @click="$emit('navigate', 'peminjaman')">Peminjaman</button>
      <button :class="{ active: currentPage === 'pengembalian' }" @click="$emit('navigate', 'pengembalian')">Pengembalian</button>
      <button :class="{ active: currentPage === 'laporan' }" @click="$emit('navigate', 'laporan')">Laporan</button>
      
      <button class="btn-logout-sidebar" @click="$emit('navigate', 'login')">Logout</button>
    </nav>
  </aside>
</template>

<script>
export default { props: ['currentPage'] }
</script>