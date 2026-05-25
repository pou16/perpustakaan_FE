<template>
  <aside class="sidebar">
    <div class="logo">Perpus Apk</div>
    <nav>
      <button :class="{ active: currentPage === 'home' }" @click="$emit('navigate', 'home')">Home</button>
      <button :class="{ active: ['buku', 'tambah-buku', 'edit-buku', 'detail-buku'].includes(currentPage) }" @click="$emit('navigate', 'buku')">Manajemen Buku</button>
      <button :class="{ active: ['anggota', 'tambah-anggota'].includes(currentPage) }" @click="$emit('navigate', 'anggota')">Manajemen Anggota</button>
    </nav>
  </aside>
</template>

<script>
export default { props: ['currentPage'] }
</script>