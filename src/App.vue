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
          :total-pinjam="pinjamList.filter(p => p.status === 'Dipinjam').length" 
        />

        <BukuMain v-if="currentPage === 'buku'" :buku-list="bukuList" @navigate="navigateTo" @edit="editBuku" @delete="triggerDeleteBuku" @detail="detailBuku" />
        <TambahBuku v-if="currentPage === 'tambah-buku'" @navigate="navigateTo" @simpan="simpanBuku" />
        <EditBuku v-if="currentPage === 'edit-buku'" :form-data="formBuku" @navigate="navigateTo" @update="updateBuku" />
        <DetailBuku v-if="currentPage === 'detail-buku'" :buku="selectedBuku" @navigate="navigateTo" @edit="editBuku(selectedBuku)" />

        <AnggotaMain 
          v-if="currentPage === 'anggota'" 
          :anggota-list="anggotaList" 
          @navigate="navigateTo" 
          @tambah="navigateTo('tambah-anggota')"
          @edit="editAnggota"
          @delete="triggerDeleteAnggota"
        />
        <TambahAnggota v-if="currentPage === 'tambah-anggota'" @navigate="navigateTo" @simpan="simpanAnggota" />
        <EditAnggota v-if="currentPage === 'edit-anggota'" :form-data="formAnggota" @navigate="navigateTo" @update="updateAnggota" />

        <PeminjamanMain v-if="currentPage === 'peminjaman'" :pinjam-list="pinjamList" @navigate="navigateTo" />
        <TambahPeminjaman v-if="currentPage === 'tambah-peminjaman'" :buku-list="bukuList" :anggota-list="anggotaList" @navigate="navigateTo" @simpan="simpanPeminjaman" />
        <PengembalianMain v-if="currentPage === 'pengembalian'" :pinjam-list="pinjamList" @kembalikan="prosesKembaliBuku" />
        <LaporanMain v-if="currentPage === 'laporan'" :pinjam-list="pinjamList" :total-buku="bukuList.length" :total-anggota="anggotaList.length" />
      </main>
    </div>
  </div>

  <DeleteModal 
    v-if="showDeleteModal" 
    :pesan="deleteTarget === 'buku' ? 'Apakah Anda yakin ingin menghapus data Buku ini?' : 'Apakah Anda yakin ingin menghapus data Anggota ini?'" 
    @confirm="executeDelete" 
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
import EditAnggota from './views/anggota/EditAnggota.vue';

import PeminjamanMain from './views/transaksi/PeminjamanMain.vue';
import TambahPeminjaman from './views/transaksi/TambahPeminjaman.vue';
import PengembalianMain from './views/transaksi/PengembalianMain.vue';
import LaporanMain from './views/transaksi/LaporanMain.vue';

