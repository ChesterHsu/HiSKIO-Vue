<template>
  <v-navigation-drawer
    v-model="ShoppingCarDrawer"
    :right="Right"
    width="400"
    fixed
  >
    <v-list-item-title class="title">
      <v-icon type="button" @click="closeShoppingDrawer">mdi-close</v-icon>
      <v-list-item v-for="(item, index) in ShoppingItems" :key="index">
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        >
          <v-img :src="item.image"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1" style="white-space: normal;">
            {{ item.name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ item.total | currency | filterDollarSign }}</v-list-item-subtitle>
          <v-divider></v-divider>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-title>
  </v-navigation-drawer>
</template>
<script>
import { mapMutations } from 'vuex';
import ApiService from '@/services/api-service.js';

export default {
  filters:{
    currency(price){
      return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    },
    filterDollarSign(price){
      return `$ ${price}`
    }
  },
  props: {
    ShoppingCarDrawer: Boolean,
  },
  data: () => ({
    Right: true,
    ShoppingItems: [],
  }),
  methods: {
    ...mapMutations('app', [
      'setShoppingCarID',
      'clearShoppingCarID'
    ]),
    closeShoppingDrawer() {
      this.$emit('closeShoppingDrawer');
    }
  },
  watch: {
    '$store.state.app.SetShoppingCarID'(val) {
      console.log('add');
      if (val === null){
        return;
      }
      const getCarts = {
        items: [
          {
            id: val ,
            coupon: "",
          }
        ],
        coupon: "",
      }
      ApiService.getCarts(this.$axios, getCarts).then(
        (response) => {
          console.log(response);
          this.ShoppingItems.push(response.data[0]);
        }
      );
      this.setShoppingCarID(null);

    },
    '$store.state.app.clearShoppingCarID'(val) {
      if (val === null){
        return;
      }
      this.ShoppingItems.forEach((element, index) => {
        if (element.id == val) {
          this.ShoppingItems.splice(index, 1);
        }
      })
      this.clearShoppingCarID(null);
    },
  },
};
</script>
