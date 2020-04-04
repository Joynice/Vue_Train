<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    城市选择</div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  height: .86rem
  line-height: .86rem
  overflow: hidden
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .32rem
  .header-back
    position: absolute
    left: .1rem
    font-size: .4rem
    color: #fff
</style>
