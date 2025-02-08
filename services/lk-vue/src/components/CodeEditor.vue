<template>
  <div>
    <textarea v-model="code" class="editor" />
    <button @click="submitCode">Submit</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['submitSolution'],
  setup(props, { emit }) {
    const code = ref('');

    const submitCode = () => {
      emit('submitSolution', code.value);
    };

    return {
      code,
      submitCode,
    };
  },
});
</script>

<style scoped>
.editor {
  width: 100%;
  height: 200px;
}
</style>
