<template name="component-name">
  <div>
    <div class="vfixed-wrap sticky">
      <div class="content fixed" style="display: none;">
        <div class="header-wrap">
          <div data-v-90fe0322 data-spm="hdn" class="home-header">
            <a
              data-v-90fe0322
              href="http://m.sohu.com/z/?spm=smwp.fb-nba-home.hdn.1.15722430369573dvPaRc"
              data-spm-data="1"
            >
              <div data-v-90fe0322 class="back bicon-left-arrow"></div>
            </a>
            <div data-v-90fe0322 class="content">
              <div
                data-v-90fe0322
                class="logo"
                lazy-progressive="true"
                data-src="//statics.itc.cn/sports/icon/2.png"
                lazy="loading"
                style="background-image: url(&quot;//statics.itc.cn/sports/icon/2.png?imageView2/1/w/10/h/10&quot;);"
              ></div>
              <div data-v-90fe0322 class="main">
                <div data-v-90fe0322 class="name">NBA</div>
              </div>
            </div>
            <div data-v-90fe0322 class="menu bicon-menu"></div>
          </div>
        </div>
      </div>
      <div class="content origin">
        <div class="header-wrap">
          <div data-v-90fe0322 data-spm="hdn" class="home-header">
            <a
              data-v-90fe0322
              href="http://m.sohu.com/z/?spm=smwp.fb-nba-home.hdn.1.15722430369573dvPaRc"
              data-spm-data="1"
            >
              <div data-v-90fe0322 class="back bicon-left-arrow"></div>
            </a>
            <div data-v-90fe0322 class="content">
              <div
                data-v-90fe0322
                class="logo"
                lazy-progressive="true"
                data-src="//statics.itc.cn/sports/icon/2.png"
                lazy="loaded"
                style="background-image: url(&quot;//statics.itc.cn/sports/icon/2.png&quot;);"
              ></div>
              <div data-v-90fe0322 class="main">
                <div data-v-90fe0322 class="name">NBA</div>
              </div>
            </div>
            <div data-v-90fe0322 class="menu bicon-menu" @click="click"></div>
          </div>
          <header class="v-tabs-title" style>
            <router-link
              v-for="(item, index) in nav"
              :key="index"
              @click="highLight(index)"
              :to="{
                    name:item.url
                  }"
            >
              <div
                v-text="item.title"
                :class="['tab',{
                          'active': offset === index
                      }]"
              ></div>
            </router-link>
          </header>
        </div>
      </div>
    </div>
    <keep-alive>
      <SportLeague id="show" style="display:none" />
    </keep-alive>
  </div>
</template>
<script>
// import observer from "../../tools/observer";
import $ from "jquery";
import SportLeague from "../Sport-League/Sport-League.vue";
export default {
  components: {
    SportLeague
  },
  props: {
    offset: Number
  },
  data() {
    return {
      nav: [
        {
          title: "要闻",
          url: "nbayw"
        },
        {
          title: "赛程",
          url: "nbasc"
        },
        {
          title: "排行",
          url: "nbaph"
        },
        {
          title: "球员",
          url: "nbaplayer"
        }
      ],
      // 控制高亮
      offseta: 0
    };
  },
  methods: {
    click() {
      $("#show")[0].style.display = "block";
    }
  }
};
</script>
<style scoped>
.home-header {
  position: relative;
  height: 1.173333rem;
  line-height: 1.173333rem;
  text-align: center;
  background-color: #fff;
  font-size: 0.453333rem;
}
.v-tabs-wrap .v-tabs-title {
  height: 1.066667rem;
  display: -ms-flexbox;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  font-size: 0.4rem;
}
.home-header .back {
  position: absolute;
  font-size: 0.533333rem;
  padding: 0.266667rem;
  left: 0.133333rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.home-header .content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 0.213333rem;
}
.home-header .content .main {
  margin-left: 0.133333rem;
}
.home-header .content .main .name {
  font-size: 0.453333rem;
}
.home-header .menu {
  position: absolute;
  font-size: 0.48rem;
  padding: 0.266667rem;
  right: 0.133333rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
}
.v-tabs-title {
  height: 1.066667rem;
  display: -ms-flexbox;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  font-size: 0.4rem;
  justify-content: space-around;
  align-items: center;
}
.v-tabs-wrap .v-tabs-title .tab.active {
  color: #ffb244;
  font-weight: 700;
}
.v-tabs-wrap .v-tabs-title .tab.active:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 0.533333rem;
  height: 0.08rem;
  border-radius: 0.04rem;
  background-color: #ffb244;
}
</style>