<template>
  <div class="gallery-wrapper" style="background-color:black;height:667px">
    <header data-spm="header" class="gallery-header">
      <a href="http://localhost:8080/" class="back-wrap" data-spm-data="1">
        <i class="glyph glyph-rectangle"></i>
        <img
          src="//statics.itc.cn/mobile/gallery/css/images/logo-gallery-349f20e6.png"
          class="pics-logo"
        />
      </a>
      <footer class="oper-area"></footer>
    </header>
    <div class="details">
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
                      <span
                        data-v-6d7c78dc
                        class="total-count"
                        style="margin-left:2px"
                      >{{news.length}}</span>
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
    </div>
  </div>
</template>
<script>
// import "../../assets/detailsimages.css";
// import axios from "axios";
// import DetailsImages from "../Slide/imagesdetails.vue";
import "../../../node_modules/swiper/dist/css/swiper.css";
import axios from "axios";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import $ from "jquery";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      num: "",
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
  }
};
</script>
<style scoped>
html {
  font-size: 37.5px;
}
body {
  font-size: 12px;
}
#app,
#uav,
body,
html {
  height: 100%;
  overflow: hidden;
}
.details {
  width: 375px;
  height: 250px;
  /* background: blue; */
  position: absolute;
  top: 150px;
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

.footer {
  width: 100%;
  height: 70px;
  /* position: absolute; */
  top: 500px;
  font-family: PingFang SC, Arial, \\5fae\8f6f\96c5\9ed1, \\5b8b\4f53, simsun,
    sans-serif;
  font-size: 16px;
  background-color: hsla(0, 0%, 7%, 0.75);
  color: #fff;
}
.legend-container {
  width: 350px;
  height: 45px;
}
/* .legend {
  line-height: 1.5;
} */
.gallery-header .pics-logo {
  width: 2.8rem;
}
.gallery-header .glyph-rectangle {
  display: inline-block;
  width: 0.426667rem;
  height: 0.426667rem;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiP…AwMDAsIC03Ny41MDAwMDApICI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)
    no-repeat;
  background-size: 0.426667rem 0.426667rem;
  margin-right: 0.266667rem;
}
.share-component {
  position: relative;
}
.gallery-header .glyph {
  color: #ececec;
}
.share-component .share-pos-icon {
  padding: 0.266667rem;
  font-size: 0.533333rem;
}
.share-dialog {
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
}
.share-wechat-layer {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 8;
  width: 100%;
  height: 100%;
  background: rgba(25, 25, 25, 0.9);
}
.gallery-header {
  position: absolute;
  z-index: 4;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.173333rem;
  opacity: 1;
  background-color: #202020;
  transition: all 0.5s;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
.gallery-header .back-wrap {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.32rem 0.213333rem;
  float: left;
}
a,
a:active,
a:focus,
a:hover {
  text-decoration: none;
}
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: 400;
  font-style: normal;
  vertical-align: baseline;
}
.gallery-header .oper-area {
  float: right;
}
.gallery-header .comment,
.gallery-header .like,
.gallery-header .share {
  float: left;
}
.glyph:before {
  font-family: sicon !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>