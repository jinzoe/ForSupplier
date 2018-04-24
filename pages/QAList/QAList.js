// pages/QAList/QAList.js
Page({
  data: {
   QAs :[{
      qualityid:"qualityid",
      qualitydate:"yyyy-mm-dd",
      qualityusername:"某人",
      status :"status",
    }],
    array2: ['不合格', '合格', '全部'],
    index2: 0,
    radioItems: [
      { name: '按质检时间', value: '1', checked: true }
    ],
  },
  onLoad: function (options) {
  
  }
})