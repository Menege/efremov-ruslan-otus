<template>
  <div>
    <TaskFilters @filter="handleFilter" />
    <TaskTable :tasks="filteredTasks" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TaskFilters from './TaskFilters.vue';
import TaskTable from './TaskTable.vue';

export default defineComponent({
  components: { TaskFilters, TaskTable },
  setup() {
    const tasks = ref([]); // Получение данных с API
    const filteredTasks = ref([]);

    const handleFilter = (filters: any) => {
      // Логика фильтрации задач
    };

    return {
      tasks,
      filteredTasks,
      handleFilter,
    };
  },
});
</script>
