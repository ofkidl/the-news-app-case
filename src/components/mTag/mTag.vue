<template>
  <div
    v-if="text || $slots.default || loading"
    :class="['m-tag',{'-load': loading}]"
  >
    <slot>{{ text || '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' }}</slot>
  </div>
</template>

<script>
/**
 * Tag component.
 *
 *
 * <p><b>Available SASS variables:</b></p>
 * <p>Style variables can be overwrite in <code>./assets/theme/variables.scss</code>:</p>
 * <table style="width:100%;">
 *   <thead>
 *  <tr><th align="left">Variable</th><th align="left">Default value</th><th  align="left">Description</th></tr>
 *  </thead>
 *  <tbody>
 *  <tr><td>$tag__color</td><td>\#000</td><td>Tag text color</td></tr>
 *  <tr><td>$tag__fill</td><td>\#f8f8f8</td><td>Tag fill color</td></tr>
 *  <tr><td>$tag__border</td><td>null</td><td>Tag border styling</td></tr>
 *  <tr><td>$tag__border-radius</td><td>20px</td><td>Tag</td></tr>
 *  <tr><td>$tag__font-size</td><td>12px</td><td>Tag font size</td></tr>
 *  <tr><td>$tag__height</td><td>20px</td><td>Tag height</td></tr>
 *  <tr><td>$tag__padding</td><td>4px 8px</td><td>Tag padding</td></tr>
 *  <tr><td>$tag__gutter</td><td>8px</td><td>Gutter for html tags in tag</td></tr>
 *  <tr><td>$tag_color-swatch__size</td><td>20px</td><td>Color swatch size</td></tr>
 *  <tr><td>$tag_load__fill</td><td>\#d9d9d9</td><td>Tag background on load</td></tr>
 *  <tr><td>$tag__min-width</td><td>50px</td><td>Min width for tag component</td></tr>
 *  </tbody>
 * </table>
 */

export default {
  name: 'MTag',
  props: {
    /**
     * Provide tag content through text attr ot via slot
     */
    text: {
      type: String,
      required: false,
      default: null,
    },
    /** Loading */
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss">
$tag__color: #fff !default;
$tag__fill: #646cff !default;
$tag__border: null !default;
$tag__border-radius: 20px !default;
$tag__font-size: 12px !default;
$tag__height: 20px !default;
$tag__padding: 4px 8px !default;
$tag__gutter: 8px !default;
$tag_color-swatch__size: 20px !default;
$tag_load__fill: #d9d9d9 !default;
$tag__min-width: null !default;
.m-tag {
  align-items: center;
  background-color: $tag__fill;
  border: $tag__border;
  border-radius: $tag__border-radius;
  color: $tag__color;
  display: flex;
  font-size: $tag__font-size;
  height: $tag__height;
  padding: $tag__padding;
  width: fit-content;
  min-width: $tag__min-width;

  > * {
    margin-right: $tag__gutter;
  }

  > *:last-child {
    margin-right: 0;
  }

  .m-swatcher {
    cursor: auto;
  }

  > .color {
    border: 0;
    display: inline-block;
    height: $tag_color-swatch__size;
    min-width: $tag_color-swatch__size;
    width: auto;

    &::before {
      border: 0;
    }
  }

  > .attribute {
    white-space: nowrap;
  }

  &.-load {
    background-color: transparent;
    border-color: $tag_load__fill;
    color: transparent;
  }
}
</style>
