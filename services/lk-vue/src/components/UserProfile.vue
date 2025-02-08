<template>
    <div>
      <h2>{{ user.name }}'s Profile</h2>
      <p>Completed Tasks: {{ user.completedTasks }}</p>
      <p>Ranking: {{ user.rank }}</p>
      <TaskList :tasks="user.completedTasks" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import TaskList from './TaskList.vue';
  
  export default defineComponent({
    components: { TaskList },
    setup() {
      const user: any = ref(null); // Получение данных с API
  
      return {
        user,
      };
    },
  });
  </script>
  