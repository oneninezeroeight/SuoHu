<template name="component-name">
  <div>
    <div class="vfixed-wrap sticky">
      <div class="content origin">
        <div class="header-wrap">
          <div
            data-v-90fe0322
            data-spm="hdn"
            class="home-header"
            style="background:white;border-color: white;"
          >
            <a data-v-90fe0322 href="http://localhost:8080/" data-spm-data="1">
              <div data-v-90fe0322 class="back bicon-left-arrow"></div>
            </a>
            <div data-v-90fe0322 class="content">
              <div
                data-v-90fe0322
                class="logo"
                lazy-progressive="true"
                data-src="//statics.itc.cn/sports/icon/3.png"
                lazy="loaded"
                style="background-image: url(&quot;//statics.itc.cn/sports/icon/3.png&quot;);"
              ></div>
              <div data-v-90fe0322 class="main">
                <div data-v-90fe0322 class="name">CBA</div>
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
          url: "cbayw"
        },
        {
          title: "赛程",
          url: "cbasc"
        },
        {
          title: "积分",
          url: "cbaph"
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