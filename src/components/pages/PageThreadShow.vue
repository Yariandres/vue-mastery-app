<script setup lang="ts">
import { computed, ref } from 'vue';
import PostList from '../PostList.vue';
import sourceData from '../../data.json';

const props = defineProps<{
  id: string;
}>();

const threads = ref(sourceData.threads);
const posts = ref(sourceData.posts);
const newPostText = ref();

const thread = computed(() => {
  return threads.value.find((thread: any) => thread.id === props.id);
});

const threadPosts = computed(() => {
  return posts.value.filter((post: any) => post.threadId === props.id);
});
</script>

<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts" />

    <div class="col-full">
      <form>
        <div class="from-group">
          <textarea
            v-model="newPostText"
            @input="newPostText = ($event.target as HTMLTextAreaElement).value"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div class="form-action">
          <button type="button"></button>
        </div>
      </form>
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
