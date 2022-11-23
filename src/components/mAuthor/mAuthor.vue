<template>
  <div class="m-author">
    <m-image src="/avatar.webp" ratio="1x1"/>
    <div v-if="!loading" >{{name || 'not provided'}}</div>
    <m-skeleton-load
        v-else
        v-bind="{size: 'small', area: 'short'}"
    />
  </div>
</template>
<script>
import MImage from "../mImage/mImage.vue";
import MSkeletonLoad from "../mSkeletonLoad/mSkeletonLoad.vue";

export default {
  name: 'MAuthor',
  components: {
    MImage,
    MSkeletonLoad
  },
  props: {
    name: {
      type: String,
      required: false,
      default: null
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
.m-author {
  max-width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px 0;
  .m-image {
    border-radius: 50%;
    margin-right: 16px;
    width: 40px;
    padding-top: 40px;
  }
}
</style>
