<style lang="less">
    @import "./main.less";
</style>
<template>
  <div class="main" :class="{ 'main-hide-text': shrink }">
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
                 
                   <router-link to="/main/customerlogin">Login/Register</router-link>                    
                </li>              
                 <li class="list-inline-item" v-if="this.isLoggedIn">
                    
                     <div class="user-dropdown-menu-con">
                        <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                        
                            <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                                 <label for=""><language-list></language-list></label>  
                                <a href="javascript:void(0)">
                                    <span class="main-user-name">{{ userName }}</span>
                                    <Icon type="arrow-down-b"></Icon>
                                </a>
                                <DropdownMenu slot="list">
                                    <!-- <DropdownItem name="ownSpace">{{L('UserProfile')}}</DropdownItem> -->
                                    <DropdownItem name="loginout" divided>{{L('Logout')}}</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <span class="avatar" style="background: #619fe7;margin-left: 10px;"><img src="../images/usericon.jpg" /></span>
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
                <a href="#" class="nav-link active">Home</a>
              </li>
              <li class="nav-item dropdown menu-large">
                <a
                  href="#"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                  class="dropdown-toggle nav-link"
                  >Men<b class="caret"></b
                ></a>
                <ul class="dropdown-menu megamenu">
                  <li>
                    <div class="row">
                      <div class="col-md-6 col-lg-3">
                        <h5>Clothing</h5>
                        <ul class="list-unstyled mb-3">
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >T-shirts</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Shirts</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Pants</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Accessories</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-lg-3">
                        <h5>Shoes</h5>
                        <ul class="list-unstyled mb-3">
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Trainers</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Sandals</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Hiking shoes</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Casual</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-lg-3">
                        <h5>Accessories</h5>
                        <ul class="list-unstyled mb-3">
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Trainers</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Sandals</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Hiking shoes</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Casual</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Hiking shoes</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Casual</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-lg-3">
                        <h5>Featured</h5>
                        <ul class="list-unstyled mb-3">
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Trainers</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Sandals</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Hiking shoes</a
                            >
                          </li>
                        </ul>
                        <h5>Looks and trends</h5>
                        <ul class="list-unstyled mb-3">
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Trainers</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Sandals</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Hiking shoes</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown menu-large">
                <a
                  href="#"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                  class="dropdown-toggle nav-link"
                  >Ladies<b class="caret"></b
                ></a>
                <ul class="dropdown-menu megamenu">
                  <li>
                    <div class="row">
                      <div class="col-md-6 col-lg-3">
                        <h5>Clothing</h5>
                        <ul class="list-unstyled mb-3">
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >T-shirts</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Shirts</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Pants</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Accessories</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-lg-3">
                        <h5>Shoes</h5>
                        <ul class="list-unstyled mb-3">
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Trainers</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Sandals</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Hiking shoes</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Casual</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-lg-3">
                        <h5>Accessories</h5>
                        <ul class="list-unstyled mb-3">
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Trainers</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Sandals</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Hiking shoes</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Casual</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Hiking shoes</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Casual</a>
                          </li>
                        </ul>
                        <h5>Looks and trends</h5>
                        <ul class="list-unstyled mb-3">
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Trainers</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link">Sandals</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Hiking shoes</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-lg-3">
                        <div class="banner">
                          <a href="#"
                            ><img
                              src="img/banner.jpg"
                              alt=""
                              class="img img-fluid"
                          /></a>
                        </div>
                        <div class="banner">
                          <a href="#"
                            ><img
                              src="img/banner2.jpg"
                              alt=""
                              class="img img-fluid"
                          /></a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown menu-large">
                <a
                  href="#"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                  class="dropdown-toggle nav-link"
                  >Template<b class="caret"></b
                ></a>
                <ul class="dropdown-menu megamenu">
                  <li>
                    <div class="row">
                      <div class="col-md-6 col-lg-3">
                        <h5>Shop</h5>
                        <ul class="list-unstyled mb-3">
                          <li class="nav-item">
                            <a href="index.html" class="nav-link">Homepage</a>
                          </li>
                          <li class="nav-item">
                            <a href="category.html" class="nav-link"
                              >Category - sidebar left</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category-right.html" class="nav-link"
                              >Category - sidebar right</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="category-full.html" class="nav-link"
                              >Category - full width</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="detail.html" class="nav-link"
                              >Product detail</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-lg-3">
                        <h5>User</h5>
                        <ul class="list-unstyled mb-3">
                          <li class="nav-item">
                            <a href="register.html" class="nav-link"
                              >Register / login</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="customer-orders.html" class="nav-link"
                              >Orders history</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="customer-order.html" class="nav-link"
                              >Order history detail</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="customer-wishlist.html" class="nav-link"
                              >Wishlist</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="customer-account.html" class="nav-link"
                              >Customer account / change password</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-lg-3">
                        <h5>Order process</h5>
                        <ul class="list-unstyled mb-3">
                          <li class="nav-item">
                            <a href="basket.html" class="nav-link"
                              >Shopping cart</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="checkout1.html" class="nav-link"
                              >Checkout - step 1</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="checkout2.html" class="nav-link"
                              >Checkout - step 2</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="checkout3.html" class="nav-link"
                              >Checkout - step 3</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="checkout4.html" class="nav-link"
                              >Checkout - step 4</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-lg-3">
                        <h5>Pages and blog</h5>
                        <ul class="list-unstyled mb-3">
                          <li class="nav-item">
                            <a href="blog.html" class="nav-link"
                              >Blog listing</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="post.html" class="nav-link">Blog Post</a>
                          </li>
                          <li class="nav-item">
                            <a href="faq.html" class="nav-link">FAQ</a>
                          </li>
                          <li class="nav-item">
                            <a href="text.html" class="nav-link">Text page</a>
                          </li>
                          <li class="nav-item">
                            <a href="text-right.html" class="nav-link"
                              >Text page - right sidebar</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="404.html" class="nav-link">404 page</a>
                          </li>
                          <li class="nav-item">
                            <a href="contact.html" class="nav-link">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="navbar-buttons d-flex justify-content-end">
              <!-- /.nav-collapse-->                            
              <div
                id="search-not-mobile"
                class="navbar-collapse collapse"
              ></div>
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
    <keep-alive :include="cachePage">
      <router-view></router-view>
    </keep-alive>

    <div id="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <h4 class="mb-3">Pages</h4>
            <ul class="list-unstyled">
              <li><a href="text.html">About us</a></li>
              <li><a href="text.html">Terms and conditions</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="contact.html">Contact us</a></li>
            </ul>
            <hr />
            <h4 class="mb-3">User section</h4>
            <ul class="list-unstyled">
              <li>
                <a href="#" data-toggle="modal" data-target="#login-modal"
                  >Login</a
                >
              </li>
              <li><a href="register.html">Regiter</a></li>
            </ul>
          </div>
          <!-- /.col-lg-3-->
          <div class="col-lg-3 col-md-6">
            <h4 class="mb-3">Top categories</h4>
            <h5>Men</h5>
            <ul class="list-unstyled">
              <li><a href="category.html">T-shirts</a></li>
              <li><a href="category.html">Shirts</a></li>
              <li><a href="category.html">Accessories</a></li>
            </ul>
            <h5>Ladies</h5>
            <ul class="list-unstyled">
              <li><a href="category.html">T-shirts</a></li>
              <li><a href="category.html">Skirts</a></li>
              <li><a href="category.html">Pants</a></li>
              <li><a href="category.html">Accessories</a></li>
            </ul>
          </div>
          <!-- /.col-lg-3-->
          <div class="col-lg-3 col-md-6">
            <h4 class="mb-3">Where to find us</h4>
            <p>
              <strong>Obaju Ltd.</strong><br />13/25 New Avenue<br />New
              Heaven<br />45Y 73J<br />England<br /><strong
                >Great Britain</strong
              >
            </p>
            <a href="contact.html">Go to contact page</a>
            <hr class="d-block d-md-none" />
          </div>
          <!-- /.col-lg-3-->
          <div class="col-lg-3 col-md-6">
            <h4 class="mb-3">Get the news</h4>
            <p class="text-muted">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
            <form>
              <div class="input-group">
                <input type="text" class="form-control" /><span
                  class="input-group-append"
                >
                  <button type="button" class="btn btn-outline-secondary">
                    Subscribe!
                  </button></span
                >
              </div>
              <!-- /input-group-->
            </form>
            <hr />
            <h4 class="mb-3">Stay in touch</h4>
            <p class="social">
              <a href="#" class="facebook external"
                ><i class="fa fa-facebook"></i></a
              ><a href="#" class="twitter external"
                ><i class="fa fa-twitter"></i></a
              ><a href="#" class="instagram external"
                ><i class="fa fa-instagram"></i></a
              ><a href="#" class="gplus external"
                ><i class="fa fa-google-plus"></i></a
              ><a href="#" class="email external"
                ><i class="fa fa-envelope"></i
              ></a>
            </p>
          </div>
          <!-- /.col-lg-3-->
        </div>
        <!-- /.row-->
      </div>
      <!-- /.container-->
    </div>
    <!-- /#footer-->
    <!-- *** FOOTER END ***-->

    <!--
    *** COPYRIGHT ***
    _________________________________________________________
    -->
    <div id="copyright">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-2 mb-lg-0">
            <p class="text-center text-lg-left">©2019 Your name goes here.</p>
          </div>
          <div class="col-lg-6">
            <p class="text-center text-lg-right">
              Template design by
              <a href="https://bootstrapious.com/p/big-bootstrap-tutorial"
                >Bootstrapious</a
              >
              <!-- If you want to remove this backlink, pls purchase an Attribution-free License @ https://bootstrapious.com/p/obaju-e-commerce-template. Big thanks!-->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject, Prop, Watch } from "vue-property-decorator";
