
<template>
    <div>
      <Header @checkedView="onClickChild" @searchVal="searchData"></Header>
      <div v-if="viewType == 'List View'">
        <MovieList v-for="movie in movies" :name="movie.name" :description="movie.description" :image="movie.image" :id="movie.id"></MovieList>
      </div>
      <div v-if="viewType == 'Grid View'">
        <MovieGrid v-for="movie in movies" :name="movie.name" :description="movie.description" :image="movie.image"  :id="movie.id"></MovieGrid>
      </div>
      <div v-if="viewType == 'Thumbnail View'">
        <MovieThumbnail v-for="movie in movies" :name="movie.name" :description="movie.description" :image="movie.image" :id="movie.id"></MovieThumbnail>
      </div>
    </div>
  </template>
  <script>
  import Header from './Header.vue'
  import MovieList from './MovieList.vue'
  import MovieGrid from './MovieGrid.vue'
  import MovieThumbnail from './MovieThumbnail.vue'
  import MovieUI from './MovieUI.css'
  export default {
    name: "MovieHome",
    components: {
      Header,
      MovieList,
      MovieGrid,
      MovieThumbnail
    },
    data() {
      return {
        searchValue: '',
        movies: [
          {
            id: 1,
            name: "Gunjan saxena",  
            description: "abc",
            image: 'https://i.ibb.co/cvpntL1/hats.png'
          },{
            id: 2,
            name: "M.S. Dhoni",
            description: "abc",
            image: 'https://i.ibb.co/px2tCc3/jackets.png',
          },{
            id: 3,
            name: "Raazi",
            description: "abc",
            image: 'https://i.ibb.co/0jqHpnp/sneakers.png'
          },{
            id: 4,
            name: "Badrinath Ki dulhaniya",
            description: "abc",
            image: 'https://i.ibb.co/GCCdy8t/women.png',
          },{
            id: 5,
            name: "Chal man jeetva jaiye",
            description: "abc",
            image: 'https://i.ibb.co/R70vBrQ/men.png',
          }
        ],
        viewType: "List View",
      }
    },
    methods: {
      onClickChild(value){
        this.viewType = value;
      },
      searchData(value){
        console.log(value);
        this.searchValue = value;
      }
    },
    mounted() {
      console.log(this.$helper.sunOfTwo(1,2));
    },
    computed: {
      movies() {
        return this.movies.filter(movie => {
          return movie.name.toLowerCase().includes(this.searchValue.toLowerCase())
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
  
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
  
  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
  </style>
  