// src/directives/animateOnScroll.js
const animatedScrollObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
  	if (entry.isIntersecting) {
        entry.target.classList.add('enter');
        observer.unobserve(entry.target);
  	}
	});
  }
);

export default {
  mounted(el) {
    el.classList.add('before-enter');
    //animatedScrollObserver.observe(el);
  }
}

// src/main.js — versi terbaru
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import animateOnScroll from './directives/animateOnScroll'; // tambahkan ini

const app = createApp(App);
app.directive('animate-on-scroll', animateOnScroll); // tambahkan ini
app.use(router);
app.mount('#app');
