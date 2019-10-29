<template name="component-name">
  <div>
    <div class="v-tabs-wrap" activecolor="#FFB244">
      <Header :offset="3"></Header>
      <div data-v-58cb0d1e class="item-title">
        <section data-v-58cb0d1e class="tabs">
          <div data-v-58cb0d1e class="tab active">得分</div>
          <div data-v-58cb0d1e class="tab">篮板</div>
          <div data-v-58cb0d1e class="tab">助攻</div>
          <div data-v-58cb0d1e class="tab">抢断</div>
          <div data-v-58cb0d1e class="tab">盖帽</div>
          <div data-v-58cb0d1e class="tab">失误</div>
          <div data-v-58cb0d1e class="tab">犯规</div>
        </section>
        <div data-v-58cb0d1e class="titles">
          <div data-v-58cb0d1e class="player">球员</div>
          <div data-v-58cb0d1e class="team">球队</div>
          <div data-v-58cb0d1e class="goals">数据</div>
        </div>
      </div>
    </div>
    <Goal></Goal>
    <BackBoard></BackBoard>
    <Assist></Assist>
    <Steal></Steal>
    <BlockShot></BlockShot>
    <Fault></Fault>
    <Foul></Foul>
  </div>
</template>
<script>
import Header from "../../components/header/header.vue";
import Goal from "../../components/player/goal.vue";
import BackBoard from "../../components/player/backboard.vue";
import Assist from "../../components/player/assist.vue";
import Steal from "../../components/player/steal.vue";
import BlockShot from "../../components/player/blockShot.vue";
import Fault from "../../components/player/fault.vue";
import Foul from "../../components/player/foul.vue";
export default {
  components: {
    Header,
    Goal,
    BackBoard,
    Assist,
    Steal,
    BlockShot,
    Fault,
    Foul
  }
};
</script>
<style scoped>
.item-title {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
}
.item-title .tabs {
  padding: 0.32rem 0.4rem 0.266667rem;
  overflow: hidden;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  font-size: 0.4rem;
}
.item-title .tabs .tab.active {
  color: #fff;
  background-color: #ffb244;
}
.item-title .tabs .tab {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 0.186667rem;
  width: 1.493333rem;
  height: 0.693333rem;
  font-size: 0.346667rem;
  color: #999999;
  background-color: #f2f3f5;
  border-radius: 0.106667rem;
}
.item-title .titles {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 0.96rem;
  padding: 0 0.4rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  text-align: center;
  font-size: 0.373333rem;
  border-bottom: 1px solid #e0e0e0;
  color: #888888;
}
.item-title .titles .player {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 3.733333rem;
    flex: 1 1 3.733333rem;
}
.item-title .titles .team {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 2.133333rem;
    flex: 1 1 2.133333rem;
    text-align: center;
}
.item-title .titles .goals {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 1.066667rem;
    flex: 0 0 1.066667rem;
    text-align: center;
}
</style>