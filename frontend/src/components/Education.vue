<!-- src/components/Education.vue — bagian script saja yang berubah -->
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]); // ref() = data reaktif, awalnya array kosong

onMounted(async () => {
  // onMounted = dijalankan saat komponen pertama kali tampil
  try {
	const response = await axios.get('http://localhost:3000/api/education');
	educationHistory.value = response.data; // isi dengan data dari backend
  } catch (error) {
	console.error('Gagal ambil data pendidikan:', error);
  }
});
</script>

<!-- Bagian <template> tidak perlu diubah -->
