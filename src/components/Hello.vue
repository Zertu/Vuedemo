<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="test" v-model="sentence" />
    <input value="分词" type='button' @click="fenci" />
  </div>
</template>

<script>
import ajax from '../Fetch'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      sentence: '也许事与愿违'
    }
  },
  methods: {
    fenci: async function (e) {
      const res = await ajax('http://139.224.232.97:3001/fenci', {
        method: 'POST',
        body: {
          sentence: this.sentence
        }
      })
      console.log(this.msg = res)
    }
  }
}
</script>

<style lang="scss" scoped>
h1{
  font-weight: normal;
}


a {
  color: #42b983;
}
</style>
