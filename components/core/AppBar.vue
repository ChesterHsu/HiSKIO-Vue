<template>
  <nav class="bg-white">
    <div class="max-w-6xl mx-auto px-2 sm:px-7 lg:px-8">
      <div class="relative flex items-center justify-between h-14">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="lg:block h-5 w-auto"
              src="@/assets/images/HiSKIO.png"
              alt="Workflow"
              @click="myMethod"
              type="button" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <v-icon>mdi-magnify</v-icon>
            &nbsp;&nbsp;
            <input v-model="Search" placeholder=" 搜尋" class="search-bar" autocomplete="off">
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
                <a class="text-gray-300 text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">我想開課</a>
                <v-icon dense type="button">mdi-cart-outline</v-icon>
                <v-icon dense type="button">mdi-alert-circle</v-icon>
                <v-btn :elevation="0">登入</v-btn>
                <v-btn class="white--text" :elevation="0" color="#2f8eac">註冊</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    Search: '',
  }),
  methods:{
    myMethod() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
