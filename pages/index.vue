<template>
  <v-app id="inspire">
    <v-card flat>
      <v-carousel hide-delimiters >
        <v-carousel-item
          v-for="(item,i) in FundraisingItems"
          :key="i"
          :src="item.blur"
        >
        </v-carousel-item>
      </v-carousel>

      <v-card class="mx-auto w-4/6 h-36 -m-14 ">
        <v-toolbar flat>
          <v-toolbar-title class="grey--text">
            Title
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-apps</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>

        <v-divider></v-divider>

        <v-card-text style="height: 200px;"></v-card-text>
      </v-card>
    </v-card>
  </v-app>
</template>

<script>
import ApiService from '@/services/api-service.js';

export default {
  mounted() {
    this.getFundraising();
  },
  data: () => ({
    FundraisingItems: [],
  }),
  methods: {
    getFundraising() {
      ApiService.getFundraising(this.$axios).then(
        (response) => {
          this.FundraisingItems = response;
          console.log(response);
        }
      );
    },
  },
}
</script>
