
<template>
    <div class="greetings">
        <h1>
            JSON</h1>
        <pre id="json"></pre>
        <h1>
            CSV</h1>
        <pre id="csv"></pre>
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
        var items = [
                  { name: "Item 1", color: "Green", size: "X-Large" },
                  { name: "Item 2", color: "Green", size: "X-Large" },
                  { name: "Item 3", color: "Green", size: "X-Large" }];

            // Convert Object to JSON
            var jsonObject = JSON.stringify(items);

            // Display JSON
            $('#json').text(jsonObject);

            // Convert JSON to CSV & Display CSV
            let jsonCsv = $('#csv').text(ConvertToCSV(jsonObject)); console.log(jsonCsv);
        
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
  