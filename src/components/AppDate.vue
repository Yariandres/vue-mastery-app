<script setup lang="ts">
import daysjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedDate from 'dayjs/plugin/localizedFormat';

daysjs.extend(relativeTime);
daysjs.extend(localizedDate);

const props = defineProps<{
  timestamp: number;
}>();

function diffForHummans() {
  return daysjs.unix(props.timestamp).fromNow();
}

function homanFriendlyDate() {
  return daysjs.unix(props.timestamp).format('MMMM DD, YYYY [at] hh:mm A');
}
</script>
<template>
  <span :title="homanFriendlyDate()" v-bind="$attrs">
    {{ diffForHummans() }}
  </span>
</template>
