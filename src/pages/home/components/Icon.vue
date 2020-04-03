<template>
  <div class="icons">
      <swiper>
          <!--循环二组数组，看看里面有几个数组，以就有几页-->
          <swiper-slide v-for="(page, index) of pages" :key="index">
            <!--循环子数组，获得子数组中的数据-->
            <div class="icon" v-for="item of page" :key="item.id">
                <div class="icon-img">
                    <img class="icon-img-content" :src="item.imgUrl" alt="item.desc">
                </div>
                <p class="icon-img-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  data () {
    return {
      imgList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
        desc: '颐和园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/4c/eac47dd8def8de02.png',
        desc: '北京园博园'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '玉渊潭公园'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
        desc: '古北水镇'
      }, {
        id: '0007',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '香山公园'
      }, {
        id: '0008',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '凤凰岭'
      }, {
        id: '0008',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '踏青赏花'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '中国马镇'
      }, {
        id: '0010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc: '圆明园'
      }]
    }
  },
  computed: { // 计算属性， 计算每个页面显示8个小图标，多出的下页显示
    pages () {
      const pages = []
      this.imgList.forEach((item, index) => {
        const page = Math.floor(index / 8) // 通过下标获取页数
        if (!pages[page]) { // 先判断当前地某项是否为空，如果数组pages的不是空，创建一个二维数组，就是创建第几页
          pages[page] = []
        }
        pages[page].push(item) // 将数据添加到二位数组中
      })
      return pages // 最后返回的格式[[item0, item1...],[item8...],...]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';  // 在样式中引入变量，方便统一管理
@import '~styles/mixins.styl';  // 样式方法封装

.icons >>> .swiper-container //组件穿透，给子组件进行样式设置
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 50%
.icons
  margin-top: .1rem
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      padding: .1rem
      box-size: border-box
    .icon-img-content
      display: block
      height: 100%
      margin 0 auto
  .icon-img-desc
    right: 0
    left: 0
    bottom: 0.10rem
    line-height: .44rem
    height: .44rem
    text-align: center
    position: absolute
    color: $DarktextColor
    ellipsis() //样式封装
</style>
