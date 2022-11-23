<template>
  <component
    :is="tag"
    v-if="$slots.default"
    class="m-content"
  >
    <slot v-if="!loading" />
    <template v-else>
      <m-skeleton-load
        v-for="(item, index) in loaderSet"
        :key="index"
        v-bind="item"
      />
    </template>
  </component>
</template>

<script>
import MSkeletonLoad from "../mSkeletonLoad/mSkeletonLoad.vue";

/**
 * Component helpers content components & Storyblok blocks
 */
export default {
  name: 'MContent',
  components: {MSkeletonLoad},
  props: {
    /**
     * Optional tag to render
     */
    tag: {
      type: String,
      required: false,
      default: 'div',
    },
    /** Loading */
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Loading set mode
     */
    loaderSet: {
      type: Array,
      required: false,
      default: () => [{size:'medium', area: 'long', transparent: false },{size:'medium', area: 'basic', transparent: false},{size:'medium', area: 'basic', transparent: false},{size:'medium', area: 'basic', transparent: false}],
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.m-content {
  margin-top: 4px;
  width: 100%;
}
</style>
