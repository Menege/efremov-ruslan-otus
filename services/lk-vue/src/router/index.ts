import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TaskPage from '../views/TaskPage.vue';
import UserProfile from '../views/UserProfile.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/task/:id', component: TaskPage },
  { path: '/user/:id', component: UserProfile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
