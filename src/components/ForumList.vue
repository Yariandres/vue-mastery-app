<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineProps<{
  forums: any;
}>();
</script>
<template>
  <div class="forum-list">
    <h2 class="list-title">
      <a href="#">Forum</a>
    </h2>

    <div class="forum-listing" v-for="forum in forums" :key="forum.id">
      <div class="forum-details">
        <router-link
          :to="{ name: 'Forum', params: { id: forum.id } }"
          class="text-xlarge"
          >{{ forum.name }}</router-link
        >
        <p>{{ forum.description }}</p>
      </div>
      <div class="threads-cout">
        <p>
          <span class="count">{{ forum.threads?.length }}</span
          >{{ forum.threads?.length > 1 ? 'Threads' : 'thread' }}
        </p>
      </div>
    </div>
  </div>
</template>
