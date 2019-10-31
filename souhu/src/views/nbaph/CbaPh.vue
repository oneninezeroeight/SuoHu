<template>
  <div class="nba-home-page">
    <div class="v-tabs-wrap" activecolor="#FFB244">
      <CBAHeader :offset="2"></CBAHeader>
      <div class="content-wrap">
        <div class="content" style="transform: translateX(-200%) translateZ(0px);">
          <div class="v-tab-pane">
            <!---->
          </div>
          <div class="v-tab-pane">
            <!---->
          </div>
          <div class="v-tab-pane">
            <div class="team-standings-wrap">
              <div class="req-wrap">
                <div class="header">
                  <div class="titles">
                    <div class="team">
                      <div class="name">球队</div>
                    </div>
                    <div class="wins">胜</div>
                    <div class="losses">负</div>
                    <div class="winRate">胜率</div>
                    <div class="winDiff">胜差</div>
                  </div>
                </div>
                <div data-spm="undefined-rank" class="team-list">
                  <a
                    href="https://m.sohu.com/z/cba/team/Te007?spm=smwp.fb-cba-home.undefined-rank.Te007.1572489326139Umjuy3M"
                    data-spm-data="Te007"
                    v-for="(item,index) in news"
                    :key="index"
                  >
                    <div class="team-item high">
                      <div class="team">
                        <div class="rank" v-text="item.ranking"></div>
                        <div
                          class="flag"
                          lazy-progressive="true"
                          data-src="//statics.itc.cn/sports/CBAteamicon/Te007.png"
                          lazy="loaded"
                          :style="{backgroundImage: 'url('+item.flag+')'}"
                        ></div>
                        <div class="name" v-text="item.teamsName"></div>
                      </div>
                      <div class="wins" v-text="item.wins"></div>
                      <div class="losses" v-text="item.losses"></div>
                      <div class="winRate" v-text="item.winPercent"></div>
                      <div class="winDiff" v-text="item.winDiff"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  components: {
    CBAHeader
  },
  methods: {
    getNews() {
      (async () => {
        let { news } = (await axios.get(
          "http://localhost:3000/CBAteamsscore"
        )).data;
        this.news = news;
      })();
    }
  },
  created() {
    this.getNews();
  }
};
</script>
<style  scoped>
.team-list:nth-child(8) > div {
  background-color: white !important;
}
.ellipsis {
  line-height: 1.05em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.team-standings-wrap .header .tabs {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0.32rem 0;
}
.team-standings-wrap .header .tabs .tab {
  width: 2.186667rem;
  height: 0.72rem;
  text-align: center;
  line-height: 0.72rem;
  background-color: #f2f3f5;
  color: #999999;
  border-radius: 0.106667rem;
}
.team-standings-wrap .header .tabs .tab.active {
  background-color: #ffb244;
  color: #fff;
}
.team-standings-wrap .header .tabs .tab.east {
  margin-right: 0.213333rem;
}
.team-standings-wrap .header .titles {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 0.373333rem;
  padding: 0.266667rem 0;
  color: #888888;
}
.team-standings-wrap .header .titles .team {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 4rem;
  flex: 1 1 4rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.team-standings-wrap .header .titles .team .name {
  margin-left: 0.8rem;
}
.team-standings-wrap .header .titles .wins {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 1.6rem;
  flex: 1 1 1.6rem;
  text-align: center;
}
.team-standings-wrap .header .titles .losses {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 1.6rem;
  flex: 0 0 1.6rem;
  text-align: center;
}
.team-standings-wrap .header .titles .winRate {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 1.6rem;
  flex: 0 0 1.6rem;
  text-align: center;
}
.team-standings-wrap .header .titles .winDiff {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 1.6rem;
  flex: 0 0 1.6rem;
  text-align: center;
}
.team-standings-wrap .team-list .team-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 1.333333rem;
  border-bottom: 1px solid #f2f3f5;
  font-size: 0.373333rem;
}
.high {
  background-color: #fff8f0;
}
.team-standings-wrap .team-list a:nth-child(n + 9) div {
  background-color: white !important;
}
.team-standings-wrap .team-list a:nth-child(n + 9) .rank {
  color: #999 !important;
}
.team-standings-wrap .team-list .team-item.high .team .rank {
  color: #f90d1b;
}
.team-standings-wrap .team-list .team-item .team {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 4rem;
  flex: 1 1 4rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 0.4rem;
}
.team-standings-wrap .team-list .team-item .team .rank {
  margin-right: 0.053333rem;
  min-width: 0.693333rem;
  color: #999;
  text-align: center;
}
.team-standings-wrap .team-list .team-item .team .flag {
  margin-right: 0.186667rem;
  width: 0.533333rem;
  height: 0.533333rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
.team-standings-wrap .team-list .team-item .wins {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 1.6rem;
  flex: 1 1 1.6rem;
  text-align: center;
}
.team-standings-wrap .team-list .team-item .losses {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 1.6rem;
  flex: 0 0 1.6rem;
  text-align: center;
}
.team-standings-wrap .team-list .team-item .winRate {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 1.6rem;
  flex: 0 0 1.6rem;
  text-align: center;
}
.team-standings-wrap .team-list .team-item .winDiff {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 1.6rem;
  flex: 0 0 1.6rem;
  text-align: center;
}
</style>