<template>
  <v-main className="grey lighten-3">
    <div className="core-view">
      <v-fade-transition mode="out-in">
        <nuxt></nuxt>
      </v-fade-transition>
    </div>

    <core-footer/>
  </v-main>
</template>

<script>
import Footer from '@/components/core/Footer';

export default {
  name: 'CoreView',
  components: {
    CoreFooter: Footer,
  },

};
</script>
<style lang="scss" scoped>
// .core-view {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
// }

.container {
  padding: 0 12px !important;
}
</style>
