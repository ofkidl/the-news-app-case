<template>
  <button
    :type="nativeType"
    :class="[ 'm-button']"
    @click="$emit('onClick', $event)"
  >
    <!-- @slot Allow to put any component inside button like mIcon & text -->
    <span :class="['content', {'-processing': processing}]">
      <slot />
    </span>
    <span
      v-if="processing"
      class="loader-over"
    >
      ...
    </span>
  </button>
</template>

<script>
/**
 * Button component
 */

export default {
  name: 'MButton',
  provide() {
    return {
      groupSize: this.size,
    };
  },
  props: {
    /**
     * Type of button. List of available type: submit, reset, button (default)
     * @param {'button'| 'submit' | 'reset'} [nativeType=button]
     */
    nativeType: {
      type: String,
      required: false,
      default: 'button',
      validator: (value) => {
        return ['button', 'submit', 'reset'].includes(value);
      },
    },
    /**
     * Processing mode
     */
    processing: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss">
$button_border-width: 1px !default;
$button_border-style: solid !default;
$button__border-radius: 30px !default;
$button__height: 60px !default;
$button__font-size: 20px !default;
$button__min-width: 180px !default;
$button__padding-horizontal: 20px !default;
$button_basic__fill--active: null !default;
$button_loading__fill: #d9d9d9 !default;
$button_loading__border-color: #d9d9d9 !default;

.m-button,
button.m-button {
  position: relative;
  -webkit-appearance: none;
  border-radius: $button__border-radius;
  border-width: $button_border-width;
  box-sizing: border-box;
  cursor: pointer;
  font-size: $button__font-size;
  height: $button__height;
  line-height: 1;
  min-width: $button__min-width;
  outline: none;
  overflow: hidden;
  padding: 0 $button__padding-horizontal;
  text-align: center;
  transition: all .3s ease;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    :not(:last-child) {
      margin-right: 8px;
    }
    &.-processing{
      color: transparent !important;
    }
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:active,
  &.is-active,
  &.-active {
    outline: none;
  }
}
</style>
