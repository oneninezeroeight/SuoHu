<template >
  <div>
    <div class="nba-home-page">
      <div class="v-tabs-wrap" activecolor="#FFB244">
        <CBAHeader :offset="0"></CBAHeader>
        <div class="content-wrap">
          <div class="content" style="transform: translateX(0%) translateZ(0px);">
            <div class="v-tab-pane">
              <div class="news-wrap">
                <keep-alive>
                  <CBAteams></CBAteams>
                </keep-alive>
                <div class="news-list-wrap">
                  <div>
                    <div data-spm="fd-d" class="feed-list-wrap">
                      <div class="req-wrap">
                        <div class="toutiao-area">
                          <h3 class="tt">要闻</h3>
                          <ul class="feed-list">
                            <li
                              data-pull-time="1"
                              data-spm-type="resource"
                              data-spm-content="a/350096110_458722"
                              class="feed-item"
                              data-spm-data="1"
                              v-for="(item,index) in news"
                              :key="index"
                            >
                              <a
                                href="http://m.sohu.com/a/350096110_458722?scm=0.0.0.0&amp;spm=smwp.fb-nba-home.fd-d.1.1572249036835X6cmDS5"
                                data-spm-type="content"
                                data-spm-content="1|458722|350096110||2|"
                                class="onePic"
                                data-spm-data="1"
                              >
                                <div class="onePic_detail">
                                  <h3 class="title">{{item.mobileTitle}}</h3>
                                  <div class="item_info">
                                    <!---->
                                    <!---->
                                    <div class="name">NBA广角</div>
                                    <div data-news_id="350096110" class="time">2小时前</div>
                                  </div>
                                </div>
                                <div
                                  class="onePic_img"
                                  :data-src="item.images"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <keep-alive>
      <SportLeague style="display:none" />
    </keep-alive>
  </div>
</template>
<script>
import CBAHeader from "../../components/header/cbaheader.vue";
import CBAteams from "../../../src/components/NBA-teams/CBA-teams.vue";
import SportLeague from "../../components/Sport-League/Sport-League.vue";
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
        let { news } = (await axios.get("http://localhost:3000/NBASy")).data;
        this.news = news;
      })();
    }
  },
  components: {
    CBAHeader,
    CBAteams,
    SportLeague
  },
  mounted() {
    this.getNews();
  }
};
</script>
<style  scoped>
.match-schedule {
  height: 1.84rem;
  border-bottom: 1px solid #f2f3f5;
  font-size: 0.266667rem;
}
.match-schedule .match-list {
  padding: 0.266667rem 0;
  overflow: hidden;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
}
.match-schedule .card-item {
  display: inline-block;
  min-width: 4.453333rem;
  padding: 0 0.4rem;
  border-right: 1px solid #dddddd;
}
.match-schedule .card-item .member {
  display: inline-block;
  width: 1.066667rem;
  margin-top: 0.053333rem;
}
.match-schedule .card-item .member .flag {
  position: relative;
  margin: 0 auto;
  width: 0.72rem;
  height: 0.72rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.match-schedule .card-item .member .name {
  line-height: 1.05em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  text-align: center;
  max-width: 4em;
  margin: 0 auto;
  padding-top: 0.133333rem;
}
.match-schedule .card-item .detail {
  display: inline-block;
  text-align: center;
  font-size: 0.266667rem;
  min-width: 2.133333rem;
}
.match-schedule .card-item .detail .progress {
  font-size: 0.346667rem;
  margin: 0.106667rem 0;
}
.match-schedule .card-item .detail .status {
  display: inline-block;
  padding: 0 0.08rem;
  height: 0.373333rem;
  line-height: 0.373333rem;
  border-radius: 0.186667rem;
  border: 1px solid #dddddd;
}
.columns-wrap {
  padding-bottom: 0.266667rem;
  border-bottom: 1px solid #f2f3f5;
}
.columns-wrap .fold {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.columns-wrap .navs .item-wrap {
  position: relative;
  display: inline-block;
  width: 16.66%;
  font-size: 0;
  vertical-align: middle;
  padding-top: 0.32rem;
  padding-bottom: 0.08rem;
}
.columns-wrap .navs .item-wrap .item {
  position: relative;
  margin: 0 auto;
  font-size: 0.32rem;
}
.columns-wrap .navs .item-wrap .item .icon {
  width: 0.72rem;
  height: 0.72rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
}
.columns-wrap .navs .item-wrap .item .title {
  line-height: 1.05em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
  padding-top: 0.213333rem;
  text-align: center;
  max-width: 4em;
}
.news-list-wrap {
  position: relative;
}
.feed-list-wrap {
  position: relative;
}
.feed-list-wrap .tt {
  padding: 0.4rem 0.346667rem 0.173333rem;
  font-size: 0.48rem;
  font-weight: bold;
}
.nba-home-page .feed-item:first-of-type {
  border-top: none;
}
.nba-home-page .feed-item {
  border-top: 0.013333rem solid #e8e8e8;
  margin: -0.026667rem 0.346667rem;
}
.feed-item {
  position: relative;
  margin: 0 0.346667rem;
  border-bottom: 1px solid #e8e8e8;
}
.feed-item .onePic {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-top: 0.226667rem;
  padding-bottom: 0.226667rem;
}
.feed-item .onePic .onePic_detail {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.feed-item .onePic .onePic_detail .title {
  padding-right: 0.266667rem;
  -webkit-line-clamp: 3;
}
.feed-item .title {
  line-height: 1.175em;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  display: box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  font-size: 18px;
  line-height: 1.4em;
  color: #212121;
}
.feed-item .onePic .onePic_detail .item_info {
  padding-top: 0.226667rem;
  padding-bottom: 0.093333rem;
}
.feed-item .item_info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
  color: #999;
  font-size: 0.32rem;
  width: 100%;
  padding-right: 0.266667rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.feed-item .item_info .name {
  line-height: 1.05em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  max-width: 10em;
}
.feed-item .item_info .time {
  float: left;
  position: relative;
  line-height: 1.05em;
  padding-left: 0.16rem;
}
.feed-item .onePic .onePic_img {
  position: relative;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 3.04rem;
  height: 1.973333rem;
  background-size: cover;
}
</style>