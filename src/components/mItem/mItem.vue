<template>
  <router-link :to="{name: post.type, params: {id: post.id} }" class="m-item">
    <m-image :loading="loading" :src="post.src || '/image-404.png'" ratio="1x1" >
      <m-tag :loading="loading" class="paid" :text="post.paid ? 'paid' : '$$$'" v-if="!post.free" />
    </m-image>
    <m-heading :loading="loading" :level="6" :title="post.title"></m-heading>
  </router-link>
</template>
<script>
import MHeading from '../mHeading/mHeading.vue'
import MImage from "../mImage/mImage.vue";
import MTag from "../mTag/mTag.vue";

export default {
  name: 'MItem',
  components: {MTag, MImage, MHeading},
  props: {
    post: {
      type: Object,
      required: true
    },
    /** Loading */
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  }

}
</script>
<style lang="scss">
.m-item {
  .paid {
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
}
</style>
