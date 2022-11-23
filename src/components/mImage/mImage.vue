<template>
  <figure
    :class="['m-image', `-ratio-${calcRatio}`]"
  >
    <img
      v-if="src && !loading"
      class="img"
      v-lazy="{src}"
    />
    <slot />
    <figcaption
      v-if="copyright || caption"
      class="caption"
    >
      <p
        v-if="caption"
        class="desc"
      >{{ caption }}</p>
      <small
        v-if="copyright"
        class="copyright"
      >
        {{copyright}}
      </small>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'MImage',
  props: {
    /**
     * Image src
     * @param {string} [src=null]
     */
    src: {
      type: String,
      required: false,
      default: '',
    },
   /**
     * Image description
     * @param {string} [alt=null]
     */
    alt: {
      type: String,
      required: false,
      default: null,
    },
    /**
     * Image caption
     * @param {string} [caption=null]
     */
    caption: {
      type: String,
      required: false,
      default: null,
    },
    /**
     * Image copyright
     * @param {string} [copyright=null]
     */
    copyright: {
      type: String,
      required: false,
      default: null,
    },
    /**
     * Predefined image width. If width not provided it will be calculated by available space.
     * @param {number} [width=null]
     */
    width: {
      type: Number,
      required: false,
      default: null,
    },
    /**
     * Predefined image height. If height not provided it will be calculated based on width & ratio.
     * @param {number} [height=null]
     */
    height: {
      type: Number,
      required: false,
      default: null,
    },
    /**
     * Image ratio. If its not provided calculates by width & height.
     * For ratio not specified in styling we need to provide custom styling with paddingTop.
     * @param {String | Object} [ratio=null]
     */
    ratio: {
      type: [String, Object],
      required: false,
      default() {
       return this.$theme()?.components?.MImage?.ratio || 'origin';
      },
    },
    /** Loading */
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    /**
     * Calculate ration based on width & height if its not provided or cast to them predefined ratio.
     * @returns {String|Object|string|*|string}
     */
    calcRatio() {
      if (this.width && this.height) {
        const gcd = this.gcd(this.width, this.height);

        return `${this.width / gcd}x${this.height / gcd}`;
      }

      return this.ratio;
    },

  },
  methods: {
    gcd(a, b) {
      if (!b) {
        return a;
      }

      return this.gcd(b, a % b);
    },
  },
};
</script>

<style lang="scss">
@use "sass:math";

$image__fill: #dcdcdc !default;
$image__ratios: ((16, 9), (4, 3), (1, 1)) !default;

$caption__backgroup: #f8f8f8 !default;
$caption__padding: 8px !default;
$caption__align: left !default;
$caption_desc__color: null !default;
$caption_copyright__color: null !default;
$caption_copyright_prefix: '© ' !default;

// scss-lint:disable ImportantRule
@mixin ratioList($ratios) {
  @each $width, $height in $ratios {
    &.-ratio-#{$width}x#{$height} {
      padding-top: #{math.percentage(math.div($height,$width))};
    }
  }
}
// scss-lint:enable ImportantRule

.m-image {
  align-items: flex-end;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0;
  background-color: $image__fill;

  @include ratioList($image__ratios);

  & > .img {
    bottom: 0;
    display: block;
    height: 100%;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
    z-index: auto;
  }

  &.-ratio-origin > .img {
    position: static;
  }

  .caption {
    background-color: $caption__backgroup;
    padding: $caption__padding;
    text-align: $caption__align;
    width: 100%;

    *:last-child {
      margin-bottom: 0;
    }

    .desc {
      color: $caption_desc__color;
    }

    .copyright {
      color: $caption_copyright__color;

      &::before {
        content: $caption_copyright_prefix;
      }
    }
  }
}
</style>
