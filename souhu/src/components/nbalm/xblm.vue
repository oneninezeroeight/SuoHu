<template>
  <div class="req-wrap">
    <div class="team-list" data-spm="Western-rank">
      <a
        href="http://m.sohu.com/z/nba/team/16?spm=smwp.fb-nba-home.Western-rank.16.1572310964008qsNsZmB"
        data-spm-data="16"
      >
        <div class="team-item high">
          <div class="team">
            <div class="rank">1</div>
            <div
              class="flag"
              lazy-progressive="true"
              data-src="//statics.itc.cn/sports/basketball/NBA/teamicon/16.png"
              lazy="loaded"
              style="background-image: url(&quot;//statics.itc.cn/sports/basketball/NBA/teamicon/16.png&quot;);"
            ></div>
            <div class="name">森林狼</div>
          </div>
          <div class="wins">3</div>
          <div class="losses">0</div>
          <div class="winDiff">0</div>
          <div class="winDetail">3连胜</div>
        </div>
      </a>
    </div>
  </div>
</template>
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