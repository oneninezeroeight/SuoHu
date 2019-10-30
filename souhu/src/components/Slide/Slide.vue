<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide>
      <div>
        <img
          src="//29e5534ea20a8.cdn.sohucs.com/q_70,c_lfill,w_698,h_349,g_faces/os/news/bdc6f8aeb1492c3d6ee61b7d0f8e62cb.jpeg"
        />
        <p>辽宁男篮出征揭幕战 球迷送行史蒂芬森霸气</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img
          src="//5b0988e595225.cdn.sohucs.com/q_70,c_lfill,w_698,h_349,g_faces/images/20191030/db7b782cf130462191485099ce266599.jpeg"
        />
        <p>北京首钢官方照 林书豪自信满满憧憬新赛季</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img
          src="//5b0988e595225.cdn.sohucs.com/q_70,c_lfill,w_698,h_349,g_faces/images/20191030/ecf6ac20585a424b8748a7239cd17c98.jpg"
        />
        <p>NBA-独行侠险胜掘金 波神约老师畅聊</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img
          src="//5b0988e595225.cdn.sohucs.com/q_70,c_lfill,w_698,h_349,g_faces/images/20191030/82b5e7ff690449f89d8f5e7f3b6a8303.jpeg"
        />
        <p>辽篮拉拉队写真 满屏大长腿哪个是你最爱？</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img
          src="//5b0988e595225.cdn.sohucs.com/q_70,c_lfill,w_698,h_349,g_faces/images/20191030/093326b7bdec4066b84fe4c6e2f2b2dd.jpg"
        />
        <p>辽宁男篮出征揭幕战 球迷送行史蒂芬森霸气</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>




<script>
import "../../../node_modules/swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
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
  computed: {},
  mounted() {},
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

