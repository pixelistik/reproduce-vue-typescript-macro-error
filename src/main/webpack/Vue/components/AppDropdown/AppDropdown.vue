<template>
  <div>
    {{ selectedValue }}
  </div>
</template>

<script setup lang="ts">
type Option = {
  key: string;
  value: any;
};
const selectedValue = defineModel<Option>("selectedValue");
</script>
