<template>
  <div :class="classes" />
</template>

<script>
/**
 * Skeleton load line component. Uses as a helper for loading styling.
 */

export default {
name: 'MSkeletonLoad',
  props: {
    /**
     * Define block size. Available values: small, medium, large. Default: medium.
     */
    size: {
      type: String,
      required: false,
      default: 'medium',
    },

    /**
     * Define block length. Available values: short, basic, long. Default: medium.
     */
    area: {
      type: String,
      required: false,
      default: 'long',
    },

    transparent: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    classes() {
      const classes = ['m-s-load'];

      if (this.transparent) {
        classes.push('-reverse');
      } else {
        classes.push('-block-load');
      }

      if (this.area !== 'full') {
        classes.push(`-l-${this.area}`);
      }

      if (this.size !== 'medium') {
        classes.push(`-s-${this.size}`);
      }

      return classes;
    },
  },
};
</script>

<style lang="scss">
$skeleton-load__fill: #d9d9d9 !default;
$skeleton-load_size--small: 12px !default;
$skeleton-load_size--medium: 14px !default;
$skeleton-load_size--large: 32px !default;

$skeleton-load_area--long: 90% !default;
$skeleton-load_area--basic: 75% !default;
$skeleton-load_area--short: 50% !default;


.m-s-load{
  background-color: $skeleton-load__fill;
  min-height: $skeleton-load_size--medium;
  margin-bottom: $skeleton-load_size--medium * .75;
  width: 100%;
  &.-reverse{
    background-color: #fff;
  }
  &.-s-large {
    min-height: $skeleton-load_size--large;
    margin-bottom: $skeleton-load_size--large * .75;
  }
  &.-s-small {
    min-height: $skeleton-load_size--small;
    margin-bottom: $skeleton-load_size--small * .75;
  }
  &.-l-long {
    width: $skeleton-load_area--long;
  }
  &.-l-basic {
    width: $skeleton-load_area--basic;
  }
  &.-l-short {
    width: $skeleton-load_area--short;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
