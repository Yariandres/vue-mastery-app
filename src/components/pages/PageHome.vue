<script setup lang="ts">
import { ref } from 'vue';
import ThreadList from '../ThreadList.vue';
import sourceData from '../../data.json';

const threads = ref(sourceData.threads);
</script>

<template>
  <h1>Welcome to forum</h1>
  <thread-list :threads="threads" />
</template>
