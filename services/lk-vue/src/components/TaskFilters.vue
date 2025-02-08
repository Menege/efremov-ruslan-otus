<template>
  <div class="filters">
    <select v-model="difficulty" @change="updateFilters">
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['filter'],
  setup(props, { emit }) {
    const difficulty = ref('easy');

    const updateFilters = () => {
      emit('filter', { difficulty: difficulty.value });
    };

    return {
      difficulty,
      updateFilters,
    };
  },
});
</script>
