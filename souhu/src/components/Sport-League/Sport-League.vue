<template>
  <div data-spm="hsb" class="sidebar-component showSL" style="display:block">
    <article class="main-area">
      <div class="header">
        <div class="tt">选择频道</div>
        <div class="close bicon-close" @click="close"></div>
      </div>
      <div class="menu-list">
        <a
          v-for="(item,index) in news"
          :key="index"
          :href="item.urlx"
          class="menu-link"
          data-spm-data="1"
        >
          <div class="menu-item">
            <div
              class="logo"
              lazy-progressive="true"
              lazy="loaded"
              v-bind:style="{backgroundImage: 'url('+item.url+')'}"
            ></div>
            <div class="name">{{item.name}}</div>
          </div>
        </a>
      </div>
    </article>
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      teams: "",
      news: []
    };
  },
  methods: {
    close() {
      $(".showSL")[0].style.display = "none";
    },
    getNews() {
      (async () => {
        let { news } = (await axios.get(
          "http://localhost:3000/SportLeague"
        )).data;
        this.news = news;
      })();
    }
  },

  mounted() {
    this.getNews();
  }
};
</script>