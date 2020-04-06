<template>
  <div id="login">
    <div class="btns">
      <van-button plain type="primary" style="margin-right: 0.15rem">登陆</van-button>
      <van-button plain type="primary" style="margin-right: 0.15rem" @click="reg">前去注册</van-button>
    </div>

    <van-form>
      <van-field
              v-model="ruleForm.login"
              name="用户名"
              label="用户名"
              placeholder="用户名"

      />
      <van-field
              v-model="ruleForm.pass"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"

      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="submitForm">
          {{btntxt}}
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import { instance2 } from "@/utils/http";
  import Vue from "vue";
  import { Notify } from "vant";

  Vue.use(Notify);
  export default {
    name: "index",
    data() {
      return {
        ruleForm: {
          login: "",
          pass: "",
          type: "login"
        },
        btntxt: "登陆"
      };
    },
    methods: {
      login() {
        instance2.post("/login", {
          username: this.ruleForm.login,
          password: this.ruleForm.pass
        }).then((res) => {
          localStorage.setItem("token", res.token);
          Notify({ type: "success", message: res.msg });
          this.ruleForm.login = "";
          this.ruleForm.pass = "";
          this.$router.push("/my");
        }).catch((err) => {
          Notify({ type: "warning", message: err });
        });
      },
      reg() {
        this.$router.push("/reg");
      },
      submitForm() {
        this.login();

      }

    },
    created() {

    }
  };
</script>

<style scoped lang="scss">

  #login {
    background: #eee;
    overflow: hidden;
    .btns {
      margin-top: .5rem;
      margin-left: .8rem;
      margin-bottom: .2rem;
    }
  }

</style>