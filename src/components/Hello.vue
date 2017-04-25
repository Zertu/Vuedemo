<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="test" v-model="sentence" />
    <input value="嗷嗷嗷" type='button' @click="a" />
  </div>
</template>

<script>
import ajax from '../Fetch'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      sentence: '沉默却压抑着燃烧的我们'
    }
  },
  methods: {
    a: async function (e) {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
