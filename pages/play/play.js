//获取音频对象  const:修饰的变量不能被修改，类似java中的final关键字
const audio = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   * 页面要使用的变量都在data中定义
   */
  data: {
    state:"play",//记录歌曲播放状态的变量,默认播放
    music:{},//当前歌曲对象
  },

  /**
   * 生命周期函数--监听页面加载
   * 一般在onload接收上一个页面传递的参数
   */
  onLoad(options) {
    var id = options.id;
    audio.src = "http://music.163.com/song/media/outer/url?id="+id+".mp3";
    //自动播放
    audio.autoplay = true;
    //调用获取歌曲详情的方法
    this.getMusicInfoById(id);
  },
  /**
   * 根据歌曲id获取歌曲详情
   */
  getMusicInfoById(id){
    //小程序发请求、接收响应数据
    wx.request({
      url: 'https://music.163.com/api/song/detail/?id='+id+'&ids=['+id+']',
      //success:接口调用成功的回调函数
      //箭头函数：this的指向不会发生改变
      //res:服务器返回的数据
      success:res=>{
        //根据id只会查询到一首歌曲，但是在数组中存放，所以直接取第一个
        console.log(res.data.songs[0]);
        //层层解析获取到歌曲对象
        var music = res.data.songs[0];
        //将music赋值给data中的music
        this.setData({
          music:music
        })
      }
    })
  },
  /**
   * 暂停或播放
   */
  pauseOrPlay(){
    //获取当前的播放状态  this:当前Page页面这个对象
    //小程序中获取data中的变量的语法:this.data.变量名
    var state = this.data.state;
    if(state=="play"){
      //歌曲暂停
      audio.pause();
      //同步state的值
      //小程序中给data中的变量赋值的语法:this.setData({a:1,b:2,c:3})
      this.setData({
        state:"pause"
      })
    }else{
      //歌曲播放
      audio.play();
      this.setData({
        state:"play"
      })
    }
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