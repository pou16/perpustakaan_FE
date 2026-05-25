<template>
  <div class="modal-overlay">
    <div class="modal-box">
      <p>{{ pesan }}</p>
      <div class="modal-actions">
        <button class="btn-danger" @click="$emit('confirm')">Ya</button>
        <button class="btn-secondary" @click="$emit('cancel')">Tidak</button>
      </div>
    </div>
  </div>
</template>

<script>
export default { props: ['pesan'] }
</script>