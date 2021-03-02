<template>
  <v-app>
    <core-app-bar />
    <core-shopping-drawer v-model="ShowSoppingCar"/>
    <core-view />
  </v-app>
</template>

<script>
import AppBar from '@/components/core/AppBar';
import ShoppingCar from "@/components/core/ShoppingCar";
import View from "@/components/core/View";

export default {
  components: {
    CoreAppBar: AppBar,
    CoreShoppingDrawer: ShoppingCar,
    CoreView: View,
  },
  data: () => ({
    ShowSoppingCar: false,
  }),

}
</script>
