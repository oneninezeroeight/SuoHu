<template>
  <div class="req-wrap">
    <div class="team-list" data-spm="Eastern-rank">
      <a
        href="http://m.sohu.com/z/nba/team/1?spm=smwp.fb-nba-home.Eastern-rank.1.1572310964008qsNsZmB"
        data-spm-data="1"
      >
        <div class="team-item high" v-for="(item,index) in news" :key="index">
          <div class="team">
            <div class="rank">{{item.place}}</div>
            <div
              class="flag"
              lazy-progressive="true"
              data-src="item.teamLogo"
              lazy="loaded"
              v-bind:style="{backgroundImage: 'url('+item.teamLogo+')'}"
            ></div>
            <div class="name">{{item.teamName}}</div>
          </div>
          <div class="wins">{{item.wins}}</div>
          <div class="losses">{{item.losses}}</div>
          <div class="winDiff">{{item.winDiff}}</div>
          <div class="winDetail">***</div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
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
        let { news } = (await axios.get("http://localhost:3000/NBADblm")).data;
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
.team-rank-wrap .team-list .team-item.high {
  background-color: #fff8f0;
}
.team-rank-wrap .team-list .team-item {
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
.team-rank-wrap .team-list .team-item .team {
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
.team-rank-wrap .team-list .team-item.high .team .rank {
  color: #f90d1b;
}
.team-rank-wrap .team-list .team-item .team .rank {
  margin-right: 0.053333rem;
  min-width: 0.693333rem;
  color: #999;
  text-align: center;
}
.team-rank-wrap .team-list .team-item .team .flag {
  margin-right: 0.186667rem;
  width: 0.533333rem;
  height: 0.533333rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
.team-rank-wrap .team-list .team-item .wins {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 1.6rem;
  flex: 1 1 1.6rem;
  text-align: center;
}
.team-rank-wrap .team-list .team-item .losses {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 1.6rem;
  flex: 0 0 1.6rem;
  text-align: center;
}
.team-rank-wrap .team-list .team-item .winDiff {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 1.6rem;
  flex: 0 0 1.6rem;
  text-align: center;
}
.team-rank-wrap .team-list .team-item .winDetail {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 1.6rem;
  flex: 0 0 1.6rem;
  text-align: center;
}
</style>