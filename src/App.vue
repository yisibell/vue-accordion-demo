<template>
  <div>
    <ai-accordion @jump="jumpTo" :w="800" :gap="60"/>
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return {}
  },
  methods: {
    jumpTo(info){
      console.log(info)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
