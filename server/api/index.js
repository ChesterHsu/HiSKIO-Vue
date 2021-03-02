const express = require('express')
const router = express.Router()
const app = express()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.get('/', (req, res, next) => {
  res.send('API root')
})

router.post('/store/login', (req, res) => {
  const StoresController = require('../controller/admin/stores')
  StoresController.login(req.body.email, req.body.password).then(
    response => {
      req.session.authStore = {
        // 記錄回傳的必要資訊
        token: response.data.token,
        expire_time: response.data.expire_time
      }
      return res.json({ name: req.body.email })
    },
    err => {
      res.status(401).json({ message: err })
    }
  )
})

router.post('/logout', (req, res) => {
  delete req.session.authStore
  res.json({ ok: true })
})

module.exports = {
  path: '/api',
  handler: router
}
