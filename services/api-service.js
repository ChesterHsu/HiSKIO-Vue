const GetFundraising = '/courses/fundraising';

export default {
  async getFundraising(axios) {
    const result = await axios.$get(GetFundraising);
    return result;
  },
};
