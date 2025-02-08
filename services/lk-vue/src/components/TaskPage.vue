<template>
  <div>
    <TaskDescription :task="task" />
    <CodeEditor @submitSolution="submitSolution" />
    <CommentsSection :taskId="task.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TaskDescription from '../components/TaskDescription.vue';
import CodeEditor from './CodeEditor.vue';
import CommentsSection from '../components/CommentsSection.vue';

export default defineComponent({
  components: { TaskDescription, CodeEditor, CommentsSection },
  setup() {
    const task:any = ref(null); // Получение данных с API по ID задачи

    const submitSolution = (solution: string) => {
      // Логика отправки решения
    };

    return {
      task,
      submitSolution,
    };
  },
});
</script>
