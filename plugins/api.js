/* eslint-disable prettier/prettier */
export default function ({ $axios, store }, inject) {
  // console.log('api.js')
  // console.log(store.state.app.company)
  // Create a custom axios instance
  const api = $axios.create({
    baseURL: process.env.HiSKIO_BASE_API,
    headers: {
      common: {
        Accept: 'application/json, */*',
        ContentType: 'application/json',
      },

    },
  })

  // Inject to context as $api
  inject('api', api)
}
