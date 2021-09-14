// 值

define(function() {
  var processData = {
    cid = '',
    brandValB = '',
    deviceValB = '',
    simValB = '',
    groupingNum = 2,
    people = 2,
    intervalFlag = true,
    id = 2,
    enterFlag = false,
    flag1 = false, // 选择还是录入的车牌号
    flag2 = true, // 选择还是录入的终端号
    flag3 = true, // 选择还是录入的终端手机号
    datas = '',
    objType = 0,
    vehicleInfoList = [], // 第一次进页面默认查询的数据
    peopleInfoList = [],
    thingInfoList = [],
    deviceInfoList = [],
    deviceInfoListForPeople = [],
    simCardInfoList = [],
    professionalsInfoList = [],
    professionalDataList = [],
    orgId = "",
    orgName = "",
    terminalManufacturerInfoList = [], // 终端厂商信息
    processSubmitFlag = true, // 防止表单重复提交
    initFlag = true, // 第一次进入页面标识
    agreementType = "", //协议类型
  }

  return {
    processData: processData,
  }
});
