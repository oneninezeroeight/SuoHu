<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item,index) in news" :key="index">
      <div>
        <a href="http://localhost:8080/detailsimages">
          <img :src="item.images" />
          <p v-text="item.innertext"></p>
        </a>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>




<script>
import "../../../node_modules/swiper/dist/css/swiper.css";
import axios from "axios";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      news: [],
      swiperOption: {
        pagination: ".swiper-pagination1",
        centeredSlides: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }, //自动播放
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          stopOnLastSlide: true
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true
        // }, //循环
        loop: true
      }
    };
  },
  methods: {
    getNews() {
      (async () => {
        let { news } = (await axios.get(
          "http://localhost:3000/ImagesNews"
        )).data;
        this.news = news;
      })();
    }
  },
  computed: {},
  mounted() {
    this.getNews();
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style scoped>
span {
  position: absolute;
}
img {
  width: 375px;
  height: 187px;
  /* position: absolute; */
}
p {
  position: absolute;
  z-index: 2;
  font-size: 18px;
  color: white;
  top: 160px;
  left: 10px;
  box-sizing: border-box;
  width: 100%;
  bottom: 0.373333rem;
  font-size: 0.48rem;
  font-weight: 500;
  padding: 0 0.426667rem;
  line-height: 1.32em;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  display: box;
  word-break: break-all;
  -webkit-box-orient: vertical;
}
</style>

