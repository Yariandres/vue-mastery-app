<script setup lang="ts">
import { ref } from 'vue';
import ThreadList from './ThreadList.vue';
import sourceData from '../data.json';

const threads = ref(sourceData.threads);
const posts = ref(sourceData.posts);
const users = ref(sourceData.users);

function postById(postId: string) {
  return posts.value.find((p) => p.id === postId);
}

function userById(userId: string) {
  return users.value.find((u) => u.id === userId);
}
</script>

<template>
  <h1>Welcome to forum</h1>
  <thread-list />
  <!-- <div v-for="thread in threads" :key="thread.id" class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <div class="post" v-for="postId in thread.posts" :key="postId">
      <div class="user-info">
        <a href="#" class="user-name">
          {{ userById(postById(postId)?.userId)?.name }}
        </a>

        <a href="#" class="avatar-large"
          ><img :src="userById(postById(postId)?.userId)?.avatar" alt="" />
        </a>

        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <p>{{ postById(postId)?.text }}</p>
      </div>

      <div class="post-datae text-faded">
        {{ postById(postId)?.publishedAt }}
      </div>
    </div>
  </div> -->
</template>
