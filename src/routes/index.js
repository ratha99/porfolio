import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue';
//import Skill  from '@/components/Skill.vue'
import Resume from '@/pages/Resume.vue';
import Service from '@/pages/Service.vue';
import Contact from '@/pages/Contact.vue';
import NotFound from '@/pages/NotFound.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/resume', component: Resume },
  { path: '/service', component: Service },
  { path: '/contact', component: Contact },
  { path : '/:pathMatch(.*)*', component:NotFound}

] 

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router