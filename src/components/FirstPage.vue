
<template>
  <div class="greetings">
    <h1 class="green">My Timer</h1>
    <button @click="startTimer()">Start Timer</button>
    <h3>{{ this.currentTime }}</h3>
  </div>
</template>
<script>
export default {
  name: "FirstApp",
  
  data() {
    return {
      currentTime: null,
    }
  },
  methods: {
    startTimer(){      
      setInterval(() => {
        this.currentTime = new Date();
        this.currentTime = this.currentTime.getHours()+":"+this.currentTime.getMinutes()+":"+this.currentTime.getSeconds();
      }, 1000);
      
    }
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
