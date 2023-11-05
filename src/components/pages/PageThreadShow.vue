<script setup lang="ts">
import { computed, ref } from 'vue';
import sourceData from '../../data.json';

const props = defineProps<{
  id: string;
}>();

const threads = ref(sourceData.threads);
const posts = ref(sourceData.posts);
const users = ref(sourceData.users);

const thread = computed(() => {
  return threads.value.find((thread: any) => thread.id === props.id);
});

function postById(postId: string) {
  return posts.value.find((p) => p.id === postId);
}

function userById(userId: string) {
  return users.value.find((u) => u.id === userId);
}
</script>

<template>
  <div v-if="thread" class="col-large push-top">
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
  </div>
  <div v-else>
    <div class="col-full text-center">
      <h1>This Thread does not exist</h1>
      <router-link :to="{ name: 'Home' }">
        &#8592; Back to some cool threads</router-link
      >
    </div>
  </div>
</template>
