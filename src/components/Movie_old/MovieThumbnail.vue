
<template>
        <div class="image-wrapper">
          <div class="media">
            <div class="overlay"></div>
            <img :src="image">
            <div class="image-details">
              <p>{{ name }}</p>
              <p>{{ description }}</p>
            </div>
          </div>
        </div>
  </template>
  <script>
  export default {
    name: "MovieThumbnail",
    data() {
    },
    props: ['name','description', 'image'],
    methods: {
    },
  }
  </script>
  <style scoped>
  
  </style>
  