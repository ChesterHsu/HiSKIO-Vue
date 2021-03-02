/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable unicorn/prefer-includes */

export default {
  setShoppingCarID: (state, data) => {
    state.SetShoppingCarID = '';
    state.SetShoppingCarID = data;
  },
  clearShoppingCarID: (state, data) => {
    state.clearShoppingCarID = '';
    state.clearShoppingCarID = data;
  },
};
