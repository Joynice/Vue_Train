<template>
  <ul class="list">
    <li class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false
    }
  },
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters // ['A', 'B', 'C', ....]
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.outerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop // startY是A元素距离头部顶端的高度
        const touchY = e.touches[0].clientY - 79 // 这里的79是距离头部底端的高度，touchY就是手指距离头部底端的高度
        const index = Math.floor((touchY - startY) / 20) // 这样就可以获得当前滑动字母的下标
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index]) // 给父组件传值,this.letters[index]就是对应的字母
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    display flex
    flex-direction column
    justify-content center
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
