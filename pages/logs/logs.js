//logs.js
const util = require('../../utils/util.js')




//获取App产生的实例对象
const app = getApp();
console.log(app.globalData.name)
console.log(app.globalData.age)
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }, getUserInfo1:function(event){
    console.log(event);
  }
})
