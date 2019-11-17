<template>
  <transition name='fade'>
    <div v-show="visible" class="header-detail" @touchmove.stop.prevent>
        <div class="detail-wrapper clear-fix">
          <div class="detail-main">
            <h1 class='name'>{{ seller.name }}</h1>
            <div class="star-wrapper">
              <star :size='48' :score='seller.score'></star>
            </div>
          </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if='seller.supports' class='supports'>
              <li class='support-item' v-for='(item,index) in seller.supports'
                :key='item.id'>
                  <SupportIco :size=2 :type='seller.supports[index].type'
                     class='support-ico'>
                  </SupportIco>
                  <span class='text'>{{seller.supports[index].description}}</span>
                </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class='content'>{{seller.bulletin}}</p>
            </div>

        </div>
        <div class="detail-close" @click='hide'>
          <i class='icon-close'></i>
        </div>
      </div>
  </transition>
</template>

<script>
import popupMixin from 'common/mixins/popup'
import Star from 'components/star/star'
import SupportIco from 'components/support-ico/support-ico'

export default {
  name: 'header-detail',
  mixins: [popupMixin],
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    SupportIco,
    Star
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/mixin"
@import "~common/stylus/variable"

  .header-detail
    position:absolute
    z-index:100
    top:0
    left:0
    width:100%
    display: flex
    flex-flow: column
    min-height: 100vh
    overflow: auto
    backdrop-filter:blur(10px)
    opacity: 1
    color:$color-white
    background: $color-background-s
    &.fade-enter-active,&.fade-leave-active
      transition:all 0.5s
    &.fade-enter,&.fade-leave
      opacity:0
      background:$color-background
    .detail-wrapper
      flex:1
      .detail-main
        padding-top:64px
        padding-bottom:28px
        text-align:center
        .name
          line-height:16px
          font-size:16px
          font-weight:700
          color:rgb(255,255,255)
          padding-bottom:16px
        .star-wrapper
          padding:2px 0
          height:24px
      .title
        margin:0 auto
        display:flex
        height:38px
        width:80%
        padding-bottom:24px
        .line
          flex:1
          height:7px
          border-bottom:1px solid rgba(255,255,255,0.2)
        .text
          padding:0 12px
          font-weight:700
          font-size:$fontsize-medium
    .supports
      width:80%
      margin:0 auto
      .support-item
        display: flex
        align-items: center
        padding:0 12px
        margin-bottom:12px
        &:last-child
          margin-bottom:28px
        .support-ico
          margin-right:6px
        .text
          line-height:16px
          font-size:$fontsize-small
    .bulletin
      width:80%
      margin:0 auto
      .content
        padding:0 12px
        line-height:24px
        font-size:$fontsize-small
    .detail-close
      padding-bottom:32px
      display:flex
      font-size:32px
      justify-content:center
      color:rgba(255,255,255,0.5)








</style>
