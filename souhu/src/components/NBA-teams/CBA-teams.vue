<template>
  <div data-spm="rec-list" class="columns-wrap">
    <div :class="['navs',{'expand':!isFocus,'clearfix':!isFocus,'fold':isFocus}]">
      <a
        id="show"
        style="width:16.6%"
        href="http://m.sohu.com/media/458722?spm=smwp.fb-nba-home.rec-list.1.1572252350393aXeAsri"
        class="item-wrap"
        :data-spm-data="item._id"
        v-for="(item,index) in news"
        :key="index"
      >
        <div class="item">
          <header
            class="icon"
            lazy-progressive="true"
            data-src="//statics.itc.cn/sports/Particular.png"
            lazy="loaded"
            v-bind:style="{backgroundImage: 'url('+item.url+')'}"
          ></header>
          <footer class="title">{{item.name}}</footer>
        </div>
      </a>
      <div class="item-wrap oper">
        <div class="item">
          <header class="icon" @click="show">
            <i class="ico bicon-fold"></i>
          </header>
          <footer class="title">收起</footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      news: [],
      isFocus: 0
    };
  },
  methods: {
    getNews() {
      (async () => {
        let { news } = (await axios.get("http://localhost:3000/CBAteams")).data;
        this.news = news;
      })();
    },
    show() {
      console.log($(".name").innerText);
      this.isFocus = !this.isFocus;
      $(".oper .title")[0].innerText = "更多";
      for (let i = 0; i < this._vnode.children[0].children.length; i++) {
        if (
          this._vnode.children[0].children[i].key * 1 > 4 &&
          this.$el.firstChild.className == "navs expand clearfix"
        ) {
          this._vnode.children[0].children[i].elm.style.display = "none";
        } else {
          this._vnode.children[0].children[i].elm.style.display = "block";
          this.$el.firstChild.className == "navs fold";
          if (
            (this._vnode.children[0].children[i].elm.style.display =
              "block" && this.$el.firstChild.className == "navs fold")
          ) {
            $(".oper .title")[0].innerText = "收起";
          }
        }
      }
      //   console.log(this.$el.firstChild.className);
    }
  },

  created() {
    this.getNews();
    setTimeout(function() {
      $(".oper header").click();
    }, 2200);
  }
};
</script>
<style scoped>
#show {
  float: left;
}
</style>