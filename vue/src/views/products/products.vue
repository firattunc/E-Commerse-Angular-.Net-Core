<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <!-- breadcrumb-->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li aria-current="page" class="breadcrumb-item active">Ladies</li>
          </ol>
        </nav>
      </div>

      <div class="col-lg-12">
        <div class="box info-bar">
          <div class="row">
            <div class="col-md-12 col-lg-4 products-showing">
              Showing <strong>{{ maxResultCount }}</strong> of
              <strong>{{ totalCount }}</strong> products
            </div>
            <div class="col-md-12 col-lg-7 products-number-sort">
              <div
                class="form-inline d-block d-lg-flex justify-content-between flex-column flex-md-row"
              >
                <div class="products-number">
                  <strong>Show</strong
                  ><button
                    v-on:click="maxResultCountChange(1)"
                    href="#"
                    class="btn btn-outline-secondary btn-sm"
                  >
                    1</button
                  ><button
                    v-on:click="maxResultCountChange(2)"
                    href="#"
                    class="btn btn-outline-secondary btn-sm"
                  >
                    2</button
                  ><button
                    v-on:click="maxResultCountChange(totalCount)"
                    href="#"
                    class="btn btn-outline-secondary btn-sm"
                  >
                    All</button
                  ><span>products</span>
                </div>
                <div class="products-sort-by mt-2 mt-lg-0">
                  <strong>Sort by Price</strong>
                  <button
                    v-on:click="SortByPrice"
                    v-if="!isSorted"
                    class="btn btn-primary"
                  >
                    Sort
                  </button>
                  <button
                    v-on:click="SortByPrice"
                    v-if="isSorted"
                    class="btn btn-danger"
                  >
                    Remove Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row products">
          <div
            class="col-lg-4 col-md-6"
            v-for="product in list"
            :key="product.id"
          >
            <Product :product="product" />
          </div>
          <!-- /.products-->
        </div>
      </div>
      <!-- /.col-lg-9-->
    </div>
  </div>
</template>

<script lang="ts">
import AbpBase from "../../lib/abpbase";
import Product from "./product/product.vue";
import Util from "@/lib/util";
import Component from "vue-class-component";
import PageRequest from "@/store/entities/page-request";
class PageUserRequest extends PageRequest {
  keyword: string;
  isActive: boolean = null; //nullable
  from: Date;
  to: Date;
}
@Component({
  components: {
    Product,
  },
})
export default class Products extends AbpBase {
  //filters
  pagerequest: PageUserRequest = new PageUserRequest();
  creationTime: Date[] = [];
  async created() {
    this.getpage();
  }
  SortByPrice() {
    this.$store.commit("product/setSort");
    this.getpage();
  }
  get list() {
    return this.$store.state.product.list;
  }
  maxResultCountChange(maxResultCount: number) {
    this.$store.commit("product/setMaxResultCount", maxResultCount);
    this.getpage();
  }
  pageChange(page: number) {
    this.$store.commit("product/setCurrentPage", page);
    this.getpage();
  }
  pagesizeChange(pagesize: number) {
    this.$store.commit("product/setPageSize", pagesize);
    this.getpage();
  }
  async getpage() {
    this.pagerequest.maxResultCount = this.pageSize;
    this.pagerequest.skipCount = (this.currentPage - 1) * this.pageSize;
    //filters

    if (this.creationTime.length > 0) {
      this.pagerequest.from = this.creationTime[0];
    }
    if (this.creationTime.length > 1) {
      this.pagerequest.to = this.creationTime[1];
    }

    await this.$store.dispatch({
      type: "product/getAll",
      data: this.pagerequest,
    });
  }
  get maxResultCount() {
    return this.$store.state.product.maxResultCount;
  }
  get isSorted() {
    return this.$store.state.product.isSorted;
  }
  get pageSize() {
    return this.$store.state.product.pageSize;
  }
  get totalCount() {
    return this.$store.state.product.totalCount;
  }
  get currentPage() {
    return this.$store.state.product.currentPage;
  }
}
</script>

<style></style>
