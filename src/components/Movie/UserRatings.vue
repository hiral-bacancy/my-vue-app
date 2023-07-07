
<template> 
      <div v-for="rating in ratings">  
        <div class="grid-container" v-if="rating.userId == selectedId">
          <div class="grid-item">
          <div >{{ rating.userId}}</div>       
          <div>{{ rating.userName}}</div>
          <div>{{ rating.userRate}}</div>
        </div>
        </div>
      </div>
  </template>
      <script>
      import axios from 'axios';
      export default {
        name: "UserRatings",
        data() {
          return {
            ratings: null,
            selectedId: null
          }
        },
        mounted() {
          this.selectedId = this.$route.params.userId;
          this.fetchMovie()
        },
        methods:{ 
          async fetchMovie(){
            axios.get(`http://localhost:3000/movies/${this.$route.params.id}/`)
            .then(response => {
              this.ratings = response.data.rating
            })
          }
        }
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
      