// pages/read/readMain/readMain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      animationData:{},
      footer:{
        hidden:false
      },
    footerInfo: {
       hidden: true
    }
  },
//  显示或隐藏详情
  footerShowOrHide:function(e){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
    })

    this.animation = animation

    animation.opacity(0).step()

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      this.setData({
        footer:{
          hidden: false
          },
        footerInfo:{
          hidden:true
        }
      })
    }.bind(this), 100)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})