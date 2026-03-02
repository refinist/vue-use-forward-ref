<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue';
import Child from './Child.vue';
import Demo1 from './Demo1.vue';
import Demo2 from './Demo2.vue';
import type { Demo2Instance } from './types';

const childRef = ref<InstanceType<typeof Child> | null>(null);
const demo1Ref = ref<InstanceType<typeof Child> | null>(null);
const demo2Ref = ref<Demo2Instance | null>(null);

// v3.5+
// https://cn.vuejs.org/api/composition-api-helpers.html#usetemplateref
const childRefv3_5 = useTemplateRef('childRef');
const demo1Refv3_5 = useTemplateRef<InstanceType<typeof Child>>('demo1Ref');
const demo2Refv3_5 = useTemplateRef<Demo2Instance>('demo2Ref');

onMounted(() => {
  console.log('childRef :>> ', childRef.value);
  console.log('demo1Ref :>> ', demo1Ref.value);
  console.log('demo2Ref :>> ', demo2Ref.value);

  console.log('childRefv3_5 :>> ', childRefv3_5.value);
  console.log('demo1Refv3_5 :>> ', demo1Refv3_5.value);
  console.log('demo2Refv3_5 :>> ', demo2Refv3_5.value);
});
</script>

<template>
  <h1>Child</h1>
  <Child ref="childRef" />

  <h1>Demo1</h1>
  <Demo1 ref="demo1Ref" />

  <h1>Demo2</h1>
  <Demo2 ref="demo2Ref" />
</template>
