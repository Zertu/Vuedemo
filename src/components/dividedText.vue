<template>
    <span v-bind:style="style">{{ word }}</span>
</template>

<script>
export default {
    name: "dividedText",
    props: ['word', 'weight'],
    data() {
        return {
            style: {
                'background-color': 'rgb(' + Math.floor(this.weight/20*255) + ',0,0)'
            }
        }
    }
}
</script>

<style lang="scss">
span {
    font-weight: bold;
    color: #f1f1f1;
}
</style>