<script setup lang="ts">
import sourceData from '../data.json';
const { threads, posts, users } = sourceData;

function postById(postId: string) {
  return posts.find((p) => p.id === postId);
}

function userById(userId: string) {
  return users.find((u) => u.id === userId);
}
</script>

<template>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>

    <div v-for="postId in thread.posts" :key="postId">
      <p>
        {{ userById(postById(postId)?.userId).name }}
      </p>
      <p>{{ postById(postId).text }}</p>
    </div>
  </div>
</template>
