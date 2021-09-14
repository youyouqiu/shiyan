// 值

define(function() {
  var infoData = {
    deleteconfigId = '',
    fastInitFlag = true,
    processInitFlag = true,
    sweepInitFlag = true,
    searchFlag = true,
    quickMonitorType = 0, // 0：选择车，1：选择人，2：选择物
    vehicleInfoList = [], // 第一次进页面默认查询的数据
    peopleInfoList = [],
    thingInfoList = [],
    deviceInfoList = [], // 终端信息集合
    simCardInfoList = [], // 终端手机号信息集合
    speedDeviceInfoList = [], // 极速录入终端信息集合
    ais = [], // 还能存入的分组id
    checkedAssginment = [], // 快速录入已被选中的分组
    speedCheckedAssginment = [], // 极速录入已被选中的分组
    sweepCheckedAssginment = [], // 扫码录入已被选中的分组
    orgId = "",
    orgName = "",
    flag1 = false, // 选择还是录入的车牌号
    flag2 = true, // 选择还是录入的终端号
    flag3 = true, // 选择还是录入的终端手机号
    flag4 = false, // 极速 是否是选择的终端号
    flag5 = true, // 极速 选择还是录入的监控对象
    flag6 = true, // 极速 选择还是录入的终端手机号
    hasFlag = true,
    hasFlag1 = true, // 是否有该唯一标识
    quickRefresh = true, // 快速录入信息是否刷新
    fastRefresh = true, // 极速录入信息是否刷新
    selectTreeId = '',
    selectTreeType = '',
    $keepOpen = $(".keep-open"),
    keyFlag = true,
    sweepCodeMonitorType = 0, // 监控对象类型
  }

  return {
    infoData: infoData,
  }
});
