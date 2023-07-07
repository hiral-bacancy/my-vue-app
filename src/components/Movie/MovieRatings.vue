
<template>  
  <div class="grid-container">
    <div class="grid-item" v-for="rating in ratings">         
        <div class="list">{{ rating.userName}}</div>
        <a :href="`/movies/${movie.id}/movie-ratings/${rating.userId}`" class="btn btn-primary">See Rating</a>
    </div>
  </div>
</template>
    <script>
    import axios from 'axios';
    export default {
      name: "MovieRatings",
      data() {
        return {
          movie: null,
          ratings: null
        }
      },
      mounted() {
        axios.get(`http://localhost:3000/movies/${this.$route.params.id}`)
          .then(response => {
            this.movie = response.data
            this.ratings = this.movie.rating
          }).catch(error => {
            console.error(error);
          })
      },
    }
    </script>
    <style scoped>
    h1 {
      font-weight: 500;
      font-size: 2.6rem;
      top: -10px;
    }
    
    h3 {
      font-size: 1.2rem;
    }
    
   
  
    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      background-color: #2196F3;
      padding: 5px;
  }
  
  .grid-item {
      background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(0, 0, 0, 0.8);
      padding: 10px;
      font-size: 15px;
      text-align: center;
  }
    </style>
    