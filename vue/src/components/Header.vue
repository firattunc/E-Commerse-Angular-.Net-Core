<template>
  <header class="header mb-5">
    <!--
      *** TOPBAR ***
      _________________________________________________________
      -->
    <div id="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offer mb-3 mb-lg-0">
            <a href="#" class="btn btn-success btn-sm">Offer of the day</a
            ><a href="#" class="ml-1">Get flat 35% off on orders over $50!</a>
          </div>
          <div class="col-lg-6 text-center text-lg-right">
            <ul class="menu list-inline mb-0">
              <li class="list-inline-item" v-if="!this.isLoggedIn">
                <router-link to="/main/customerlogin"
                  >Login/Register</router-link
                >
              </li>
              <li class="list-inline-item" v-if="this.isLoggedIn">
                <div class="user-dropdown-menu-con">
                  <Row
                    type="flex"
                    justify="end"
                    align="middle"
                    class="user-dropdown-innercon"
                  >
                    <Dropdown
                      transfer
                      trigger="click"
                      @on-click="handleClickUserDropdown"
                    >                    
                      <label for=""><language-list></language-list></label>

                      <a href="javascript:void(0)">
                        <span class="main-user-name">{{ userName }}</span>
                        <Icon type="arrow-down-b"></Icon>
                      </a>
                      <DropdownMenu slot="list">
                        <!-- <DropdownItem name="ownSpace">{{L('UserProfile')}}</DropdownItem> -->
                        <DropdownItem name="loginout" divided>{{
                          L("Logout")
                        }}</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <span
                      class="avatar"
                      style="background: #619fe7;margin-left: 10px;"
                      ><img src="../images/usericon.jpg"
                    /></span>
                  </Row>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="login-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Login"
        aria-hidden="true"
        class="modal fade"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Customer login</h5>
              <button
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                class="close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <form action="customer-orders.html" method="post">
                <div class="form-group">
                  <input
                    id="email-modal"
                    type="text"
                    placeholder="email"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <input
                    id="password-modal"
                    type="password"
                    placeholder="password"
                    class="form-control"
                  />
                </div>
                <p class="text-center">
                  <button class="btn btn-primary">
                    <i class="fa fa-sign-in"></i> Log in
                  </button>
                </p>
              </form>
              <p class="text-center text-muted">Not registered yet?</p>
              <p class="text-center text-muted">
                <a href="register.html"><strong>Register now</strong></a
                >! It is easy and done in 1 minute and gives you access to
                special discounts and much more!
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- *** TOP BAR END ***-->
    </div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a href="index.html" class="navbar-brand home"
          ><img
            src="img/logo.png"
            alt="Obaju logo"
            class="d-none d-md-inline-block"
          /><img
            src="img/logo-small.png"
            alt="Obaju logo"
            class="d-inline-block d-md-none"
          /><span class="sr-only">Obaju - go to homepage</span></a
        >
        <div class="navbar-buttons">
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            class="btn btn-outline-secondary navbar-toggler"
          >
            <span class="sr-only">Toggle navigation</span
            ><i class="fa fa-align-justify"></i>
          </button>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#search"
            class="btn btn-outline-secondary navbar-toggler"
          >
            <span class="sr-only">Toggle search</span
            ><i class="fa fa-search"></i></button
          ><a
            href="basket.html"
            class="btn btn-outline-secondary navbar-toggler"
            ><i class="fa fa-shopping-cart"></i
          ></a>
        </div>
        <div id="navigation" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
               <router-link class="nav-link" to="/main/home"
                  >Home</router-link>    
            </li>
            <li v-for="category in list" :key="category.id" class="nav-item">
                <router-link class="nav-link" to="/main/products"
                  >{{ category.name }}</router-link>              
            </li>
          </ul>
          <div class="navbar-buttons d-flex justify-content-end">
            <!-- /.nav-collapse-->
            <div id="search-not-mobile" class="navbar-collapse collapse"></div>
            <a
              data-toggle="collapse"
              href="#search"
              class="btn navbar-btn btn-primary d-none d-lg-inline-block"
              ><span class="sr-only">Toggle search</span
              ><i class="fa fa-search"></i
            ></a>
            <div
              id="basket-overview"
              class="navbar-collapse collapse d-none d-lg-block"
            >
              <a href="basket.html" class="btn btn-primary navbar-btn"
                ><i class="fa fa-shopping-cart"></i
                ><span>3 items in cart</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div id="search" class="collapse">
      <div class="container">
        <form role="search" class="ml-auto">
          <div class="input-group">
            <input type="text" placeholder="Search" class="form-control" />
            <div class="input-group-append">
              <button type="button" class="btn btn-primary">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import AbpBase from "../lib/abpbase";
import Component from "vue-class-component";
import util from "../lib/util";
import LanguageList from "../components/language-list.vue";
@Component({
  components: {
    LanguageList,
  },
})
export default class Header extends AbpBase {
  async created() {
    this.getpage();
  }
  async getpage() {
    await this.$store.dispatch({
      type: "category/getAll",
    });
  }
  get list() {
    return this.$store.state.category.list;
  }
  get loading() {
    return this.$store.state.user.loading;
  }
  HandleLogout() {
    this.$store.commit("app/logout", this);
    util.abp.auth.clearToken();
    location.reload();
  }
  handleClickUserDropdown(name: String) {
    if (name === "ownSpace") {
      util.openNewPage(this, "ownspace_index", null, null);
      this.$router.push({
        name: "ownspace_index",
      });
    } else if (name === "loginout") {
      this.$store.commit("app/logout", this);
      util.abp.auth.clearToken();
      location.reload();
    }
  }

  get userName() {
    return this.$store.state.session.user
      ? this.$store.state.session.user.name
      : "";
  }
  get emailAddress() {
    return this.$store.state.session.user
      ? this.$store.state.session.user.emailAddress
      : "";
  }
  get isLoggedIn() {
    if (this.$store.state.session.user === null) return false;

    return true;
  }
}
</script>

<style></style>
