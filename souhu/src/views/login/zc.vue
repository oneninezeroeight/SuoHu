<template>
  <div data-v-617ab0be class="login-page-wrapper">
    <div data-v-ef68022e data-v-617ab0be class="login-box-wrapper">
      <div data-v-ef68022e data-spm="phone-login" class="forSpm" style>
        <a
          data-v-ef68022e
          href="https://m.sohu.com/login?appid=116006&amp;r=https%3A%2F%2Fm.sohu.com%2Fucenter%3Fspm%3Dsmwp.home.hdn.4.1572398295744rOOombb&amp;spm=smwp.login.phone-login.1.1572398299383zOoIJQG"
          data-spm-data="1"
        ></a>
      </div>
      <div data-v-ef68022e data-spm="passport-login" class="forSpm" style="display: none;">
        <a
          data-v-ef68022e
          href="https://m.sohu.com/login?appid=116006&amp;r=https%3A%2F%2Fm.sohu.com%2Fucenter%3Fspm%3Dsmwp.home.hdn.4.1572398295744rOOombb&amp;spm=smwp.login.passport-login.1.1572398299383zOoIJQG"
          data-spm-data="1"
        ></a>
      </div>
      <!---->
      <div data-v-d0c93148 data-v-ef68022e class="alert-shadow" style="display: none;">
        <div data-v-d0c93148 class="alert-content">用户名或密码错误</div>
      </div>
      <!---->
      <div data-v-61dd7a3d data-v-ef68022e class="header-wrapper">
        <img
          data-v-61dd7a3d
          src="//39d0825d09f05.cdn.sohucs.com/2eb9db/img/logo.8f7e5c72.png"
          alt
          class="logo-img"
        />
      </div>
      <header data-v-ef68022e class="box-title">手机号登录注册</header>
      <div data-v-ef68022e class="passport-box input-box">
        <div data-v-ef68022e class="passport-content content">
          <van-field
            data-v-ef68022e
            autocomplete="off"
            type="text"
            class="passport"
            placeholder="请输入账号"
            v-model="nbauser"
            :error-message="usertel"
          />
          <van-button
            data-v-ef68022e
            class="send-code active"
            style
            @click="sendCode"
          >{{ buttonmsg }}</van-button>
        </div>
        <!-- <div data-v-ef68022e class="note" style>请输入手机号</div> -->
      </div>
      <div data-v-ef68022e class="password-box input-box">
        <div data-v-ef68022e class="password-content content">
          <van-field
            data-v-ef68022e
            autocomplete="off"
            type="tel"
            class="password"
            placeholder="请输入验证码"
            v-model="msg"
            :error-message="test"
          />
          <i data-v-ef68022e class="icon i-view" style="display: none;"></i>
        </div>
        <!-- <div data-v-ef68022e class="note" style>请输入验证码</div> -->
      </div>
      <!---->
      <div data-v-ef68022e class="should-know">
        <span data-v-ef68022e @click="changecheck" :class="['checkbox',{'checkbox knew':isFocus}]">
          <em data-v-ef68022e>L</em>
        </span>
        <span data-v-ef68022e data-spm="law-links" class="content">
          我已阅读并同意
          <a
            data-v-ef68022e
            href="https://m.sohu.com/ucenter/service?isHideNav=true&amp;spm=smwp.login.law-links.1.1572398299383zOoIJQG"
            data-spm-data="1"
          >服务协议</a>
          和
          <a
            data-v-ef68022e
            href="https://m.sohu.com/ucenter/privacy?isHideNav=true&amp;spm=smwp.login.law-links.2.1572398299383zOoIJQG"
            data-spm-data="2"
          >手机搜狐隐私政策</a>
        </span>
      </div>
      <div
        data-v-ef68022e
        :class="['start-use',{'start-use active':isFocus}]"
        @click="register"
      >开始使用</div>
      <div data-v-ef68022e data-spm="method" class="switch-and-forget">
        <div data-v-ef68022e class="switch-method" @click="toLogin">
          <i data-v-ef68022e class="icon i-switch"></i>账号密码登录
        </div>
        <a
          data-v-ef68022e
          href="https://h5.passport.sohu.com/app/forgetPassword/1?spm=smwp.login.method.1.1572398299383zOoIJQG"
          target="_blank"
          data-spm-acode="8648"
          class="forget-password"
          data-spm-data="1"
          style="display: none;"
        >忘记密码</a>
      </div>
      <div data-v-ef68022e data-spm="third-login" class="third-method">
        <div data-v-ef68022e class="logo-list">
          <div data-v-ef68022e data-spm-acode="8650" class="logo qq" data-spm-data="1"></div>
          <div data-v-ef68022e data-spm-acode="8653" class="logo weibo" data-spm-data="2"></div>
        </div>
        <div data-v-ef68022e data-spm-acode="8651" class="help" data-spm-data="3">
          <a
            data-v-ef68022e
            href="https://m.passport.sohu.com/app/help/1?spm=smwp.login.third-login.4.1572398299383zOoIJQG"
            target="_blank"
            data-spm-data="4"
          >帮助中心</a>
        </div>
      </div>
      <div id="toast" :style="{'opacity': opacity ,'display': display}" @click="closeTip">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
          <!-- <i class="weui-icon-success-no-circle weui-icon_toast"></i> -->
          <p class="weui-toast__content">{{tip}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Field, Button, Toast, Divider } from "vant";
