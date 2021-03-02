<template>
  <v-app id="inspire">
    <v-carousel hide-delimiters >
      <v-carousel-item
        v-for="(item,i) in FundraisingItems"
        :key="i"
        :src="item.blur"
      />
    </v-carousel>
    <v-row>
      <v-col v-for="(item, i) in FundraisingItems" :key="i">
        <v-card
          max-width="300"
          height="400"
        >
          <v-hover v-slot="{ hover }">
            <v-img :src="item.blur">
              <v-btn icon >
                <v-icon
                  :class="{ 'show-btns': hover}"
                  :color="Transparent"
                  @click="shoppingCar(item)"
                >
                  mdi-cart-outline
                </v-icon>
              </v-btn>
            </v-img>
          </v-hover>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle>
            <v-avatar size="34">
              <img
                :src="item.lecturers[0].avatar"
                :alt="item.lecturers[0].username"
              >
            </v-avatar>
            {{ item.lecturers[0].username }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import ApiService from '@/services/api-service.js';
import { mapMutations } from 'vuex';

export default {
  mounted() {
    this.getFundraising();
  },
  data: () => ({
    FundraisingItems: [],
    Transparent: 'rgba(255, 255, 255, 0)',
    ShoppingCarIDGroup: [],
  }),
  methods: {
    ...mapMutations('app', ['setShoppingCarID','clearShoppingCarID']),
    getFundraising() {
      ApiService.getFundraising(this.$axios).then(
        (response) => {
          this.FundraisingItems = response;
        }
      );
    },
    shoppingCar(val) {
      if (this.ShoppingCarIDGroup.indexOf(val.id) >= 0) {
        this.clearShoppingCarID(val.id);
        this.ShoppingCarIDGroup.splice(this.ShoppingCarIDGroup.indexOf(val.id), 1);
      } else {
        this.setShoppingCarID(val.id);
        this.ShoppingCarIDGroup.push(val.id);
      }

    }
  },
}
</script>
<style>
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
