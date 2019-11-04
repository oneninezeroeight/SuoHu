<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item,index) in news" :key="index">
      <div @click="click">
        <img :src="item.images" />
        <footer class="footer" style="margin-top:50px;height:70px">
          <div
            data-v-6d7c78dc
            class="legend-container"
            data-expand="0"
            style="height: 44px;margin-left:20px"
          >
            <div data-v-6d7c78dc class="legend" style="top: 0px;color:white;font-size:20px;">
              <h2 data-v-6d7c78dc class="legend-title">
                <span data-v-6d7c78dc class="count-wrapper" style="margin-right:10px">
                  <em data-v-6d7c78dc class="current-count" v-text="item._id"></em>
                  <span data-v-6d7c78dc>/</span>
                  <span data-v-6d7c78dc class="total-count" style="margin-left:13px">{{news.length}}</span>
                </span>
                <span
                  data-v-6d7c78dc
                  class="legend-title-text"
                  style="line-height:1.5;display:inline"
                ></span>
              </h2>
              <p
                data-v-6d7c78dc
                class="legend-content"
                v-text="item.innertext"
                style="color:white;font-size:16px;margin-top:175px;"
              ></p>
            </div>
          </div>
        </footer>
      </div>
    </swiper-slide>
  </swiper>
</template>




<script>
import "../../../node_modules/swiper/dist/css/swiper.css";
import axios from "axios";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import $ from "jquery";
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
        },
        loop: true
      }
    };
  },
  methods: {
    click() {
      $(".swiper-slide").click(function() {
        console.log($(this).index());
      });
    },
    getNews() {
      (async () => {
        let { news } = (await axios.get(
          "http://localhost:3000/DetailsImages"
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
  width: 100%;
  height: 100%;
}

.legend-content {
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

