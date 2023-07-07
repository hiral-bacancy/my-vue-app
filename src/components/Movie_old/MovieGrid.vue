
<template>
    <slot>
    <div class="grid-container">
        <img class="grid-item" :src="image">
        <div class="grid-item">name: {{ name }}</div>
        <div class="grid-item">description: {{ description }}</div>
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
  