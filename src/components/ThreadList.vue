<script setup lang="ts">
defineProps<{
  threads: any;
  userById: any;
}>();
</script>
<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link
              :to="{ name: 'ThreadShow', params: { id: thread.id } }"
              >{{ thread.title }}</router-link
            >
          </p>

          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a>
            {{ thread.publishedAt }}
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} Replies</p>

          <img class="avatar-medium" :src="userById(thread.userId).avatar" />

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>

            <p class="text-xsmall">{{ thread.publishedAt }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <button class="btn-click" disabled>
        <i class="fa fa-angle-left">L</i>
      </button>
      1 of 2
      <button class="btn-click" disabled>
        <i class="fa fa-angle-right">R</i>
      </button>
    </div>
  </div>
</template>
