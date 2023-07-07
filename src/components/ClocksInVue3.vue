
<template>
    <div class="greetings">
      <h1 class="green">World of clock</h1>
      <div v-if="Clocks">
        <div class="grid-container" v-for="item in calTime">
          <div>{{ item.name }}</div>
          <div>{{ item.timezones }}</div>
          <div @click="showDifference(item.timezones)">{{ item.time }}</div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import moment from 'moment-timezone';
  import {ref, computed, onMounted} from 'vue';
  let time= ref('');
  const Clocks= [
            {
                name: "UTC",
                timezones: "UTC",
            },{
                name: "Local",
                timezones: "Asia/kolkata",
            },
            {
                name:"US",
                timezones: "US/Mountain",
            },
            {
                name: "Israel",
                timezones: "Asia/Jerusalem",
            },
            {
                name: "EuropeBerlin",
                timezones: "Europe/Berlin",
            },
        ];

    const calTime = computed(() => {
      if(!time.value) return;
        return Clocks.map(clock => {
            return { ...clock, time: moment().tz(clock.timezones).format('YYYY-MM-DD HH:mm:ss') }
        })
    })

    onMounted(() => { 
        setInterval(() => startTimer(), 1000);
    })

    const startTimer = function(){ console.log(2222);
        time.value = new Date();
    }
    const showDifference = function(cTime){
        let localTime = moment().tz("Asia/Kolkata").format('YYYY-MM-DD HH:mm:ss')
        let currentTime = moment().tz(cTime).format('YYYY-MM-DD HH:mm:ss');
        let diff = localTime.diff(currentTime);console.log(diff)
        alert(`your time difference is: ${{diff}}`)
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
  