<template>
  <div class="text-center">
    <h1>Welcome to new component !</h1>
    <div>
      <h3>LocalTime</h3>
      <h2>{{ current_time }}</h2>
    </div>
    <div v-for="time in clocks" @click="find_differance(time.time_zone)">
      <h3>{{ time.clock_name }}</h3>
      <h2>{{ time.time }}</h2>
    </div>
  </div>
</template>
<script>
import moment from "moment-timezone";

export default {
  name: "Home",
  data() {
    return {
      current_time: "00:00:00",
      times: [
        {
          clock_name: "UTC",
          time_zone: "UTC",
        },
        {
          clock_name: "US/Mountain",
          time_zone: "US/Mountain",
        },
        {
          clock_name: "Israel",
          time_zone: "Etc/GMT+3",
        },
        {
          clock_name: "Europe Berlin",
          time_zone: "Europe/Berlin",
        },
      ],
    };
  },
  computed: {
    clocks() {
      if (!this.current_time) return;
      return this.times.map((object) => {
        return { ...object, time: moment().tz(object.time_zone).format("HH:mm:ss") };
      });
    },
  },
  methods: {
    checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
    start_watch() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();

      m = this.checkTime(m);
      s = this.checkTime(s);

      this.current_time = h + ":" + m + ":" + s;
      setTimeout(() => {
        this.start_watch();
      }, 500);
    },
    find_differance(time_zone) {
      var now = moment.utc();
      // get the zone offsets for this time, in minutes
      var local_time = moment.tz.zone("Asia/Calcutta").utcOffset(now);
      var out_time = moment.tz.zone(time_zone).utcOffset(now);
      alert("Time differeance is " + (local_time - out_time) / 60);
    },
  },
  mounted() {
    this.start_watch();
    //console.log(moment().tz("UTC").format("HH:mm:ss"));
  },
};
</script>
<style scoped>
.text-center {
  text-align: center;
}
</style>