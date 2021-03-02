<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        HiSKIO 專注於讓任何人能在線上學習到職業知識與工作上派得上用場的技術。從 2016 年底草創以來，已累積上架200多堂線上課程以及數十套路徑式的學習組合，並解決超過 60,000 位業界技術人員的職業進修需求。我們從線上課程平台的角色出發， 提供各種領域由業界師資製作的線上課程，並研發線上互動式的學習型產品，讓學習者只要透過線上學習，就能成為獨立的科技職人。
      </v-card-text>

      <v-divider></v-divider>
      <v-card-text class="white--text">
        Copyright {{ new Date().getFullYear() }} HiSKIO
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'DashboardCoreFooter',

  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    links: [
      {
        href: '#',
        text: 'Creative Tim',
      },
      {
        href: '#',
        text: 'About Us',
      },
      {
        href: '#',
        text: 'Blog',
      },
      {
        href: '#',
        text: 'Licenses',
      },
    ],
  }),
};
</script>

<style lang="scss">
#core-footer {
  z-index: 0;
}

#dashboard-core-footer {
  a {
    font-size: 0.825rem;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
