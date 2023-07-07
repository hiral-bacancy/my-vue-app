
<template>
    <slot>
    <div class="list-parent">
        <img class="image-list" :src="image">
        <div class="list">{{ name}}</div>
        <div class="list">{{ description }}</div>
    </div>
</slot>
  </template>
  <script>
  export default {
    name: "MovieList",
    data() {
    },
    props: ['name', 'description', 'image'],
    methods: {
    },
  }
  </script>
  