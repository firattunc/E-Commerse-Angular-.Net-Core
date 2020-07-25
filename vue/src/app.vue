<template>
  <div id="app">
    <div id="all">
      <div id="content">
          <router-view></router-view>
      </div>
    </div>
   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class App extends Vue {}
</script>

