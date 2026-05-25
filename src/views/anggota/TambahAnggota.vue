<template>
  <div>
    <div class="page-header">
      <h2><span class="back-arrow" @click="$emit('navigate', 'anggota')">←</span> Tambah Anggota</h2>
    </div>
    <div class="form-container logic-grid">
      <div class="form-group">
        <label>Nomor Anggota</label>
        <input type="text" v-model="localForm.nomor">
      </div>
      <div class="form-group">
        <label>Nama Anggota</label>
        <input type="text" v-model="localForm.nama">
      </div>
      <div class="form-group">
        <label>Jenis Kelamin</label>
        <div class="radio-group">
          <label><input type="radio" v-model="localForm.jk" value="L"> Laki-laki</label>
          <label><input type="radio" v-model="localForm.jk" value="P"> Perempuan</label>
        </div>
      </div>
      <div class="form-group">
        <label>Kelas</label>
        <input type="text" v-model="localForm.kelas">
      </div>
      <div class="form-actions">
        <button class="btn-primary" @click="$emit('simpan', localForm)">Simpan</button>
        <button class="btn-secondary" @click="$emit('navigate', 'anggota')">Batal</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const localForm = ref({ nomor: '', nama: '', jk: 'L', kelas: '' });
    return { localForm };
  }
}
</script>