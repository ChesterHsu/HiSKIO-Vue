const LoginApi = '/auth/login';
const GetFundraising = '/courses/fundraising';
const Members = '/me';
const Carts = '/carts';

export default {
  async login(axios, val) {
    const result = await axios.$post(LoginApi, val);
    return result;
  },
  async getFundraising(axios) {
    const result = await axios.$get(GetFundraising);
    return result;
  },
  async getMembers(axios) {
    const result = await axios.$get(Members);
    return result;
  },
  async getCarts(axios, val) {
    const result = await axios.$post(Carts, val);
    return result;
  },
};
