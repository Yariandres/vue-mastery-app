<script setup lang="ts">
import { ref } from 'vue';
import ThreadList from '../ThreadList.vue';
import sourceData from '../../data.json';

const threads = ref(sourceData.threads);
const users = ref(sourceData.users);
const newPostText = ref();

function userById(userId: string) {
  return users.value.find((u) => u.id === userId);
}
</script>

<template>
  <h1>Welcome to forum</h1>
  <thread-list :threads="threads" :userById="userById" />
</template>
