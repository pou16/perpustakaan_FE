<template>
  <div>
    <div class="page-header">
      <h2><span class="back-arrow" @click="$emit('navigate', 'peminjaman')">←</span> Input Peminjaman</h2>
    </div>
    <div class="form-container">
      <div class="form-group">
        <label>Pilih Anggota Perpustakaan</label>
        <select v-model="localForm.nomorAnggota" class="form-select">
          <option value="" disabled>-- Pilih Anggota --</option>
          <option v-for="a in anggotaList" :key="a.nomor" :value="a.nomor">
            {{ a.nomor }} - {{ a.nama }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label>Pilih Buku yang Dipinjam</label>
        <select v-model="localForm.kodeBuku" class="form-select">
          <option value="" disabled>-- Pilih Buku --</option>
          <option v-for="b in bukuList" :key="b.kode" :value="b.kode" :disabled="b.stok <= 0">
            {{ b.kode }} - {{ b.judul }} (Stok: {{ b.stok }})
          </option>
        </select>
      </div>
      <div class="form-group">
        <label>Tanggal Pinjam</label>
        <input type="date" v-model="localForm.tglPinjam">
      </div>
      <div class="form-group">
        <label>Tanggal Jatuh Tempo Pengembalian</label>
        <input type="date" v-model="localForm.tglKembali">
      </div>
      <div class="form-actions">
        <button class="btn-primary" @click="$emit('simpan', localForm)">Konfirmasi Pinjam</button>
        <button class="btn-secondary" @click="$emit('navigate', 'peminjaman')">Batal</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props: ['bukuList', 'anggotaList'],
  setup() {
    const localForm = ref({ nomorAnggota: '', kodeBuku: '', tglPinjam: '', tglKembali: '' });
    return { localForm };
  }
}
</script>

<style scoped>
.form-select { width: 100%; padding: 12px 20px; border: 2px solid #ccc; border-radius: 50px; outline: none; font-size: 14px; background: white; }
</style>