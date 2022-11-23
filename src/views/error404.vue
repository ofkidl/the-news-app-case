<template>
<div>
  <m-heading :level="3" title="Vi finner ikke  artikkelen." />
  <m-content>
    Gå tilbake <router-link :to="{name:'frontpage'}" title="Forside">til forsiden</router-link>.
  </m-content>
</div>
</template>
<script>
import MHeading from "../components/mHeading/mHeading.vue";
import MContent from "../components/mContent/mContent.vue";
export default {
  components: {MContent, MHeading}
}
</script>
