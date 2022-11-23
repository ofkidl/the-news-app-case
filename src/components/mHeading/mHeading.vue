<template>
  <component
    :is="`h${level}`"
    class="m-heading"
  >
    <template v-if="title && !loading">
      {{ title }}
    </template>
    <slot v-else-if="!loading" />
    <m-skeleton-load
      v-else-if="loading"
      v-bind="skeletonLoader"
    />
  </component>
</template>

<script>
import MSkeletonLoad from "../mSkeletonLoad/mSkeletonLoad.vue";
/**
 * Styled version of H-tag
 */
export default {
  name: 'MHeading',
  components: {
    MSkeletonLoad
  },
  props: {
    /**
     * Heading tag level
     * @param {(1|2|3|4|5|6)} heading level
     */
    level: {
      type: Number,
      default: 1,
      validator: val => val >= 1 && val <= 6,
    },
    /**
     * Title content
     */
    title: {
      type: String,
      default: '',
    },
    /** Loading */
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    skeletonLoader() {
      const loaderMap = {
        1: {size: 'large', area: 'long'},
        2: {size: 'large', area: 'long'},
        3: {size: 'medium', area: 'long'},
        4: {size: 'medium', area: 'long'},
        5: {size: 'small', area: 'long'},
        6: {size: 'small', area: 'long'},
      };

      return loaderMap[this.level] || {};
    },
  },
};
</script>

<style lang="scss">
$heading__color: null !default;
$heading__font-family: null !default;

$heading_tag: (
  h1:( font-size: '40px', line-height: '44px', margin: '8px 0'),
  h2:( font-size: '36px', line-height: '40px', margin: '8px 0'),
  h3:( font-size: '32px', line-height: '36px', margin: '8px 0'),
  h4:( font-size: '28px', line-height: '32px', margin: '8px 0'),
  h5:( font-size: '24px', line-height: '28px', margin: '8px 0'),
  h6:( font-size: '20px', line-height: '24px', margin: '8px 0'),
) !default;

$heading_tag--table: (
  h1:( font-size: '42px', line-height: '46px', margin: '8px 0'),
  h2:( font-size: '38px', line-height: '42px', margin: '8px 0'),
  h3:( font-size: '34px', line-height: '38px', margin: '8px 0'),
  h4:( font-size: '30px', line-height: '34px', margin: '8px 0'),
  h5:( font-size: '26px', line-height: '30px', margin: '8px 0'),
  h6:( font-size: '22px', line-height: '26px', margin: '8px 0'),
) !default;

$heading_tag--desktop: (
  h1:( font-size: '44px', line-height: '48px', margin: '8px 0'),
  h2:( font-size: '40px', line-height: '44px', margin: '8px 0'),
  h3:( font-size: '36px', line-height: '40px', margin: '8px 0'),
  h4:( font-size: '32px', line-height: '36px', margin: '8px 0'),
  h5:( font-size: '28px', line-height: '32px', margin: '8px 0'),
  h6:( font-size: '24px', line-height: '28px', margin: '8px 0'),
) !default;


@mixin heading($style) {
  @each $element, $attrs in $style {
    #{$element},.#{$element}, ._#{$element} {
      @each $attr, $val in $attrs {
        #{$attr}: #{$val};
      }
    }
  }
}

h1,h2,h3,h4,h5,h6,
.h1,.h2,.h3,.h4,.h5,.h6,
._h1,._h2,._h3,._h4,._h5,._h6{
  width: 100%;
  color: $heading__color;
  font-family: $heading__font-family;
}
@include heading($heading_tag);

@media only screen and (max-width: 1024px) and (min-width: 600px){
@include heading($heading_tag--table);
}

@media only screen and (min-width: 1024px){
  @include heading($heading_tag--desktop);
}
</style>
