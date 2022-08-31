<script>
export default {
  data() {
    return {
      curTime: ""
    }
  },
  methods: {
    getNow() {
        const today = new Date();
        const date = today.getFullYear() + '-'+ (today.getMonth() + 1 ) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date + ' ' + time;
        this.curTime = dateTime;
    }
  },
  mounted() {
    this.getNow();
  }
}
</script>


<template>
  <div class="center">
    Hello, this is the onboarding assignment!

    <br/>
    Current Time: {{curTime}}
  </div>
</template>

<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

