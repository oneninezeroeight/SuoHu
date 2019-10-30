<template>
  <div class="sports-home-page">
    <header data-spm="header" class="home-header">
      <a
        href="https://m.sohu.com/?spm=smwp.fb-sports-home.header.1.15724214773879uV4w3e"
        class="fl"
        data-spm-data="1"
      >
        <div class="back-home">
          <i class="ico bicon-left-arrow"></i>
          <img
            src="data:image/png;base64,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"
            alt
            title
            aria-hidden="true"
            class="logo"
          />
        </div>
      </a>
      <div class="label">体育</div>
      <a
        href="https://m.sohu.com/promotion?link=MTTKai1XtGapMeGGSJAaURyMdlSgz5clP7OffkAn8rYr1dJ4OBfhrx3ANw216Hy1HUTcaBjvazQc6XD17Yak9zPFFe%2F8%2Fk24fkK11pFxQzmMFrYU6rBCfWAmHjQtyamYK8XO3cny8L7eLU3lSuEOKvmoQViDyG4i8x7TNLCeqTk%3D&amp;pcm=101.9327_532_621737.0_0.0&amp;spm=smwp.fb-sports-home.header.2.15724214773879uV4w3e"
        data-spm-content="2||532|101.9327_532_621737.0_0.0|23|"
        class="fr"
        data-spm-data="2"
      >
        <div class="right-promotion">
          <img
            src="http://29e5534ea20a8.cdn.sohucs.com/os/news/9a0013e23cf70c139a758eafba7157b9.jpg"
            alt
            title
            aria-hidden="true"
            class="icon"
          />
          <div class="txt">百女3</div>
        </div>
      </a>
    </header>
    <nav data-spm="navs" class="navs-wrap" id="navMenu">
      <ul class="nav-list clearfix">
        <a href="http://localhost:8082/nbayw" class="item" data-spm-data="1">
          <li class="nav">NBA</li>
        </a>
        <a
          href="https://m.sohu.com/z/cba?spm=smwp.fb-sports-home.navs.2.15724214773879uV4w3e"
          class="item"
          data-spm-data="2"
        >
          <li class="nav">CBA</li>
        </a>
        <a
          href="https://m.sohu.com/z/csl?spm=smwp.fb-sports-home.navs.3.15724214773879uV4w3e"
          class="item"
          data-spm-data="3"
        >
          <li class="nav">中超</li>
        </a>
        <a
          href="https://m.sohu.com/z/afccl?spm=smwp.fb-sports-home.navs.4.15724214773879uV4w3e"
          class="item"
          data-spm-data="4"
        >
          <li class="nav">亚冠</li>
        </a>
        <a
          href="https://m.sohu.com/z/ccl?spm=smwp.fb-sports-home.navs.5.15724214773879uV4w3e"
          class="item"
          data-spm-data="5"
        >
          <li class="nav">中甲</li>
        </a>
        <a
          href="https://m.sohu.com/z/live?spm=smwp.fb-sports-home.navs.6.15724214773879uV4w3e"
          class="item"
          data-spm-data="6"
        >
          <li class="nav">直播</li>
        </a>
        <a
          href="https://m.sohu.com/z/premierleague?spm=smwp.fb-sports-home.navs.7.15724214773879uV4w3e"
          class="item"
          data-spm-data="7"
        >
          <li class="nav">英超</li>
        </a>
        <a
          href="https://m.sohu.com/z/laliga?spm=smwp.fb-sports-home.navs.8.15724214773879uV4w3e"
          class="item"
          data-spm-data="8"
        >
          <li class="nav">西甲</li>
        </a>
        <a
          href="https://m.sohu.com/z/seriea?spm=smwp.fb-sports-home.navs.9.15724214773879uV4w3e"
          class="item"
          data-spm-data="9"
        >
          <li class="nav">意甲</li>
        </a>
        <a
          href="https://m.sohu.com/z/bundesliga?spm=smwp.fb-sports-home.navs.10.15724214773879uV4w3e"
          class="item"
          data-spm-data="10"
        >
          <li class="nav">德甲</li>
        </a>
        <a
          href="https://m.sohu.com/z/ligue1?spm=smwp.fb-sports-home.navs.11.15724214773879uV4w3e"
          class="item"
          data-spm-data="11"
        >
          <li class="nav">法甲</li>
        </a>
        <a
          href="https://m.sohu.com/z/uefacl?spm=smwp.fb-sports-home.navs.12.15724214773879uV4w3e"
          class="item"
          data-spm-data="12"
        >
          <li class="nav">欧冠</li>
        </a>
        <a
          href="https://m.sohu.com/z/integrated?spm=smwp.fb-sports-home.navs.13.15724214773879uV4w3e"
          class="item"
          data-spm-data="13"
        >
          <li class="nav">综合</li>
        </a>
        <a
          href="https://m.sohu.com/z/snowsports?spm=smwp.fb-sports-home.navs.14.15724214773879uV4w3e"
          class="item"
          data-spm-data="14"
        >
          <li class="nav">冬奥</li>
        </a>
        <a
          href="https://m.sohu.com/z/golf?spm=smwp.fb-sports-home.navs.15.15724214773879uV4w3e"
          class="item"
          data-spm-data="15"
        >
          <li class="nav">高尔夫</li>
        </a>
        <a
          href="https://m.sohu.com/z/e_sport?spm=smwp.fb-sports-home.navs.16.15724214773879uV4w3e"
          class="item"
          data-spm-data="16"
        >
          <li class="nav">电竞</li>
        </a>
        <a
          href="https://m.sohu.com/z/running?spm=smwp.fb-sports-home.navs.17.15724214773879uV4w3e"
          class="item"
          data-spm-data="17"
        >
          <li class="nav">跑步</li>
        </a>
        <a
          href="https://jincai.sohu.com/?spm=smwp.fb-sports-home.navs.18.15724214773879uV4w3e#/"
          class="item"
          data-spm-data="18"
        >
          <li class="nav">金彩</li>
        </a>
      </ul>
    </nav>
    <Slide />
    <div class="section-wrap" qpbcode="u4296521">
      <header class="section-menu">
        <div class="label">要闻</div>
        <ul data-spm="nav-toutiao" class="links">
          <a
            href="https://jincai.sohu.com/?spm=smwp.fb-sports-home.nav-toutiao.1.15724214773879uV4w3e#/"
            data-spm-data="1"
          >
            <li class="link">足彩</li>
          </a>
          <a
            href="https://m.tv.sohu.com/sports?spm=smwp.fb-sports-home.nav-toutiao.2.15724214773879uV4w3e"
            data-spm-data="2"
          >
            <li class="link">视频</li>
          </a>
        </ul>
      </header>
      <div class="news-wrap">
        <div class="feed-list-wrap" data-spm="fd-d-toutiao">
          <div class="req-wrap">
            <ul class="feed-list">
              <li
                class="feed-item"
                data-pull-time="1"
                data-spm-content="1||128452||180|"
                v-for="(item,index) in news"
                :key="index"
              >
                <a
                  href
                  data-spm-type="content"
                  data-spm-content="1||128452||180|"
                  data-spm-data="1"
                  class="onePic"
                >
                  <div class="onePic_detail">
                    <h3 class="title" v-text="item.title"></h3>
                    <div class="item_info">
                      <div class="name" v-text="item.authorName"></div>
                      <div class="time">5分钟前</div>
                    </div>
                  </div>
                  <div
                    class="onePic_img"
                    data-src="//29e5534ea20a8.cdn.sohucs.com/q_70,c_lfill,w_228,h_148,g_faces/os/news/a91ba01f2374582ebbdb5559966b379a.webp"
                    lazy="loaded"
                    v-bind:style="{backgroundImage: 'url('+item.images+')'}"
                  ></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slide from "../../components/Slide/Slide.vue";
import axios from "axios";
export default {
  data() {
    return {
      news: []
    };
  },
  components: {
    Slide
  },
  methods: {
    getNews() {
      (async () => {
        let { news } = (await axios.get(
          "http://localhost:3000/SportHomeNews"
        )).data;
        this.news = news;
      })();
    }
  },
  mounted() {
    this.getNews();
  }
};
</script>
<style scoped>
.onePic_img {
  width: 114px;
  height: 74px;
  background-size: cover;
}
</style>