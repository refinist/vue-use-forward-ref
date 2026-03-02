<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useForwardRef } from '../../src';
import Child from './Child.vue';
import type { Demo2Expose } from './types';

const demo2Foo = ref(0);
const demo2Bar = ref(0);
const { forwardRef } = useForwardRef<Demo2Expose>({
  demo2Foo,
  demo2Bar
});
</script>

<template>
  <Child :ref="forwardRef" />
</template>
