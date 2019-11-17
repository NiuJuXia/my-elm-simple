<template>
<div class="v-header" @click='showDetail'>
  <div class="content-wrapper">
    <div class="avatar">
      <img :src="seller.avatar" width="64" height="64">
    </div>
    <div class="content">
      <div class="title">
        <span class='brand'> </span>
        <span class='name'> {{ seller.name }} </span>
      </div>
      <div class="description">
        {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
      </div>
      <div v-if="seller.supports" class='support'>
        <span class='icon'></span>
        <span class='text'>{{ seller.supports[0].description }}</span>
      </div>
    </div>
    <div class="support-count" v-if='seller.supports' @click='showDetail'>

        <span class='count'>{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>

    </div>
  </div>
  <div class="bulletin-wrapper" v-if='seller.bulletin' @click='showDetail'>
    <span class="bulletin-title"></span>
    <span class="bulletin-text">{{ seller.bulletin }}</span>
    <i class="icon-keyboard_arrow_right"></i>
  </div>
  <div class="background">
    <img :src="seller.avatar" width="100%" height="100%">
  </div>

</div>
</template>

<script>


export default {
   props:{
     seller:{
       type:Object
     }
   },
   data(){
     return{
       detailShow:false
     }
   },
   methods:{
     showDetail(){
       this.headerDetailComp = this.headerDetailComp || this.$createHeaderDetail({
         $props:{
           seller:'seller'
         }
       })
       this.headerDetailComp.show()
     }
   }
}
</script>

<style lang="scss" scoped>

   .v-header{
     background: rgba(7,17,27,0.5);
     color:#fff;
     position: relative;
     overflow: hidden;
       .content-wrapper{
         padding: 24px 12px 18px 24px;
         display:flex;
        position: relative;
         .content{
           padding-left: 16px;
           .title{
             padding: 2px 0 8px 0;

             .brand{
               display: inline-block;
               width: 30px;
               height: 18px;
               background-image: url('./source/brand@2x.png');
               background-size: 30px 18px;
             };
             .name{
               vertical-align: top;
               font-size: 16px;
               color: rgb(255,255,255);
               font-weight: bold;
               line-height: 18px;
               padding-left: 6px
             }
           };
           .description{
             font-size: 12px;
             color:rgb(255,255,255);
             font-weight: 100;
             line-height: 12px;

             padding-bottom: 10px;
           };
           .support{
             .icon{
               display: inline-block;
               width: 12px;
               height: 12px;
               background-size: 12px;
             };
             .text{
               padding-top: 0px;
               padding-left: 4px;
               color:rgb(255,255,255);
               font-weight: 100;
               line-height: 12px;
               font-size: 10px;
               vertical-align: top;


             }

           }
         };
         .support-count{
           position: absolute;
           right: 12px;
           bottom: 18px;
           height: 24px;
           vertical-align: center;
           border-radius:20px;
           background-color: rgba(0,0,0,0.2);
           padding: 6px 8px;

           display: flex;
           justify-content: center;
           align-items: center;
             .count{


               font-size: 12px;
               color:rgb(255,255,255);
               font-weight: 100;

               padding-right: 2px;


             };

         }
       };
       .bulletin-wrapper{
         height: 28px;
         position: relative;
         line-height: 28px;
         padding: 0 22px 0 12px;
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
         background-color: rgba(7,17,27,0.2);
         .bulletin-title{
           display: inline-block;
           width: 22px;
           height: 12px;
           line-height: 28px;
           background-image: url('./source/bulletin@2x.png');
           background-size: 22px 12px;

           margin-right: 4px;
         };
         .bulletin-text{
           vertical-align: top;
           font-size: 10px;
           color:rgb(255,255,255);
           font-weight: 100;
           line-height: 28px;
         };
         .icon-keyboard_arrow_right{
           position: absolute;
           right: 12px;
           bottom: 5px;
         }
       };
       .background{
         position: absolute;
         width: 100%;
         height: 100%;
         z-index: -1;
         left: 0;
         top: 0;
         filter: blur(10px);
       }
       .detail{
         position: fixed;
         overflow: auto;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
         z-index: 100;
         background: rgba(7,17,27,0.8);
         display: flex;
         flex-direction: column;
         min-height: 100vh;
         color: (7,17,27,0.8);
         blur:10px;
         .content{
           flex:1;
           padding-top: 64px;
           padding-left: 36px;
           padding-right: 36px;
         };
         .footer{
           font-size: 32px;
           color:rgba(255,255,255,0.5);
           text-align: center;
           padding-bottom: 32px;
         }

       }
   }
</style>
