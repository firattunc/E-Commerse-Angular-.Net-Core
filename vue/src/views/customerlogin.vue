<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <!-- breadcrumb-->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="home">Home</router-link></li>
            <li aria-current="page" class="breadcrumb-item active">
              New account / Sign in
            </li>
          </ol>
        </nav>
      </div>
      <div class="col-lg-6">
        <div class="box">
          <h1>New account</h1>
          <p class="lead">Not our registered customer yet?</p>
          <p>
            With registration with us new world of fashion, fantastic discounts
            and much more opens to you! The whole proceFss will not take you more
            than a minute!
          </p>
          <p class="text-muted">
            If you have any questions, please feel free to
            <a href="contact.html">contact us</a>, our customer service center
            is working for you 24/7.
          </p>
          <hr />
           <Form ref="registerForm" :rules="rulesRegister" :model="registerModel">
               <FormItem prop="name">
              <div
                class="from-group ivu-input-wrapper ivu-input-wrapper-large ivu-input-type"
              >
                <input
                  id="name"
                  v-model="registerModel.name"
                  autocomplete="off"
                  spellcheck="false"
                  type="text"
                  placeholder="Name"
                  class="ivu-input ivu-input-large"
                  style="padding-left:32px;padding-right:0"
                />
              </div>
            </FormItem>
               <FormItem prop="surname">
              <div
                class="from-group ivu-input-wrapper ivu-input-wrapper-large ivu-input-type"
              >
                <input
                  id="surName"
                  v-model="registerModel.surname"
                  autocomplete="off"
                  spellcheck="false"
                  type="text"
                  placeholder="Surname"
                  class="ivu-input ivu-input-large"
                  style="padding-left:32px;padding-right:0"
                />
              </div>
            </FormItem>
            <FormItem prop="userName">
              <div
                class="from-group ivu-input-wrapper ivu-input-wrapper-large ivu-input-type"
              >
                <input
                  id="userName"
                  v-model="registerModel.userName"
                  autocomplete="off"
                  spellcheck="false"
                  type="text"
                  :placeholder="L('UserNamePlaceholder')"
                  class="ivu-input ivu-input-large"
                  style="padding-left:32px;padding-right:0"
                />
              </div>
            </FormItem>
            <FormItem prop="emailAddress">
              <div
                class="from-group ivu-input-wrapper ivu-input-wrapper-large ivu-input-type"
              >
                <input
                  id="emailAddress"
                  v-model="registerModel.emailAddress"
                  autocomplete="off"
                  spellcheck="false"
                  type="text"
                  placeholder="Email Address"
                  class="ivu-input ivu-input-large"
                  style="padding-left:32px;padding-right:0"
                />
              </div>
            </FormItem>
            <FormItem prop="passwordRegister">
              <div
                class="form-group ivu-input-wrapper ivu-input-wrapper-large ivu-input-type"
              >
                <input
                  id="password"
                  v-model="registerModel.passwordRegister"
                  autocomplete="off"
                  spellcheck="false"
                  type="password"
                  :placeholder="L('PasswordPlaceholder')"
                  class="ivu-input ivu-input-large "
                  style="padding-left:32px;padding-right:0"
                />
              </div>
            </FormItem>
          </Form>
          <div style="margin-top:15px">
            <Button
              class="btn btn-primary"
              type="primary"
              @click="register"
              long
              size="large"
              >Register</Button
            >
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="box">
          <h1>Login</h1>
          <p class="lead">Already our customer?</p>
          <p class="text-muted">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <hr />
          <Form ref="loginform" :rules="rules" :model="loginModel">
            <FormItem prop="userNameOrEmailAddress">
              <div
                class="from-group ivu-input-wrapper ivu-input-wrapper-large ivu-input-type"
              >
                <input
                  id="email"
                  v-model="loginModel.userNameOrEmailAddress"
                  autocomplete="off"
                  spellcheck="false"
                  type="text"
                  :placeholder="L('UserNamePlaceholder')"
                  class="ivu-input ivu-input-large"
                  style="padding-left:32px;padding-right:0"
                />
              </div>
            </FormItem>
            <FormItem prop="password">
              <div
                class="form-group ivu-input-wrapper ivu-input-wrapper-large ivu-input-type"
              >
                <i
                  class="ivu-icon ivu-icon-ios-locked-outline ivu-input-icon ivu-input-icon-normal"
                  style="left:0"
                ></i>
                <input
                  id="password"
                  v-model="loginModel.password"
                  autocomplete="off"
                  spellcheck="false"
                  type="password"
                  :placeholder="L('PasswordPlaceholder')"
                  class="ivu-input ivu-input-large "
                  style="padding-left:32px;padding-right:0"
                />
              </div>
            </FormItem>
          </Form>
          <div style="margin-top:15px">
            <Button
              class="btn btn-primary"
              type="primary"
              @click="login"
              long
              size="large"
              >{{ L("LogIn") }}</Button
            >
          </div>
           <language-switch></language-switch>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import Footer from "../components/Footer.vue";
