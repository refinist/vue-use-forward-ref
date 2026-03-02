<script setup lang="ts">
import { useForwardRef } from '../../src';
import Child from './Child.vue';

const { forwardRef } = useForwardRef();
</script>

<template>
  <Child :ref="forwardRef" />
</template>