import axios from "axios";
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Divider);
export default {
  data() {
    return {
      nbauser: "",
      msg: "",
      isFocus: 0,
      buttonmsg: "获取验证码",
      tip: "",
      opacity: "0",
      display: "none"
    };
  },
  computed: {
    usertel() {
      if (this.nbauser === "") {
        return "";
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.nbauser)) {
        return "手机号格式错误";
      } else {
        return "";
      }
    },
    test() {
      if (this.msg === "") {
        return "";
      } else if (this.msg.length !== 5) {
        return "验证码格式错误";
      } else {
        return "";
      }
    }
  },
  methods: {
    changecheck() {
      this.isFocus = !this.isFocus;
    },
    toLogin() {
      this.$router.replace("/login");
    },
    closeTip() {
      this.display = "none";
      this.opacity = "0";
    },
    sendCode() {
      let time = 4;
      let timer;
      timer = setInterval(() => {
        time--;
        if (time === 0) {
          clearInterval(timer);
          this.flag = false;
          this.buttonmsg = "点击发送验证码";
          return;
        }
        this.flag = true;
        this.buttonmsg = time + "秒后重新发送";
      }, 1000);
      this.getCode();
      // console.log(12345);
    },
    getCode() {
      if (
        !/^[1][3,4,5,7,8][0-9]{9}$/.test(this.nbauser) ||
        this.nbauser === ""
      ) {
        this.display = "block";
        this.opacity = "1";
        this.tip = "手机号码输入有误";
      } else {
        this.msg = "12345";
        console.log(this.msg);
      }
    },
    register() {
      if (this.nbauser === "" || this.usertel === "手机号码格式错误") {
        Toast("手机号码输入有误");
        return;
      }
      if (this.msg === "" || this.msg === "验证码格式错误") {
        Toast("验证码输入有误");
        return;
      }
      this.reallR();
      this.login();
    },
    reallR() {
      this.zhud = true;
      this.loading = true;
      axios.get("http://localhost:3000/Register", {
        params: {
          nbauser: this.nbauser,
          msg: this.msg
        }
      });
    },
    login() {
      this.zhud = true;
      this.loading = true;
      axios
        .get("http://localhost:3000/Register", {
          params: {
            nbauser: this.nbauser,
            msg: this.msg
          }
        })
        .then(res => {
          var user = res.data.data[0].nbauser;
          var msg = res.data.data[0].msg;

          this.zhud = false;
          this.loading = false;
          if (this.nbauser != user) {
            this.display = "block";
            this.opacity = "1";
            this.tip = "用户不存在";
          } else {
            if (this.msg != msg) {
              this.display = "block";
              this.opacity = "1";
              this.tip = "验证码错误";
            } else {
              if (this.isFocus == 0) {
                this.display = "block";
                this.opacity = "1";
                this.tip = "请勾选协议";
              } else {
                this.display = "block";
                this.opacity = "1";
                this.tip = "登录注册成功";
                this.$router.back("/");
              }
            }
          }
        });
    }
  }
};
</script>
<style scoped>
@import "../../assets/login.css";
html {
  font-size: 37.52px !important;
}
.login-box-wrapper .should-know {
  display: flex;
  align-items: center;
  color: #a4a4a4;
  font-size: 0.32rem;
  margin-top: 0.666667rem;
}
.login-box-wrapper .should-know a {
  color: #a4a4a4;
  text-decoration: underline;
  font-weight: 800;
}
.login-box-wrapper .should-know .checkbox {
  display: inline-block;
  margin-right: 0.13333rem;
  width: 0.29333rem;
  height: 0.29333rem;
  border: 0.02667rem solid #cacad0;
  border-radius: 0.05333rem;
}
.login-box-wrapper .should-know .checkbox em {
  display: block;
  font-size: 0;
  color: #fff;
  font-weight: 800;
  transform: rotateY(180deg) rotateZ(-45deg) translate(0.08rem, -0.02667rem);
}
.login-box-wrapper .should-know .checkbox.knew {
  border: none;
  background: #fdbe00;
  border: 0.02667rem solid #fdbe00;
}
.login-box-wrapper .should-know .checkbox.knew em {
  font-size: 0.32rem;
}
.passport {
  font-size: 0.266667rem;
  color: red;
}
.password {
  font-size: 0.266667rem;
  color: red;
}
.i-view {
  height: 1.0368rem;
  width: 0.228133rem;
}
.send-code {
  font-size: 0.293333rem !important;
}
</style>