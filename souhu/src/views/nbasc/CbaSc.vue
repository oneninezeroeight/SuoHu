<template name="component-name">
  <div>
    <div class="v-tabs-wrap" activecolor="#FFB244">
      <CBAHeader :offset="1"></CBAHeader>
      <div data-v-5fc8a3bc data-v-67baf0d6 class="relate-match-item">
        <header data-v-5fc8a3bc class="date-wrap">
          <i data-v-5fc8a3bc class="ico bicon-calendar"></i>
          <em data-v-5fc8a3bc class="date">11-01</em>
          <span data-v-5fc8a3bc class="week">星期五</span>
        </header>
        <a
          data-v-5fc8a3bc
          href="http://m.sohu.com/z/nba/match/2019102825?spm=smwp.fb-nba-home.ml.1.15722605963069pAM8o1"
          data-spm-data="1"
        >
          <div data-v-5fc8a3bc class="item" v-for="(item,index) in news" :key="index">
            <div data-v-5fc8a3bc class="nation host">
              <div
                data-v-5fc8a3bc
                class="flag"
                lazy-progressive="true"
                :data-src="item.homeTeamLogo"
                lazy="loaded"
                v-bind:style="{backgroundImage: 'url('+item.himages+')'}"
              ></div>
              <div data-v-5fc8a3bc class="name">{{item.hName}}</div>
            </div>
            <div data-v-5fc8a3bc class="detail">
              <header data-v-5fc8a3bc class="title">CBA常规赛</header>
              <div data-v-5fc8a3bc class="progress">19:35</div>
              <footer
                data-v-5fc8a3bc
                class="status end"
                style="background-image: linear-gradient(to right, rgb(61, 154, 244), rgb(0, 72, 255));"
              >未开始</footer>
            </div>
            <div data-v-5fc8a3bc class="nation visitor">
              <div
                data-v-5fc8a3bc
                class="flag"
                lazy-progressive="true"
                :data-src="item.vsTeamLogo"
                lazy="loaded"
                v-bind:style="{backgroundImage: 'url('+item.vimages+')'}"
              ></div>
              <div data-v-5fc8a3bc class="name">{{item.vName}}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import CBAHeader from "../../components/header/cbaheader.vue";
import axios from "axios";
export default {
  data() {
    return {
      news: []
    };
  },
  methods: {
    getNews() {
      (async () => {
        let { news } = (await axios.get("http://localhost:3000/CBAsc")).data;
        this.news = news;
      })();
    }
  },
  mounted() {
    this.getNews();
  },
  components: {
    CBAHeader
  }
};
</script>