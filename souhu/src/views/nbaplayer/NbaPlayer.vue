<template name="component-name">
  <div>
    <div class="v-tabs-wrap" activecolor="#FFB244">
      <Header :offset="3"></Header>
      <div data-v-58cb0d1e class="item-title">
        <section data-v-58cb0d1e class="tabs">
          <div
            v-for="(item,index) in nav"
            :key="index"
            data-v-58cb0d1e
            :class="['tab',{
        'active' :change === index
      }]"
            @click="highLight(index)"
            :to="{
        name:item.url
      }"
            v-text="item.title"
          ></div>
        </section>
        <div data-v-58cb0d1e class="titles">
          <div data-v-58cb0d1e class="player">球员</div>
          <div data-v-58cb0d1e class="team">球队</div>
          <div data-v-58cb0d1e class="goals">数据</div>
        </div>
      </div>
      <div data-v-58cb0d1e class="player-ranks-wrap">
        <keep-alive>
          <div data-v-58cb0d1e class="req-wrap">
            <div data-v-58cb0d1e class="player-list">
              <a
                data-v-58cb0d1e
                href="http://nbadata.m.sohu.com/nba/player.php?id=4840"
                class="player-link data"
                v-for="(item,index) in news"
                :key="index"
              >
                <div data-v-58cb0d1e class="item player">
                  <div data-v-58cb0d1e class="player">
                    <div data-v-58cb0d1e class="rank" v-text="item.ranking"></div>
                    <div data-v-58cb0d1e class="name" v-text="item.playerName"></div>
                  </div>
                  <div data-v-58cb0d1e class="team" v-text="item.teamName"></div>
                  <div data-v-58cb0d1e class="goals" v-text="item.score"></div>
                </div>
              </a>
            </div>
          </div>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header/header.vue";
import axios from "axios";
// import $ from "jquery";
export default {
  props: {
    offsetx: Number
  },
  data() {
    return {
      change: 0,
      news: [],
      nav: [
        {
          title: "得分",
          url: "score"
        },
        {
          title: "篮板",
          url: "backboard"
        },
        {
          title: "助攻",
          url: "assists"
        },
        {
          title: "抢断",
          url: "steals"
        },
        {
          title: "盖帽",
          url: "blocks"
        },
        {
          title: "失误",
          url: "turnovers"
        },
        {
          title: "犯规",
          url: "fouls"
        }
      ]
    };
  },
  methods: {
    highLight(index) {
      this.change = index;
      // for (let i = 0; i < 99; i++) {
      //   $(".player-list").removeChild($(".player-list").childNodes[i]);
      // }
      switch (this.change) {
        case 0:
          this.getNews("http://localhost:3000/NBAplayerscore");
          break;
        case 1:
          this.getNews("http://localhost:3000/NBAplayerbackboard");
          break;
        case 2:
          this.getNews("http://localhost:3000/NBAplayerassists");
          break;
        case 3:
          this.getNews("http://localhost:3000/NBAplayersteals");
          break;
        case 4:
          this.getNews("http://localhost:3000/NBAplayerblocks");
          break;
        case 5:
          this.getNews("http://localhost:3000/NBAplayerturnovers");
          break;
        case 6:
          this.getNews("http://localhost:3000/NNBAplayerfouls");
          break;
      }
    },
    getNews(name) {
      (async () => {
        let { news } = (await axios.get(name)).data;
        this.news = news;
      })();
    }
  },
  components: {
    Header
  },
  mounted() {
    this.getNews("http://localhost:3000/NBAplayerscore");
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