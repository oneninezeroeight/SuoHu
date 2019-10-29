<template name="component-name">
  <div>
    <div class="v-tabs-wrap" activecolor="#FFB244">
      <Header :offset="2"></Header>
      <div class="content-wrap">
        <div class="v-tab-pane">
          <div class="team-rank-wrap">
            <div class="header">
              <div class="tabs">
                <div class="tab east active">东部联盟</div>
                <div class="tab west">西部联盟</div>
              </div>
              <div class="titles">
                <div class="team">
                  <div class="name">球队</div>
                </div>
                <div class="wins">胜</div>
                <div class="losses">负</div>
                <div class="winDiff">胜差</div>
                <div class="winDetail">近况</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header/header.vue";
export default {
  components: {
    Header
  }
};
</script>
<style  scoped>
.team-rank-wrap .header .tabs {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0.32rem 0;
  font-size: .32rem
}
.team-rank-wrap .header .tabs .tab.east {
    margin-right: 0.213333rem;
}
.team-rank-wrap .header .tabs .tab.active {
    background-color: #ffb244;
    color: #fff;
}
.team-rank-wrap .header .tabs .tab {
    width: 2.186667rem;
    height: 0.72rem;
    text-align: center;
    line-height: 0.72rem;
    background-color: #f2f3f5;
    color: #999999;
    border-radius: 0.106667rem;
}
.team-rank-wrap .header .titles {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 0.373333rem;
    padding-top: 0.16rem;
    padding-bottom: 0.266667rem;
    color: #888888;
}
.team-rank-wrap .header .titles .team {
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
.team-rank-wrap .header .titles .team .name {
    margin-left: 0.8rem;
}
.team-rank-wrap .header .titles .wins {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 1.6rem;
    flex: 1 1 1.6rem;
    text-align: center;
}
.team-rank-wrap .header .titles .losses {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 1.6rem;
    flex: 0 0 1.6rem;
    text-align: center;
}
.team-rank-wrap .header .titles .winDiff {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 1.6rem;
    flex: 0 0 1.6rem;
    text-align: center;
}
.team-rank-wrap .header .titles .winDetail {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 1.6rem;
    flex: 0 0 1.6rem;
    text-align: center;
}
</style>