<script setup lang="ts">
withDefaults(
  defineProps<{
    fooProp?: number;
    barProp?: number;
  }>(),
  {
    fooProp: 1,
    barProp: 2
  }
);

defineExpose({
  foo: 1,
  bar: 2
});
</script>

<template>
  <div>Child</div>
</template>
