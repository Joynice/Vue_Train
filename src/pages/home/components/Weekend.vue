<template>
    <div>
      <div class="title">周末去哪玩</div>
      <ul>
        <li class="item border-bottom" v-for="item of HomeWeekendList" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" alt="item.title">
          </div>
          <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <!-- <button class="item-button">查看详情</button> -->
        </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      HomeWeekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
        title: '北京是个赏花的好地方',
        desc: '乱花渐欲迷人眼，京城赏花大搜索'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
        title: '京城溜娃必去',
        desc: '德智体美劳全面发展的亲子日，这些地方该去看看…'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '帝都必打卡',
        desc: '来北京必去的景点非这些地方莫属'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    margin-bottom .2rem
    .item-img-wrapper
      height :0
      overflow hidden
      padding-bottom: 37%
      .item-img
        width: 100%
    .item-info
      padding: .1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
