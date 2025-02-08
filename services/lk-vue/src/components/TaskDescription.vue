<template>
    <div class="task-description">
      <h2>{{ task.title }}</h2>
      <p>{{ task.description }}</p>
  
      <div class="examples">
        <h3>Examples</h3>
        <div v-for="(example, index) in task.examples" :key="index">
          <p><strong>Input:</strong> {{ example.input }}</p>
          <p><strong>Output:</strong> {{ example.output }}</p>
        </div>
      </div>
  
      <!-- Simple code editor (you can replace it with a more complex one like Monaco Editor) -->
      <textarea v-model="code" placeholder="Write your solution here..."></textarea>
  
      <button @click="submitSolution">Submit Solution</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, PropType } from 'vue';
  
  interface Example {
    input: string;
    output: string;
  }
  
  interface Task {
    id: number;
    title: string;
    description: string;
    examples: Example[];
  }
  
  export default defineComponent({
    name: 'TaskDescription',
    props: {
      task: {
        type: Object as PropType<Task>,
        required: true,
      },
    },
    setup() {
      const code = ref('');
  
      const submitSolution = () => {
        // Handle solution submission (e.g., send it to the API for evaluation)
        console.log('Submitted code:', code.value);
      };
  
      return {
        code,
        submitSolution,
      };
    },
  });
  </script>
  
  <style scoped>
  .task-description {
    max-width: 800px;
    margin: 0 auto;
  }
  textarea {
    width: 100%;
    height: 200px;
    margin-top: 16px;
    padding: 8px;
    font-family: monospace;
  }
  </style>
  