<template>
    <div class="container">
      <h1>{{ user.name }}'s Profile</h1>
      <p>Tasks completed: {{ user.completedTasks.length }}</p>
      <p>Ranking: #{{ user.rank }}</p>
      <TaskList :tasks="user.completedTasks" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import TaskList from '../components/TaskList.vue';
  import { getUserProfile } from '../../src/api/users';
  import { useRoute } from 'vue-router';
  
  export default defineComponent({
    components: { TaskList },
    setup() {
      const route = useRoute();
      const user: any = ref(null);
  
      onMounted(async () => {
        const userId = route.params.id;
        user.value = await getUserProfile(userId as string);
      });
  
      return {
        user,
      };
    },
  });
  </script>
  