<template>
  <v-app>
    <core-app-bar />
    <core-view />
  </v-app>
</template>

<script>
import AppBar from '@/components/core/AppBar';
import View from "@/components/core/View";
export default {
  components: {
    CoreAppBar: AppBar,
    CoreView: View,
  },
}
</script>