import TenantSwitch from "../components/tenant-switch.vue";
import LanguageSwitch from "../components/language-switch.vue";
import iView from "iview";
import AbpBase from "../lib/abpbase";
import User from "@/store/entities/user";
@Component({
  components: { Footer, TenantSwitch, LanguageSwitch },
})
export default class Login extends AbpBase {
  loginModel = {
    userNameOrEmailAddress: "",
    password: "",
    rememberMe: false,
  };
  registerModel={
    userName:"",
    emailAddress:"",
    name:"",
    surname:"",
    password:"",    
    passwordRegister:"",
    roleNames:[]=['Customer'],
    isActive: true,
  }
   user:User=new User();
  showChangeTenant: boolean = false;
  async login() {
    (this.$refs.loginform as any).validate(async (valid: boolean) => {
      if (valid) {        
        this.$Message.loading({
          content: this.L("LoginPrompt"),
          duration: 0,
        });
        await this.$store.dispatch({
          type: "app/login",
          data: this.loginModel,
        });
        sessionStorage.setItem(
          "rememberMe",
          this.loginModel.rememberMe ? "1" : "0"
        );
        location.href="/"
      }
    });
  }
   get userName() {
    return this.$store.state.session.user
      ? this.$store.state.session.user.name
      : "";
  }
  async register() {       
    (this.$refs.registerForm as any).validate(async (valid: boolean) => {
      if (valid) {                
          this.registerModel.password=this.registerModel.passwordRegister;
        this.$Message.loading({
          content: 'Registering',
          duration: 0,
        });
         await this.$store.dispatch({
            type:'user/create',
            data:this.registerModel
        });        
        this.loginModel.userNameOrEmailAddress=this.registerModel.userName
        this.loginModel.password=this.registerModel.password
        this.loginModel.rememberMe=false      
        await this.$store.dispatch({
          type: "app/login",
          data: this.loginModel,
        });
        sessionStorage.setItem(
          "rememberMe",
          this.loginModel.rememberMe ? "1" : "0"
        );        
         location.href="/";
      }
    });
  }
  get tenant() {
    return this.$store.state.session.tenant;
  }
  rules = {
    userNameOrEmailAddress: [
      { required: true, message: this.L("UserNameRequired"), trigger: "blur" },
    ],
    password: [
      { required: true, message: this.L("PasswordRequired"), trigger: "blur" },
    ],
  };
  rulesRegister={
       userName: [
      { required: true, message: this.L("UserNameRequired"), trigger: "blur" },
    ],
    passwordRegister: [
      { required: true, message: this.L("PasswordRequired"), trigger: "blur" },
    ],
     name: [
      { required: true, message: 'Name Required', trigger: "blur" },
    ],
    emailAddress: [
      { required: true, message: 'Email Required', trigger: "blur" },
    ],
    surname: [
      { required: true, message: 'SurName Required', trigger: "blur" },
    ]
  }
  created() {
    if(this.$store.state.session.user!==null)
    location.href="/main/customerlogin" 
  
  }
}
</script>
<style scoped>
.container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100%;
  background: #f0f2f5;
}
@media (min-width: 768px) {
  .container {
    background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;
    font-size: 18px;
  }
}
.content {
  padding: 32px 0;
  -ms-flex: 1 1 0%;
  flex: 1 1 0%;
}
.main {
  width: 368px;
  margin: 0 auto;
}
@media (min-width: 768px) {
  .content {
    padding: 112px 0 24px;
  }
}
.top {
  text-align: center;
}
.header {
  height: 44px;
  line-height: 44px;
}
.logo {
  height: 44px;
  vertical-align: top;
  margin-right: 16px;
}
.title {
  font-size: 33px;
  color: rgba(0, 0, 0, 0.85);
  font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: relative;
  top: 2px;
}
.desc {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 12px;
  margin-bottom: 40px;
}
.tenant-title {
  margin-bottom: 24px;
  text-align: center;
}
</style>
