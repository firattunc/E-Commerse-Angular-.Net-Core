<template>
 
    <div class="product">
       <div class="flip-container">
          <div class="flipper">
            <div class="front">
              <a href="detail.html">
                <img v-bind:src="product.imgUrl" alt="" class="img-fluid" />
              </a>
            </div>
            <div class="back">
              <a href="detail.html">
                <img src="img/product1_2.jpg" alt="" class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      <a href="detail.html" class="invisible"
        ><img v-bind:src="product.imgUrl" alt="" class="img-fluid"
      /></a>
      <div class="text">
        <h3>
          <a href="detail.html">{{product.name}}</a>
        </h3>
        <p class="price"><del></del>${{product.price}}</p>
        <p class="buttons">
          <a href="detail.html" class="btn btn-outline-secondary">View detail</a
          ><a href="basket.html" class="btn btn-primary"
            ><i class="fa fa-shopping-cart"></i>Add to cart</a
          >
        </p>
      </div>
      <!-- /.text-->
    </div>
    
    <!-- /.product            -->
  
</template>

<script lang="ts">
import AbpBase from "../../../lib/abpbase";
import Component from "vue-class-component";
import {Prop} from 'vue-property-decorator';
@Component
export default class Product extends AbpBase {
  @Prop({default:[]}) product:Product
}
</script>

<style></style>
