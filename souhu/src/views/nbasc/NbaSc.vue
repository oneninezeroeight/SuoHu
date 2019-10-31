<template name="component-name">
  <div>
    <div class="v-tabs-wrap" activecolor="#FFB244">
      <Header :offset="1"></Header>
      <div data-v-5fc8a3bc data-v-67baf0d6 class="relate-match-item">
        <header data-v-5fc8a3bc class="date-wrap">
          <i data-v-5fc8a3bc class="ico bicon-calendar"></i>
          <em data-v-5fc8a3bc class="date">10-28</em>
          <span data-v-5fc8a3bc class="week">星期一</span>
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
                v-bind:style="{backgroundImage: 'url('+item.homeTeamLogo+')'}"
              ></div>
              <div data-v-5fc8a3bc class="name">{{item.homeTeam}}</div>
            </div>
            <div data-v-5fc8a3bc class="detail">
              <header data-v-5fc8a3bc class="title">NBA常规赛</header>
              <div data-v-5fc8a3bc class="progress">{{item.homeTeamScore}} - {{item.vsTeamScore}}</div>
              <footer data-v-5fc8a3bc class="status end">已结束</footer>
            </div>
            <div data-v-5fc8a3bc class="nation visitor">
              <div
                data-v-5fc8a3bc
                class="flag"
                lazy-progressive="true"
                :data-src="item.vsTeamLogo"
                lazy="loaded"
                v-bind:style="{backgroundImage: 'url('+item.vsTeamLogo+')'}"
              ></div>
              <div data-v-5fc8a3bc class="name">{{item.vsTeam}}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header/header.vue";
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
        let { news } = (await axios.get("http://localhost:3000/NBASc")).data;
        this.news = news;
      })();
    }
  },
  mounted() {
    this.getNews();
  },
  components: {
    Header
  }
};
</script>
<style scoped>
.game-schedule {
  position: relative;
}
.match-schedule-wrap {
  position: relative;
  padding-bottom: 0.48rem;
  font-size: 0.32rem;
}
.jscroll-wrap.animated {
  -webkit-transition: -webkit-transform ease 0.5s;
  transition: -webkit-transform ease 0.5s;
  transition: transform ease 0.5s;
  transition: transform ease 0.5s, -webkit-transform ease 0.5s;
}
.jscroll-wrap {
  will-change: transform;
}
.jscroll-wrap .jscroll-pull {
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 15px 0;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.relate-match-item .date-wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 0.96rem;
  background-color: #f8f9f9;
}
.relate-match-item .item {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.533333rem 0.8rem 0.48rem;
  background: #fff;
}
.relate-match-item .date-wrap .ico {
  font-size: 0.266667rem;
}
.relate-match-item .date-wrap .date {
  padding: 0 0.213333rem;
}
.relate-match-item {
  position: relative;
  padding-bottom: 0.48rem;
  font-size: 0.32rem;
}
.relate-match-item .item .nation {
  width: 2.666667rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.relate-match-item .item .nation .flag {
  position: relative;
  margin: 0 auto;
  width: 2rem;
  height: 1.333333rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.relate-match-item .item .nation .name {
  font-size: 0.4rem;
  text-align: center;
  padding-top: 0.266667rem;
}
.relate-match-item .item .detail .title {
  padding-bottom: 0.346667rem;
  font-size: 0.32rem;
  line-height: 0.426667rem;
  color: #888888;
  text-align: center;
}
.relate-match-item .item .detail .progress[data-v-5fc8a3bc] {
  margin-bottom: 0.346667rem;
  font-size: 0.506667rem;
  color: #121212;
  text-align: center;
}
.relate-match-item .item .detail .status.end {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#bdbdbd),
    to(#484848)
  );
  background: linear-gradient(to right, #bdbdbd, #484848);
}
.relate-match-item .item .detail .status {
  width: 1.92rem;
  height: 0.426667rem;
  margin: 0 auto;
  line-height: 0.426667rem;
  border-radius: 0.213333rem;
  text-align: center;
  color: #fff;
  font-size: 12px;
}
</style>