export default {
  components: { 
    Login, Home, Sidebar, Navbar, DeleteModal, BukuMain, TambahBuku, EditBuku, DetailBuku, AnggotaMain, TambahAnggota, EditAnggota,
    PeminjamanMain, TambahPeminjaman, PengembalianMain, LaporanMain
  },
  setup() {
    const currentPage = ref('login');
    const showDeleteModal = ref(false);
    const deleteIndex = ref(null);
    const deleteTarget = ref(''); // Menentukan target hapus: 'buku' atau 'anggota'

    const bukuList = ref([
      { kode: 'BK-001', judul: 'Pemrograman Web dengan Vue.js', stok: 12 },
      { kode: 'BK-002', judul: 'Dasar-Dasar Rekayasa Perangkat Lunak', stok: 8 }
    ]);

    const anggotaList = ref([
      { nomor: 'AG-91829', nama: 'Ole Romeny', jk: 'L', kelas: 'XI PPLG 2' }
    ]);

    const pinjamList = ref([
      { id: 'TRX-001', nomorAnggota: 'AG-91829', namaAnggota: 'Ole Romeny', kodeBuku: 'BK-001', judulBuku: 'Pemrograman Web dengan Vue.js', tglPinjam: '2026-05-20', tglKembali: '2026-05-27', status: 'Dipinjam', denda: 0 }
    ]);

    const formBuku = ref({ kode: '', judul: '', stok: 0 });
    const formAnggota = ref({ nomor: '', nama: '', jk: 'L', kelas: '' });
    const selectedBuku = ref(null);
    
    let activeBukuIndex = null;
    let activeAnggotaIndex = null;

    const navigateTo = (page) => { currentPage.value = page; };

    // --- LOGIKA MANAJEMEN BUKU ---
    const simpanBuku = (newBuku) => { bukuList.value.push(newBuku); navigateTo('buku'); };
    const editBuku = (buku) => { activeBukuIndex = bukuList.value.findIndex(b => b.kode === buku.kode); formBuku.value = { ...buku }; navigateTo('edit-buku'); };
    const updateBuku = (updatedData) => { if (activeBukuIndex !== null) { bukuList.value[activeBukuIndex] = updatedData; } navigateTo('buku'); };
    const triggerDeleteBuku = (index) => { deleteIndex.value = index; deleteTarget.value = 'buku'; showDeleteModal.value = true; };
    const detailBuku = (buku) => { selectedBuku.value = buku; navigateTo('detail-buku'); };

    // --- LOGIKA MANAJEMEN ANGGOTA ---
    const simpanAnggota = (newAnggota) => { anggotaList.value.push(newAnggota); navigateTo('anggota'); };
    const editAnggota = (anggota) => { activeAnggotaIndex = anggotaList.value.findIndex(a => a.nomor === anggota.nomor); formFormAnggota(anggota); };
    const formFormAnggota = (anggota) => { formAnggota.value = { ...anggota }; navigateTo('edit-anggota'); };
    const updateAnggota = (updatedData) => { if (activeAnggotaIndex !== null) { anggotaList.value[activeAnggotaIndex] = updatedData; } navigateTo('anggota'); };
    const triggerDeleteAnggota = (index) => { deleteIndex.value = index; deleteTarget.value = 'anggota'; showDeleteModal.value = true; };

    // --- EKSEKUSI PENGHAPUSAN (MUTUAL) ---
    const executeDelete = () => {
      if (deleteIndex.value !== null) {
        if (deleteTarget.value === 'buku') {
          bukuList.value.splice(deleteIndex.value, 1);
        } else if (deleteTarget.value === 'anggota') {
          anggotaList.value.splice(deleteIndex.value, 1);
        }
      }
      showDeleteModal.value = false;
      deleteIndex.value = null;
    };

    // --- LOGIKA SIRKULASI ---
    const simpanPeminjaman = (newPinjam) => {
      const ang = anggotaList.value.find(a => a.nomor === newPinjam.nomorAnggota);
      const buk = bukuList.value.find(b => b.kode === newPinjam.kodeBuku);
      newPinjam.id = 'TRX-00' + (pinjamList.value.length + 1);
      newPinjam.namaAnggota = ang ? ang.nama : 'Unknown';
      newPinjam.judulBuku = buk ? buk.judul : 'Unknown';
      newPinjam.status = 'Dipinjam';
      newPinjam.denda = 0;
      if(buk && buk.stok > 0) buk.stok--;
      pinjamList.value.push(newPinjam);
      navigateTo('peminjaman');
    };

    const prosesKembaliBuku = (index) => {
      const transaksi = pinjamList.value[index];
      transaksi.status = 'Dikembalikan';
      const buk = bukuList.value.find(b => b.kode === transaksi.kodeBuku);
      if(buk) buk.stok++;
    };

    return {
      currentPage, showDeleteModal, deleteTarget, bukuList, anggotaList, pinjamList, formBuku, formAnggota, selectedBuku,
      navigateTo, simpanBuku, editBuku, updateBuku, triggerDeleteBuku, detailBuku, 
      simpanAnggota, editAnggota, updateAnggota, triggerDeleteAnggota, executeDelete, simpanPeminjaman, prosesKembaliBuku
    };
  }
};
</script>