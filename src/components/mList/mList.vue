<template>
  <div v-if="items.length" class="m-list">
    <m-heading :level="3" :title="header"></m-heading>
    <ul class="items">
      <li v-for="item in items">
        <m-item :post="item" :loading="loading" />
      </li>
    </ul>
  </div>
</template>
<script>
import MHeading from '../mHeading/mHeading.vue'
import MItem from '../mItem/mItem.vue'

export default {
  name: 'MList',
  components: {
    MItem,
    MHeading
  },
  props: {
    header: {
      type: String,
      required: false,
      default: null,
    },
    items: {
      type: Array,
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
<style lang="scss" scoped>
  .m-list {
    text-align: center;
    .items {
      justify-content: center;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;

      li {
        list-style: none;
        width: 25%;
        min-width: 300px;
        padding: 1em;
      }
    }
  }
</style>
