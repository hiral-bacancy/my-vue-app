
<template>
    <div class="greetings">
      <h1 class="green">World of clock</h1>
      <div v-if="Clocks">
        <div>
          <h3>LocalTime</h3>
          <h2>{{ time }}</h2>
        </div>
        <div class="grid-container" v-for="item in calTime">
          <div>{{ item.name }}</div>
          <div>{{ item.timezones }}</div>
          <div @click="showDifference(item.timezones)">{{ item.time }}</div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import moment from 'moment-timezone';

  export default {
    name: "WorldOfClocks",
    
    data() {
      return {
        time: "00:00",
        Clocks: [
            {
                name: "UTC",
                timezones: "UTC",
                time: ''
            },
            {
                name:"US",
                timezones: "US/Mountain",
                time: ''
            },
            {
                name: "Israel",
                timezones: "Asia/Jerusalem",
                time: ''
            },
            {
                name: "EuropeBerlin",
                timezones: "Europe/Berlin",
                time: ''
            },
        ],
      }
    },
    computed: {
      
      calTime(){
        if (!this.time) return;
        return this.Clocks.map(clock => {
          return { ...clock, time: moment().tz(clock.timezones).format('YYYY-MM-DD HH:mm:ss') }
        })
      }

    },
    mounted(){
        setInterval(() => this.startTimer(), 1000);
    },
    methods: {
      startTimer(){ 
        this.time = new Date();
      },
      showDifference(cTime){
        let localTime = moment().tz("Asia/Kolkata").format('HH:mm:ss')
        let currentTime = moment().tz(cTime).format('HH:mm:ss');
        let diff = localTime.diff(currentTime);console.log(diff)
        alert(`your time difference is: ${{diff}}`)
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

  .grid-container {
    display: grid;
    grid-template-areas:
      'header header header header header header'
      'menu main main main right right'
      'menu footer footer footer footer footer';
    gap: 10px;
    background-color: #2196F3;
    padding: 10px;
  }
  
  .grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
    width: 250px;
  }
  </style>
  