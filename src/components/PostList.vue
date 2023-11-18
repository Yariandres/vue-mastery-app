<script lang="ts" setup>
import { ref } from 'vue';
import sourceData from '../data.json';
import daysjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
daysjs.extend(relativeTime);

defineProps<{
  posts: Array<any>;
}>();

const users = ref(sourceData.users);

function userById(userId: string) {
  return users.value.find((u) => u.id === userId);
}

function diffForHummans(timestamp: number) {
  return daysjs.unix(timestamp).fromNow();
}

function homanFriendlyDate(timestamp: number) {
  return daysjs.unix(timestamp).format('MMMM DD, YYYY [at] hh:mm A');
}
</script>

<template>
  <div class="post-list">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name">
          {{ userById(post.userId)?.name }}
        </a>

        <a href="#"
          ><img class="avatar-large" :src="userById(post.userId)?.avatar" />
        </a>

        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <p>{{ post.text }}</p>
      </div>

      <div
        class="post-date text-faded"
        :title="homanFriendlyDate(post.publishedAt)"
      >
        {{ diffForHummans(post.publishedAt) }}
      </div>
    </div>
  </div>
</template>
