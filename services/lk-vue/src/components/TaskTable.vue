<template>
    <div>
      <h2>Task List</h2>
      <div class="filters">
        <label for="difficulty">Filter by difficulty:</label>
        <select id="difficulty" v-model="filters.difficulty" @change="applyFilter">
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
  
        <label for="category">Filter by category:</label>
        <select id="category" v-model="filters.category" @change="applyFilter">
          <option value="">All</option>
          <option value="arrays">Arrays</option>
          <option value="strings">Strings</option>
          <option value="trees">Trees</option>
          <!-- Add more categories as needed -->
        </select>
  
        <label for="popularity">Sort by popularity:</label>
        <input type="checkbox" id="popularity" v-model="filters.popularity" @change="applyFilter" />
      </div>
  
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Category</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in filteredTasks" :key="task.id">
            <td>{{ task.title }}</td>
            <td>{{ task.difficulty }}</td>
            <td>{{ task.category }}</td>
            <td>{{ task.popularity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed, PropType } from 'vue';
  
  interface Task {
    id: number;
    title: string;
    difficulty: string;
    category: string;
    popularity: number;
  }
  
  export default defineComponent({
    name: 'TaskTable',
    props: {
      tasks: {
        type: Array as PropType<Task[]>,
        required: true,
      },
    },
    setup(props) {
      const filters = ref({
        difficulty: '',
        category: '',
        popularity: false,
      });
  
      const filteredTasks = computed(() => {
        let result = props.tasks;
  
        if (filters.value.difficulty) {
          result = result.filter((task) => task.difficulty === filters.value.difficulty);
        }
  
        if (filters.value.category) {
          result = result.filter((task) => task.category === filters.value.category);
        }
  
        if (filters.value.popularity) {
          result = [...result].sort((a, b) => b.popularity - a.popularity);
        }
  
        return result;
      });
  
      const applyFilter = () => {
        // This function will trigger reactivity and update filteredTasks
      };
  
      return {
        filters,
        filteredTasks,
        applyFilter,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Add some basic styles for the table */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  thead {
    background-color: #f2f2f2;
  }
  th, td {
    padding: 8px 12px;
    border: 1px solid #ddd;
    text-align: left;
  }
  .filters {
    margin-bottom: 16px;
  }
  </style>
  