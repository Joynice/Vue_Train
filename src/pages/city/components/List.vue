<template>
  <div class="list" ref="wrapper">
    <div>
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">
            {{this.city}}
          </div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
          <div class="button">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
      <div class="title border-topbottom">
        {{key}}
      </div>
      <div class="item-list">
        <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    // console.log(this.$refs.wrapper)  通过this.$refs.(绑定的元素:ref)获得元素
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city) 此方法调用dispatch调用actions中的方法
      // this.$store.commit('changeCity', city) 第二种写法可以直接使用commit调用mutations中的方法，减少actions流程。
      this.changeCity(city) // 第三种写法通过 mapMutations 将changCity方法映射到this中
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      // console.log(this.$refs[this.letter]) 改变的元素,这里是个数组，取出第0项即可
      // console.log(this.letter) 监听letter的改变
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc  // 为什么使用before
  .list
    overflow hidden
    top 1.58rem
    left 0
    right 0
    bottom 0
    position absolute
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float left
        width 33.3%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
