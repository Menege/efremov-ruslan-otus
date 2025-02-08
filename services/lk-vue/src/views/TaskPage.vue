<template>
    <div class="container">
      <TaskDescription :task="task" />
      <CodeEditor @submitSolution="submitSolution" />
      <CommentsSection :taskId="task.id" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import TaskDescription from '../components/TaskDescription.vue';
  import CodeEditor from '../components/CodeEditor.vue';
  import CommentsSection from '../components/CommentsSection.vue';
  import { getTaskById } from '../api/tasks';
  import { useRoute } from 'vue-router';
  
  export default defineComponent({
    components: { TaskDescription, CodeEditor, CommentsSection },
    setup() {
      const route = useRoute();  // Получаем параметр id из URL
      const task: any = ref(null);
  
      onMounted(async () => {
        const taskId = route.params.id;
        task.value = await getTaskById(taskId as string);
      });
  
      const submitSolution = (solution: string) => {
        // Логика отправки решения на сервер
      };
  
      return {
        task,
        submitSolution,
      };
    },
  });
  </script>
  