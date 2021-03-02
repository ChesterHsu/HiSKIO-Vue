<template>
  <v-dialog v-model="show" width="30%" >
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-icon type="button" @click="show = false">mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row align="center" justify="center">
            <img class="lg:block h-6 w-auto" src="@/assets/images/HiSKIO.png">
          </v-row>
          <v-row class="transform translate-y-8">
            <v-card>
              <v-tabs v-model="tab" centered>
                <v-tab>登入</v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab" class="overflow-auto">
                <v-tab-item>
                  <v-card flat align="center" justify="center" class="transform translate-y-8">
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <v-btn
                          class="ma-2 w-80"
                          outlined
                          large
                          color="indigo"
                        >
                          <img
                            class="lg:block h-6 w-auto"
                            src="@/assets/images/facebook.jpg"
                            alt="Workflow"
                            type="button" />
                          &nbsp;&nbsp;
                          使用Facebook登入
                        </v-btn>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-btn
                          class="ma-2 w-80"
                          outlined
                          color="indigo"
                        >
                          <img
                            class="lg:block h-8 w-auto"
                            src="@/assets/images/google.jpg"
                            alt="Workflow"
                            type="button" />
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          使用Google登入
                        </v-btn>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-btn
                          class="ma-2 w-80"
                          outlined
                          color="indigo"
                        >
                          <img
                            class="lg:block h-6 w-auto"
                            src="@/assets/images/github.jpg"
                            alt="Workflow"
                            type="button" />
                          &nbsp;&nbsp;
                          使用Github登入
                        </v-btn>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-btn
                          class="ma-2 w-80"
                          outlined
                          color="indigo"
                        >
                          <img
                            class="lg:block h-8 w-auto"
                            src="@/assets/images/linkedin.jpg"
                            alt="Workflow"
                            type="button" />
                          &nbsp;
                          使用Linkedln登入
                        </v-btn>
                      </v-col>
                      <v-row>
                        <v-col cols="12">
                          <input v-model="Account" placeholder="請輸入HiSKIO ID" class="search-bar" autocomplete="off">
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <input v-model="Password" type="password" placeholder="請輸入登入密碼" class="search-bar" autocomplete="off">
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="12" md="12">
                          <v-btn
                            class="ma-2 w-80"
                            color="success"
                            @click="login"
                          >
                            登入
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-row>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import ApiService from "@/services/api-service";

export default {
  props: {
    value: Boolean,
  },
  data: () => ({
    tab: null,
    Account: '',
    Password: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),
  computed: {

    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  watch: {
  },
  methods: {
    login() {
      const val = {
        account: this.Account,
        password: this.Password,
      }
      ApiService.login(this.$axios, val).then(
        (response) => {
          ApiService.getMembers(this.$axios).then(
            (response) => {
              console.log(response);
            }
          );
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-dialog {
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100% !important;
    margin: 10px !important;
  }

  .row {
    div {
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }

  .title {
    color: #fff;
    background-color: #26c6da;
  }

  .v-btn {
    text-transform: none;
  }
}
</style>
