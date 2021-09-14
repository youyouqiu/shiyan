// 判断当前年份是否是闰年(闰年2月份有29天，平年2月份只有28天)
function isLeap(year) {
  return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 == 0 ? 1 : 0)) : 0;
}
var i, k,
  today = new Date(), // 获取当前日期
  y = today.getFullYear(), // 获取日期中的年份
  m = today.getMonth(), // 获取日期中的月份(需要注意的是：月份是从0开始计算，获取的值比正常月份的值少1)
  d = today.getDate(), // 获取日期中的日(方便在建立日期表格时高亮显示当天)
  firstday = new Date(y, m, 1), // 获取当月的第一天
  dayOfWeek = firstday.getDay(), // 判断第一天是星期几(返回[0-6]中的一个，0代表星期天，1代表星期一，以此类推)
  days_per_month = new Array(31, 28 + isLeap(y), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), // 创建月份数组
  str_nums = Math.ceil((dayOfWeek + days_per_month[m]) / 7); // 确定日期表格所需的行数

  document.write(`
    <table border="1">
      <tr>
        <th>日</th>
        <th>一</th>
        <th>二</th>
        <th>三</th>
        <th>四</th>
        <th>五</th>
        <th>六</th>
      </tr>
  `); // 打印表格第一行(显示星期)
  for (i = 0; i < str_nums; i += 1) { // 二维数组创建日期表格
    document.write('<tr>');
    for (k = 0; k < 7; k++) {
      var idx = 7 * i + k; // 为每个表格创建索引,从0开始
      var date = idx - dayOfWeek + 1; // 将当月的1号与星期进行匹配
      var nongDate = {}; // 农历对象
      var nongDateTGDZ = ''; // 农历天干地支
      var nongDateM = ''; // 农历月
      var nongDateD = ''; // 农历日
      var nongDateSX = ''; // 农历生肖
      var DateXZ = ''; // 星座
      (date <= 0 || date > days_per_month[m]) ? date = ' ': date = idx - dayOfWeek + 1; // 索引小于等于0或者大于月份最大值就用空表格代替
      if (date !== ' ') {
        nongDate = calendar.solar2lunar(y, m, date);
        nongDateTGDZ = nongDate.gzYear + "年" + nongDate.gzMonth + "月" + nongDate.gzDay + "日";
        nongDateM = nongDate.IMonthCn;
        nongDateD = nongDate.IDayCn;
        nongDateSX = nongDate.Animal;
        DateXZ = nongDate.astro;
      }
      date == d
      ? document.write(`
        <td class="today">
          <p class="pDate">${date}</p>
          <p>${nongDateTGDZ}</p>
          ${date == ' ' ? '' : `<p>农历：${nongDateM}${nongDateD}</p>`}
          ${date == ' ' ? '' : `<p>${nongDateSX} / ${DateXZ}</p>`}
        </td>
      `)
      : document.write(`
        <td>
          <p class="pDate">${date}</p>
          <p>${nongDateTGDZ}</p>
          ${date == ' ' ? '' : `<p>农历：${nongDateM}${nongDateD}</p>`}
          ${date == ' ' ? '' : `<p>${nongDateSX} / ${DateXZ}</p>`}
        </td>
      `); // 高亮显示当天
    }
    document.write('</tr>');
  }
document.write('</table>');
