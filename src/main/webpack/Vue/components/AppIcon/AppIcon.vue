<template>
  <svg :class="sizeClass" aria-hidden="true">
    <use :href="'/etc.clientlibs/brandhub/clientlibs/clientlib-site/resources/images/sprites' + path"></use>
  </svg>
</template>

<script setup lang="ts">
type IconProps = {
  sizeClass?: "wb-icon-m" | "wb-icon-s" | "wb-icon-l";
  path: `/icons__structure.svg#${string}` | `/icons__social-media.svg#${string}` | `/icons__common.svg#${string}`;
};

withDefaults(defineProps<IconProps>(), { sizeClass: "wb-icon-m" });
</script>
