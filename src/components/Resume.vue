
<template>
    <div class="raw">
    <div class="greetings">
      <h1 class="green">Enter your detail here..</h1>
      <label for="name">Name</label>
      <input type="text" v-model="name"><br>
      <label for="email">Email</label>
      <input type="text" v-model="email"><br>
      <label for="dob">DOB</label>
      <input type="text" v-model="dob"><br>
      <label for="mobile">Mobile no</label>
      <input type="text" v-model="mobile"><br>
      <label for="education">Education</label>
      <input type="text" v-model="education"><br>
      <label for="experience">Experience</label>
      <input type="text" v-model="experience"><br>
      <label for="tech">Technology</label>
      <input type="text" v-model="tech"><br>
      <label for="name">Name</label>
      <label for="name">Name</label>
      <label for="name">Name</label>
      <!-- <h3>{{ this.currentTime }}</h3> -->
    </div>

    <div class="greetings">
        <h1 class="green">My Resume</h1>
        <label for="name">Name: {{ name }}</label><br>
        <label for="email">Email: {{ email }}</label><br>
        <label for="dob">DOB: {{ dob }}</label><br>
        <label for="mobile">Mobile: {{ mobile }}</label><br>
        <label for="education">Education: {{ education }}</label><br>
        <label for="tech">Experience: {{ experience }}</label><br>
        <label for="name">Technology: {{ tech }}</label>
        <!-- <h3>{{ this.currentTime }}</h3> -->
      </div>
      </div>
  </template>
  <script>
  export default {
    name: "FirstApp",
    
    data() {
      return {
        name: "Hiral",
        email: "a@b.com",
        dob: "28/01/2008",
        mobile: "58974698",
        education: "B.E.",
        experience: "3",
        tech: "vue",
      }
    },
    mounted(){
        setInterval(() => this.startTimer(), 1000)
    },
    methods: {
      startTimer(){ 
          this.currentTime = new Date();
          this.currentTime = this.currentTime.getHours()+":"+this.currentTime.getMinutes()+":"+this.currentTime.getSeconds();
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
  