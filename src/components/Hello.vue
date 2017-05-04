<template>
  <div class="hello">
    <h1 v-if="shouldRender === false">{{ sentence }}</h1>
    <div class="dividedText" v-for="r in result" v-else-if="shouldRender === true">
      <dividedText v-bind:word="r.word" v-bind:weight="r.weight"></dividedText>
    </div>
    <input type="test" v-model="sentence" />
    <input value="分词" type='button' @click="fenci" /></div>
</template>

<script>
import ajax from '../Fetch'
import dividedText from './dividedText'
export default {
  name: 'hello',
  data() {
    return {
      sentence: '也许事与愿违',
      shouldRender: false,
      result:''
    }
  },
  components: {
    dividedText: dividedText
  },
  methods: {
    fenci: async function (e) {
      const res = await ajax('http://139.224.232.97:3001/fenci', {
        method: 'POST',
        body: {
          sentence: this.sentence
        }
      })
      this.shouldRender = true
      this.result = res
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: normal;
  color: #42b983;
}
.dividedText{
  display: inline-flex;
}
</style>
