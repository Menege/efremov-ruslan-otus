<template>
    <div class="comments-section">
      <h3>Comments</h3>
      
      <!-- Список комментариев -->
      <div v-if="comments.length > 0">
        <div v-for="(comment, index) in comments" :key="index" class="comment">
          <p><strong>{{ comment.author }}</strong></p>
          <p>{{ comment.text }}</p>
          <p class="date">{{ formatDate(comment.date) }}</p>
        </div>
      </div>
      <div v-else>
        <p>No comments yet. Be the first to comment!</p>
      </div>
  
      <!-- Добавление нового комментария -->
      <div class="add-comment">
        <textarea v-model="newComment" placeholder="Add your comment here..."></textarea>
        <button @click="submitComment">Submit</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  interface Comment {
    author: string;
    text: string;
    date: Date;
  }
  
  export default defineComponent({
    name: 'CommentsSection',
    setup() {
      const comments = ref<Comment[]>([
        {
          author: 'User1',
          text: 'Great task! I learned a lot.',
          date: new Date('2024-01-01'),
        },
        {
          author: 'User2',
          text: 'I had some issues with the input, but overall good.',
          date: new Date('2024-02-01'),
        },
      ]);
  
      const newComment = ref<string>('');
  
      const submitComment = () => {
        if (newComment.value.trim()) {
          comments.value.push({
            author: 'Current User',
            text: newComment.value,
            date: new Date(),
          });
          newComment.value = '';  // Сбрасываем поле ввода
        } else {
          alert('Please write a comment before submitting.');
        }
      };
  
      const formatDate = (date: Date) => {
        return date.toLocaleDateString();
      };
  
      return {
        comments,
        newComment,
        submitComment,
        formatDate,
      };
    },
  });
  </script>
  
  <style scoped>
  .comments-section {
    margin-top: 20px;
  }
  .comment {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .comment .date {
    font-size: 0.85em;
    color: #777;
  }
  textarea {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
  }
  button {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  