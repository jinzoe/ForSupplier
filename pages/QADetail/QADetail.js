// pages/QADetail/QADetail.js
Page({
  data: {
    QAInfo : {
      QualityDate : '2018-01-10',
      QualityId : '001',
      QualityUserName : '某人',
      Materials : [{
        MaterialNo : '11',
        MaterialName : '物料A' ,
        status : '1',//1质检合格 2-质检不合格
        Description : '详细备注'
      },{
        MaterialNo : '22',
        MaterialName : '物料B' ,
        status : '1',//1质检合格 2-质检不合格
        Description : '详细备注'
      },{
        MaterialNo : '33',
        MaterialName : '物料C' ,
        status : '2',//1质检合格 2-质检不合格
        Description : '详细备注'
      },{
        MaterialNo : '44',
        MaterialName : '物料D' ,
        status : '2',//1质检合格 2-质检不合格
        Description : '详细备注'
      }]
    }
  },

  onLoad: function (options) {
  
  }

})