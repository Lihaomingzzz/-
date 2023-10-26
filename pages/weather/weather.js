// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:"武汉",//输入的城市名称
    weatherList:[],//天气列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  getWeather(){
    wx.request({
      url: 'https://api.vvhan.com/api/weather?city='+this.data.city+'&type=week',
      success:res=>{
        console.log(res.data.data);
        this.setData({
          weatherList:res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})