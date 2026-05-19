<template>
  <div class="container">

    <!-- SIDEBAR -->
    <aside class="sidebar">
      <h2>Logo/Nama Apk</h2>

      <ul>
        <li @click="page='home'">Home</li>
        <li @click="page='kelas'">Manajemen Kelas</li>
        <li @click="page='siswa'">Manajemen Siswa</li>
      </ul>
    </aside>

    <!-- CONTENT -->
    <main class="content">

      <!-- SEARCH -->
      <div class="topbar">
        <input type="text" placeholder="Search....">
      </div>

      <!-- DASHBOARD -->
      <div v-if="page==='home'">

        <h1>Home</h1>

        <div class="cards">
          <div class="card">
            <h3>Total Siswa</h3>
            <p>68</p>
          </div>

          <div class="card">
            <h3>Total Kelas</h3>
            <p>2</p>
          </div>
        </div>

      </div>

      <!-- MANAJEMEN KELAS -->
      <div v-if="page==='kelas'">

        <div class="header">
          <h1>Manajemen Kelas</h1>

          <button @click="showKelasForm=!showKelasForm">
            + Tambah Kelas
          </button>
        </div>

        <!-- FORM TAMBAH -->
        <div class="form-box" v-if="showKelasForm">

          <input
            type="text"
            v-model="kelasBaru"
            placeholder="Kelas"
          >

          <input
            type="text"
            v-model="waliBaru"
            placeholder="Wali Kelas"
          >

          <input
            type="number"
            v-model="jumlahBaru"
            placeholder="Jumlah Siswa"
          >

          <div class="button-group">
            <button @click="tambahKelas">Simpan</button>
            <button @click="showKelasForm=false">Batal</button>
          </div>

        </div>

        <!-- TABLE -->
        <table>
          <thead>
            <tr>
              <th>Kelas</th>
              <th>Wali Kelas</th>
              <th>Jumlah Siswa</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(item,index) in kelas"
              :key="index"
            >
              <td>{{ item.nama }}</td>
              <td>{{ item.wali }}</td>
              <td>{{ item.jumlah }}</td>

              <td>
                <button>Edit</button>
                <button @click="hapusKelas(index)">
                  Delete
                </button>
                <button>Detail</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

      <!-- MANAJEMEN SISWA -->
      <div v-if="page==='siswa'">

        <div class="header">
          <h1>Manajemen Siswa</h1>

          <button @click="showSiswaForm=!showSiswaForm">
            + Tambah Siswa
          </button>
        </div>

        <!-- FORM -->
        <div class="form-box" v-if="showSiswaForm">

          <input
            type="text"
            v-model="nis"
            placeholder="NIS"
          >

          <input
            type="text"
            v-model="nama"
            placeholder="Nama Siswa"
          >

          <select v-model="jk">
            <option>Laki-laki</option>
            <option>Perempuan</option>
          </select>

          <input
            type="text"
            v-model="kelasSiswa"
            placeholder="Kelas"
          >

          <input
            type="text"
            v-model="alamat"
            placeholder="Alamat"
          >

          <input
            type="text"
            v-model="ttl"
            placeholder="TTL"
          >

          <div class="button-group">
            <button @click="tambahSiswa">
              Simpan
            </button>

            <button @click="showSiswaForm=false">
              Batal
            </button>
          </div>

        </div>

        <!-- TABLE -->
        <table>
          <thead>
            <tr>
              <th>NIS</th>
              <th>Nama Siswa</th>
              <th>JK</th>
              <th>Kelas</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(item,index) in siswa"
              :key="index"
            >
              <td>{{ item.nis }}</td>
              <td>{{ item.nama }}</td>
              <td>{{ item.jk }}</td>
              <td>{{ item.kelas }}</td>

              <td>
                <button>Edit</button>

                <button @click="hapusSiswa(index)">
                  Delete
                </button>

                <button>Detail</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const page = ref('home')

const showKelasForm = ref(false)
const showSiswaForm = ref(false)

const kelasBaru = ref('')
const waliBaru = ref('')
const jumlahBaru = ref('')

const nis = ref('')
const nama = ref('')
const jk = ref('Laki-laki')
const kelasSiswa = ref('')
const alamat = ref('')
const ttl = ref('')

const kelas = ref([
  {
    nama:'XI PPLG 2',
    wali:'Ibu Fera',
    jumlah:34
  },
  {
    nama:'XI PPLG 3',
    wali:'Ibu Nuha',
    jumlah:34
  }
])

const siswa = ref([
  {
    nis:'91829',
    nama:'Ole Romeny',
    jk:'L',
    kelas:'XI PPLG 2'
  }
])

function tambahKelas(){
  kelas.value.push({
    nama:kelasBaru.value,
    wali:waliBaru.value,
    jumlah:jumlahBaru.value
  })

  kelasBaru.value=''
  waliBaru.value=''
  jumlahBaru.value=''
}

function hapusKelas(index){
  kelas.value.splice(index,1)
}

function tambahSiswa(){
  siswa.value.push({
    nis:nis.value,
    nama:nama.value,
    jk:jk.value,
    kelas:kelasSiswa.value
  })

  nis.value=''
  nama.value=''
  kelasSiswa.value=''
  alamat.value=''
  ttl.value=''
}

function hapusSiswa(index){
  siswa.value.splice(index,1)
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial;
}

.container{
  display:flex;
  min-height:100vh;
}

.sidebar{
  width:250px;
  background:#1e293b;
  color:white;
  padding:20px;
}

.sidebar h2{
  margin-bottom:40px;
}

.sidebar ul{
  list-style:none;
}

.sidebar li{
  margin:20px 0;
  cursor:pointer;
}

.content{
  flex:1;
  background:#f1f5f9;
  padding:20px;
}

.topbar{
  margin-bottom:20px;
}

.topbar input{
  width:300px;
  padding:10px;
}

.cards{
  display:flex;
  gap:20px;
  margin-top:20px;
}

.card{
  width:200px;
  background:white;
  padding:20px;
  border-radius:10px;
}

.card p{
  font-size:30px;
  margin-top:10px;
}

.header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
}

.form-box{
  background:white;
  padding:20px;
  border-radius:10px;
  margin-bottom:20px;
}

.form-box input,
.form-box select{
  width:100%;
  padding:10px;
  margin-bottom:10px;
}

.button-group{
  display:flex;
  gap:10px;
}

button{
  padding:10px 15px;
  border:none;
  border-radius:5px;
  background:#2563eb;
  color:white;
  cursor:pointer;
}

table{
  width:100%;
  border-collapse:collapse;
  background:white;
}

table th,
table td{
  border:1px solid #ddd;
  padding:12px;
  text-align:center;
}

table th{
  background:#e2e8f0;
}
</style>