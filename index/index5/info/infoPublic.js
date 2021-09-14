// 公共函数

define(function() {
  var infoPublic = {
    // 错误提示信息隐藏
    hideErrorMsg: function () {
      $("#error_label").hide();
    },

    // 清除错误信息
    clearErrorMsg: function () {
      $("label.error").hide();
    },

    // 非空
    checkIsNull: function (data) {
      if (data !== 'undefined' && data !== 'null' && data !== '') {
        return true;
      } else {
        return false;
      }
    },

    // 文本框复制事件处理
    inputOnPaste: function (eleId) {
      if (eleId == "quickBrands") {
        flag1 = false;
        $("#quickBrandVal").attr("value", "");
      }
      if (eleId == "quickDevices") {
        flag2 = false;
        $("#quickDeviceVal").attr("value", "");
      }
      if (eleId == "quickSims") {
        flag3 = false;
        $("#quickSimVal").attr("value", "");
      }
      if (eleId == 'fastBrands') {
        flag5 = false;
        $("#speedBrandVal").attr("value", "");
        $("#fastBrandVal").attr("value", "");
      }
      if (eleId == 'speedSims') {
        flag6 = false;
        $("#speedSimVal").attr("value", "");
      }
    },

    // 快速录入完成后,清空相应信息
    clearQuickInfo: function () {
      $("#quickBrands").val('').css('backgroundColor', '#fafafa');
      $("#quickBrandVal").val('');
      $("#quickPlateColor").val('2');
      $("#quickDevices").val('').css('backgroundColor', '#fafafa');
      $("#quickDeviceVal").val('');
      $("#quickSims").val('').css('backgroundColor', '#fafafa');
      $("#quickSimVal").val('');
      $("#quickPlateColor").removeAttr('disabled');
    },

    // 显示错误提示信息
    showErrorMsg: function (msg, inputId) {
      if ($("#error_label").is(":hidden")) {
        $("#error_label").text(msg);
        $("#error_label").insertAfter($("#" + inputId));
        $("#error_label").show();
      } else {
        $("#error_label").is(":hidden");
      }
    },

    // 极速录入完成后,清空相应信息
    clearFastInfo: function () {
      $("#speedDevices").val('');
      $("#fastBrands").val('');
      $("#fastBrandVal").val('');
      $("#fastPlateColor").val('2');
      $("#speedBrandVal").val('');
      $("#fastPlateColor").val(2).prop('disabled', true);
      $("#oneDevices").val('');
      $("#oneDevicesName").val('');
      $("#speedDeviceVal").val('');
      $("#manufacturerId").val('');
      $("#deviceModelNumber").val('');
      $("#provinceId").val('');
      $("#cityId").val('');
      $("#speedSims").val('');
      $("#speedSimVal").val('');
      $("#messagetype").val('');
    },

    
  }

  return {
    infoPublic: infoPublic,
  }
});
