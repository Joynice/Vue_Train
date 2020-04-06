<template>
  <div>
    <div class="banner" @click="handleBannerClick" @close="handleCloseGallary">
      <img src="http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_600x330_1abc2773.jpg" alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">北京野生动物园(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe606;</span>
          39
          </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-if="showGallary" @close="handleCloseGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/2002/f6/f60df9dd1ce24076a3.img.jpg_r_800x800_00a5e516.jpg',
        'http://img1.qunarzz.com/sight/p0/2002/7b/7ba06b9a849d4e3da3.img.jpg_r_800x800_c73bcab7.jpg']
    }
  },
  methods: {
    handleBannerClick () { // 点击展示图片列表
      this.showGallary = true
    },
    handleCloseGallary () { // 子组件关闭图片列表
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    position relative
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)) // 渐变色从上到下
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding 0 .4rem
        line-height .32rem
        height .32rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
