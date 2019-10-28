<template name="component-name">
  <div>
    <div class="v-tabs-wrap" activecolor="#FFB244">
      <Header :offset="1"></Header>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header/header.vue";
export default {
  components: {
    Header
  }
};
</script>