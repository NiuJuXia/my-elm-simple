<template>
  <div id="app">
    <v_header :seller='seller'></v_header>
    <div class="tab">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>
<script>
import  v_header from './components/v-header/header.vue'
import tab from './components/tab/tab.vue'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import { getSeller } from 'api'

export default {
name: 'app',
data(){
  return {
    seller:{}
  }
},
computed: {
  tabs() {
    return [
      {
        label: '商品',
        component: Goods,
        data: {
          seller: this.seller
        }
      },
      {
        label: '评论',
        component: Ratings,
        data: {
          seller: this.seller
        }
      },
      {
        label: '商家',
        component: Seller,
        data: {
          seller: this.seller
        }
      }
    ]
  }
},
created(){
  getSeller().then((seller)=>{
    this.seller = seller
    console.log(seller);

  }).catch((err)=>{
    console.log(err);
  })
},
components: {
 v_header,
tab
}
}
</script>

<style lang="stylus" scoped>
  #app
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
</style>
