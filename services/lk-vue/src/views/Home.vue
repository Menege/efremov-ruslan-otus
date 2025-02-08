<template>
    <div class="container">
      <h1 class="text-center">Task List</h1>
      <TaskFilters @filter="handleFilter" />
      <TaskList :tasks="filteredTasks" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import TaskList from '../components/TaskList.vue';
  import TaskFilters from '../components/TaskFilters.vue';
  import { getTasks } from '../api/tasks';
  
  export default defineComponent({
    components: { TaskList, TaskFilters },
    setup() {
      const tasks: any = ref([]);  // Все задачи
      const filteredTasks = ref([]);  // Отфильтрованные задачи
  
      onMounted(async () => {
        tasks.value = await getTasks();
        filteredTasks.value = tasks.value;  // Изначально все задачи отображаются
      });
  
      const handleFilter = (filters: any) => {
        // Фильтрация задач по сложности и другим критериям
        filteredTasks.value = tasks.value.filter((task: { difficulty: any; }) => {
          return task.difficulty === filters.difficulty;
        });
      };
  
      return {
        tasks,
        filteredTasks,
        handleFilter,
      };
    },
  });
  </script>
  