import shrinkableMenu from "../components/shrinkable-menu/shrinkable-menu.vue";
import tagsPageOpened from "../components/tags-page-opened.vue";
import breadcrumbNav from "../components/breadcrumb-nav.vue";
import fullScreen from "../components/fullscreen.vue";
import lockScreen from "../components/lockscreen/lockscreen.vue";
import notice from "../components/notices/notice.vue";
import util from "../lib/util";
import copyfooter from "../components/Footer.vue";
import LanguageList from "../components/language-list.vue";
import AbpBase from "../lib/abpbase";
@Component({
  components: {
    shrinkableMenu,
    tagsPageOpened,
    breadcrumbNav,
    fullScreen,
    lockScreen,
    notice,
    copyfooter,
    LanguageList,
  },
})
export default class Main extends AbpBase {
  shrink: boolean = false;
   HandleLogout(){
      this.$store.commit('app/logout', this);
            util.abp.auth.clearToken();
            location.reload();
  }
  
  get userName() {
    return this.$store.state.session.user
      ? this.$store.state.session.user.name
      : "";
  }
  get emailAddress(){
    return this.$store.state.session.user
      ? this.$store.state.session.user.emailAddress
      : "";
  }
  get isLoggedIn(){    
    if(this.$store.state.session.user===null)
    return false;
     
     return true;
  }
  isFullScreen: boolean = false;
  messageCount: string = "0";
  get openedSubmenuArr() {
    return this.$store.state.app.openedSubmenuArr;
  }
  get menuList() {
    return this.$store.state.app.menuList;
  }
  get pageTagsList() {
    return this.$store.state.app.pageOpenedList as Array<any>;
  }
  get currentPath() {
    return this.$store.state.app.currentPath;
  }
  get lang() {
    return this.$store.state.app.lang;
  }
  get avatorPath() {
    return localStorage.avatorImgPath;
  }
  get cachePage() {
    return this.$store.state.app.cachePage;
  }
  get menuTheme() {
    return this.$store.state.app.menuTheme;
  }
  get mesCount() {
    return this.$store.state.app.messageCount;
  }
  init() {
    let pathArr = util.setCurrentPath(this, this.$route.name as string);
    this.$store.commit("app/updateMenulist");
    if (pathArr.length >= 2) {
      this.$store.commit("app/addOpenSubmenu", pathArr[1].name);
    }
    let messageCount = 3;
    this.messageCount = messageCount.toString();
    this.checkTag(this.$route.name);
  }
  toggleClick() {
    this.shrink = !this.shrink;
  }
  handleClickUserDropdown(name: string) {
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
  checkTag(name?: string) {
    let openpageHasTag = this.pageTagsList.some((item: any) => {
      if (item.name === name) {
        return true;
      } else {
        return false;
      }
    });
    if (!openpageHasTag) {
      util.openNewPage(
        this,
        name as string,
        this.$route.params || {},
        this.$route.query || {}
      );
    }
  }
  handleSubmenuChange(val: string) {
    // console.log(val)
  }
  beforePush(name: string) {
    if (name === "accesstest_index") {
      return false;
    } else {
      return true;
    }
  }
  fullscreenChange(isFullScreen: boolean) {
    // console.log(isFullScreen);
  }
  @Watch("$route")
  routeChange(to: any) {
    this.$store.commit("app/setCurrentPageName", to.name);
    let pathArr = util.setCurrentPath(this, to.name);
    if (pathArr.length > 2) {
      this.$store.commit("app/addOpenSubmenu", pathArr[1].name);
    }
    this.checkTag(to.name);
    localStorage.currentPageName = to.name;
  }
  @Watch("lang")
  langChange() {
    util.setCurrentPath(this, this.$route.name as string);
  }
  mounted() {
    this.init();
  }
  created() {
    this.$store.commit("app/setOpenedList");
  }
}
</script>
