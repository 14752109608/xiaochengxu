// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"zsssss",
    students:[
        {id:100,name:'zs',age:30},
        {id:101,name:'ls',age:31},
        {id:102,name:'ww',age:32}
    ],
    counter:0
  },
handleBtnClick(){
 // console.log(1111)
//1.错误的做法     界面是不会刷新的
//this.data.counter+=1;

//2.this.setData()，在方法内部使用该方法可以刷新页面的值
this.setData({
  counter:this.data.counter+1
})

}
})