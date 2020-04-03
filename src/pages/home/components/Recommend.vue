<template>
    <div>
      <div class="title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of RecommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl" alt="item.title">
          <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      RecommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
        title: '北京野生动物园',
        desc: '北京野生动物园集动物保护、野生动物驯养繁殖及科普教育为一体，汇集了世界各地珍稀野生动物200多种10000余头。'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
        title: '北京动物园',
        desc: '北北京动物园始建于清光绪三十二年（1906年），是中国开放最早、饲养展出动物种类最多的动物园。。'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
        title: '北京野生动物园',
        desc: '北京野生动物园集动物保护、野生动物驯养繁殖及科普教育为一体，汇集了世界各地珍稀野生动物200多种10000余头。'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
        title: '北京动物园',
        desc: '北北京动物园始建于清光绪三十二年（1906年），是中国开放最早、饲养展出动物种类最多的动物园。。'
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
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
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
