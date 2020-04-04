<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icon :imgList="imgList"></home-icon>
        <home-recommend :RecommendList="RecommendList"></home-recommend>
        <home-weekend :HomeWeekendList="HomeWeekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      imgList: [],
      RecommendList: [],
      HomeWeekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.imgList = data.iconList
        this.RecommendList = data.recommendList
        this.HomeWeekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style></style>
