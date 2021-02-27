/* eslint-disable prettier/prettier */
export default function ({ $axios, redirect, store }) {
  $axios.onRequest((config) => {

  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400');
    }
  });

  $axios.setHeader('Accept', 'application/json, */*');

  $axios.setHeader('Content-Type', 'application/json');

}
