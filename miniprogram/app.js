//app.js
const util = require('./utils/util')

App({
  onLaunch: function () {

    util.checkSession().then(() => {
      console.log('Login Successful')
    })
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
