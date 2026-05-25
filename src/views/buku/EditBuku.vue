<template>
  <div>
    <div class="page-header">
      <h2><span class="back-arrow" @click="$emit('navigate', 'buku')">←</span> Edit Buku</h2>
    </div>
    <div class="form-container">
      <div class="form-group">
        <label>Kode Buku</label>
        <input type="text" v-model="localForm.kode" disabled>
      </div>
      <div class="form-group">
        <label>Judul Buku</label>
        <input type="text" v-model="localForm.judul">
      </div>
      <div class="form-group">
        <label>Jumlah Stok</label>
        <input type="number" v-model="localForm.stok">
      </div>
      <div class="form-actions">
        <button class="btn-primary" @click="$emit('update', localForm)">Update</button>
        <button class="btn-secondary" @click="$emit('navigate', 'buku')">Batal</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props: ['formData'],
  setup(props) {
    const localForm = ref({ ...props.formData });
    return { localForm };
  }
}
</script>