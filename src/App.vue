<template>
  <div v-if="currentPage === 'login'" class="login-container">
    <Login @login-success="navigateTo('home')" />
  </div>

  <div v-else class="main-layout">
    <Sidebar :current-page="currentPage" @navigate="navigateTo" />

    <div class="content-container">
      <Navbar />

      <main class="content-body">
        <Home 
          v-if="currentPage === 'home'" 
          :total-anggota="anggotaList.length" 
          :total-buku="bukuList.length" 
        />

        <BukuMain 
          v-if="currentPage === 'buku'" 
          :buku-list="bukuList" 
          @navigate="navigateTo"
          @edit="editBuku"
          @delete="triggerDeleteBuku"
          @detail="detailBuku"
        />

        <TambahBuku 
          v-if="currentPage === 'tambah-buku'" 
          @navigate="navigateTo" 
          @simpan="simpanBuku" 
        />

        <EditBuku 
          v-if="currentPage === 'edit-buku'" 
          :form-data="formBuku"
          @navigate="navigateTo" 
          @update="updateBuku" 
        />

        <DetailBuku 
          v-if="currentPage === 'detail-buku'" 
          :buku="selectedBuku"
          @navigate="navigateTo" 
          @edit="editBuku(selectedBuku)"
        />

        <AnggotaMain 
          v-if="currentPage === 'anggota'" 
          :anggota-list="anggotaList"
          @navigate="navigateTo" 
          @tambah="navigateTo('tambah-anggota')"
        />

        <TambahAnggota 
          v-if="currentPage === 'tambah-anggota'" 
          @navigate="navigateTo" 
          @simpan="simpanAnggota"
        />
      </main>
    </div>
  </div>

  <DeleteModal 
    v-if="showDeleteModal" 
    pesan="Apakah Anda yakin ingin menghapus data Buku ini?"
    @confirm="deleteBuku" 
    @cancel="showDeleteModal = false" 
  />
</template>

<script>
import { ref } from 'vue';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import DeleteModal from './components/DeleteModal.vue';
import BukuMain from './views/buku/BukuMain.vue';
import TambahBuku from './views/buku/TambahBuku.vue';
import EditBuku from './views/buku/EditBuku.vue';
import DetailBuku from './views/buku/DetailBuku.vue';
import AnggotaMain from './views/anggota/AnggotaMain.vue';
import TambahAnggota from './views/anggota/TambahAnggota.vue';

export default {
  components: { Login, Home, Sidebar, Navbar, DeleteModal, BukuMain, TambahBuku, EditBuku, DetailBuku, AnggotaMain, TambahAnggota },
  setup() {
    const currentPage = ref('login');
    const showDeleteModal = ref(false);
    const deleteIndex = ref(null);

    const bukuList = ref([
      { kode: 'BK-001', judul: 'Pemrograman Web dengan Vue.js', stok: 12 },
      { kode: 'BK-002', judul: 'Dasar-Dasar Rekayasa Perangkat Lunak', stok: 8 }
    ]);

    const anggotaList = ref([
      { nomor: 'AG-91829', nama: 'Ole Romeny', jk: 'L', kelas: 'XI PPLG 2' }
    ]);

    const formBuku = ref({ kode: '', judul: '', stok: 0 });
    const selectedBuku = ref(null);
    let activeEditIndex = null;

    const navigateTo = (page) => { currentPage.value = page; };

    const simpanBuku = (newBuku) => {
      bukuList.value.push(newBuku);
      navigateTo('buku');
    };

    const editBuku = (buku) => {
      activeEditIndex = bukuList.value.findIndex(b => b.kode === buku.kode);
      formBuku.value = { ...buku };
      navigateTo('edit-buku');
    };

    const updateBuku = (updatedData) => {
      if (activeEditIndex !== null) {
        bukuList.value[activeEditIndex] = updatedData;
      }
      navigateTo('buku');
    };

    const triggerDeleteBuku = (index) => {
      deleteIndex.value = index;
      showDeleteModal.value = true;
    };

    const deleteBuku = () => {
      if (deleteIndex.value !== null) {
        bukuList.value.splice(deleteIndex.value, 1);
      }
      showDeleteModal.value = false;
      deleteIndex.value = null;
    };

    const detailBuku = (buku) => {
      selectedBuku.value = buku;
      navigateTo('detail-buku');
    };

    const simpanAnggota = (newAnggota) => {
      anggotaList.value.push(newAnggota);
      navigateTo('anggota');
    };

    return {
      currentPage, showDeleteModal, bukuList, anggotaList, formBuku, selectedBuku,
      navigateTo, simpanBuku, editBuku, updateBuku, triggerDeleteBuku, deleteBuku, detailBuku, simpanAnggota
    };
  }
};
</script>

<style>
/* Disesuaikan karena style.css ada di folder src/ mendampingi App.vue */
@import './style.css';
</style>