<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
	const response = await axios.get('http://localhost:3000/api/projects');
	projects.value = response.data;
  } catch (error) {
	console.error('Gagal ambil data proyek:', error);
  }
});
</script>
