//获得任意日期的农历，以及各种节日、节气等 isaac 修改万年历而得 Aug 2nd 2005
/*****************************************************************************
                                   日期资料
*****************************************************************************/

var lunarInfo=new Array(
	0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
	0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
	0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
	0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
	0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
	0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,
	0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
	0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
	0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
	0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
	0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
	0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
	0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
	0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
	0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,
	0x14b63
);

var solarMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var Gan=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
var Zhi=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
var nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十');
var nStr2 = new Array('初','十','廿','卅','□');
var nStr3 = new Array("正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊");

//公历节日，*表示放假
var sFtv = new Array(
	"0101 元旦",
	"0202 世界湿地日",
	"0207 声援南非日",
	"0210 国际气象节",
	"0214 情人节",
	"0301 国际海豹日",
	"0303 全国爱耳日",
	"0308 国际妇女节",
	"0312 植树节",
	"0314 国际警察日",
	"0315 消费者权益日",
	"0317 国际航海日",
	"0321 世界森林日",
	"0321 世界儿歌日",
	"0322 世界水日",
	"0323 世界气象日",	
	"0401 愚人节",
	"0407 世界卫生日",
	"0422 世界地球日",
	"0501 国际劳动节",
	"0504 五四青年节",
	"0505 碘缺乏防治日",
	"0508 世界红十字日",
	"0512 国际护士节",
	"0515 国际家庭日",
	"0517 世界电信日",
	"0518 国际博物馆日",
	"0520 学生营养日",
	"0523 国际牛奶日",
	"0531 世界无烟日", 
	"0601 国际儿童节",
	"0605 世界环境日",
	"0606 全国爱眼日",
	"0617 防治荒漠化日",
	"0623 奥林匹克日",
	"0625 全国土地日",
	"0626 国际反毒日",
	"0701 党的生日",
	"0707 抗日纪念日",
	"0711 世界人口日",
	"0730 非洲妇女日",
	"0801 建军节",
	"0815 日本投降日",	
	"0908 国际扫盲日",
	"0910 中国教师节",
	"0914 清洁地球日",
	"0916 臭氧层保护日",
	"0918 九一八纪念",
	"0920 国际爱牙日",
	"0927 世界旅游日",
	"1001 国庆节",
	"1004 世界动物日",
	"1008 全国高血压日",
	"1008 世界视觉日",
	"1009 世界邮政日",
	"1013 世界保健日",	
	"1015 国际盲人节",
	"1016 世界粮食日",
	"1017 世界消贫日",
	"1022 世界医药日",
	"1024 联合国日",
	"1031 世界勤俭日",
	"1108 中国记者日",
	"1109 消防宣传日",
	"1110 世界青年节",
	"1112 孙中山诞辰",
	"1114 世界糖尿病日",	
	"1117 国际大学生节",
	"1121 世界电视日",
	"1201 世界艾滋病日",
	"1203 世界残疾人日",
	"1208 儿童电视日",
	"1209 世界足球日",
	"1210 世界人权日",
	"1212 西安事变纪念",
	"1213 南京大屠杀",
	"1221 国际篮球日",
	"1224 平安夜",
	"1225 圣诞节",
	"1226 毛泽东诞辰",
	"1229 生物多样性日"
);

//某月的第几个星期几。 5,6,7,8 表示到数第 1,2,3,4 个星期几
var wFtv = new Array(
	"0110 黑人日",
	"0520 母亲节",
	"0530 全国助残日",
	"0630 父亲节",
	"0911 劳动节",
	"0932 国际和平日",
	"0940 国际聋人节",
	"0950 世界海事日",
	"1011 国际住房日",
	"1144 感恩节"
);

//农历节日
var lFtv = new Array(
	"0101 春节",
	"0115 元宵节",
	"0202 龙抬头节",
	"0505 端午节",
	"0707 七七鹊桥节",
	"0714 鬼节",
	"0815 中秋节",
	"0909 重阳节",
	"1208 腊八节",
	"0100 除夕"
);

//计算农历，发现万年历里面的农历年是tmd错的，居然以立春为分界，我靠
//找到我以前改的这个，以年初一为分界的，嗯，两个合并一下 isaac 2006.1.21
//不过原来那个错的，因为可以计算节日，也不知道哪些代码是多余的
//估计多余部分不少，懒得看了.....
function LunarDate(tY,tM,tD) {

  var TianGan = new Array(                          // 天干名称
    "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
  var DiZhi = new Array(                            // 地支名称
    "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
  var ShuXiang = new Array(                         // 属相名称
    "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");
  var DayName = new Array("*",                      // 农历日期名
    "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
    "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
    "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十");
  var MonName = new Array("*",                      // 农历月份名
    "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊");
  var MonthAdd = new Array(                         // 公历每月前面的天数
    0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334);
  var NongLiData = new Array(                       // 农历数据
    2635, 333387, 1701, 1748, 267701, 694, 2391, 133423, 1175, 396438, 3402, 3749,
    331177, 1453, 694, 201326, 2350, 465197, 3221, 3402, 400202, 2901, 1386, 267611,
    605, 2349, 137515, 2709, 464533, 1738, 2901, 330421, 1242, 2651, 199255, 1323,
    529706, 3733, 1706, 398762, 2741, 1206, 267438, 2647, 1318, 204070, 3477, 461653,
    1386, 2413, 330077, 1197, 2637, 268877, 3365, 531109, 2900, 2922, 398042, 2395,
    1179, 267415, 2635, 661067, 1701, 1748, 398772, 2742, 2391, 330031, 1175, 1611,
    200010, 3749, 527717, 1452, 2742, 332397, 2350, 3222, 268949, 3402, 3493, 133973,
    1386, 464219, 605, 2349, 334123, 2709, 2890, 267946, 2773, 592565, 1210, 2651,
    395863, 1323, 2707, 265877
  );

  this.CalcLunar = function() {
    var i, m, n, k, isEnd, bit, TheDate;
    var curYear = tY;
    var curMonth = tM+1;
    var curDay = tD;
	
    // 计算到初始时间1921年2月8日的天数：1921-2-8(正月初一)
    TheDate = (curYear - 1921) * 365 +  Math.floor((curYear - 1921) / 4)
            + MonthAdd[curMonth - 1] - 38 + curDay;
    if ((curYear%4)==0 && curMonth>2)
      TheDate ++;

    // 计算农历天干、地支、月、日
    isEnd = 0;
    m = 0;
    while (true) {
      k = (NongLiData[m] < 4095 ? 11 : 12);
      n = k
      while (true) {
        if (n < 0) break;
        // 获取 NongliData[m] 的第 n 个二进制位的值
        bit = (NongLiData[m] >>> n) % 2;
        if (TheDate <= 29 + bit) {
          isEnd = 1;
          break;
        }
        TheDate -= 29 + bit;
        n --;
      }
      if (isEnd == 1) break;
      m ++;
    }

    curYear = 1921 + m;
    curMonth = k - n + 1;
    curDay = TheDate;
    if (k==12) {
      if (curMonth==(Math.floor(NongLiData[m]/65536)+1)) {
        curMonth = 1 - curMonth
      } else if (curMonth > (Math.floor(NongLiData[m] / 65536) + 1)) {
        curMonth --;
      }
    }

    // 生成农历天干、地支、属相 ==> strLunar
    strLunar = TianGan[((curYear - 4) % 60) % 10]
             + DiZhi[((curYear - 4) % 60) % 12] + "年 "
             + ShuXiang[((curYear - 4) % 60) % 12] + " ";

    // 生成农历月、日 ==> strLunarDay
    strLunarDay = (curMonth < 1 ? 
      ("闰" + MonName[-1 * curMonth]) : MonName[curMonth]
    );
    strLunarDay += "月" + DayName[curDay];
	return (strLunar+" "+strLunarDay);
  };

  return(this.CalcLunar());
}

/*****************************************************************************
                                      日期计算
*****************************************************************************/

//====================================== 传回农历 y年的总天数
function lYearDays(y) {
   var i, sum = 348;
   for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0;
   return(sum+leapDays(y));
}

//====================================== 传回农历 y年闰月的天数
function leapDays(y) {
   if(leapMonth(y))  return((lunarInfo[y-1900] & 0x10000)? 30: 29);
   else return(0);
}

//====================================== 传回农历 y年闰哪个月 1-12 , 没闰传回 0
function leapMonth(y) {
   return(lunarInfo[y-1900] & 0xf);
}

//====================================== 传回农历 y年m月的总天数
function monthDays(y,m) {
   return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 );
}

//====================================== 算出农历, 传入日期物件, 传回农历日期物件
//                                       该物件属性有 .year .month .day .isLeap
function Lunar(objDate) {

   var i, leap=0, temp=0;
   var offset   = (Date.UTC(objDate.getFullYear(),objDate.getMonth(),objDate.getDate()) - Date.UTC(1900,0,31))/86400000;

   for(i=1900; i<2050 && offset>0; i++) { temp=lYearDays(i); offset-=temp; }

   if(offset<0) { offset+=temp; i--; }

   this.year = i;

   leap = leapMonth(i); //闰哪个月
   this.isLeap = false;

   for(i=1; i<13 && offset>0; i++) {
      //闰月
      if(leap>0 && i==(leap+1) && this.isLeap==false)
         { --i; this.isLeap = true; temp = leapDays(this.year); }
      else
         { temp = monthDays(this.year, i); }

      //解除闰月
      if(this.isLeap==true && i==(leap+1)) this.isLeap = false;

      offset -= temp;
   }

   if(offset==0 && leap>0 && i==leap+1)
      if(this.isLeap)
         { this.isLeap = false; }
      else
         { this.isLeap = true; --i; }

   if(offset<0){ offset += temp; --i; }

   this.month = i;
   this.day = offset + 1;
}

//==============================传回国历 y年某m+1月的天数
function solarDays(y,m) {
   if(m==1)
      return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28);
   else
      return(solarMonth[m]);
}
//============================== 传入 offset 传回干支, 0=甲子
function cyclical(num) {
   return(Gan[num%10]+Zhi[num%12]);
}

//============================== 月历属性
function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay) {

      this.isToday    = false;
      //国历
      this.sYear      = sYear;   //西元年4位数字
      this.sMonth     = sMonth;  //西元月数字
      this.sDay       = sDay;    //西元日数字
      this.week       = week;    //星期, 1个中文
      //农历
      this.lYear      = lYear;   //西元年4位数字
      this.lMonth     = lMonth;  //农历月数字
      this.lDay       = lDay;    //农历日数字
      this.isLeap     = isLeap;  //是否为农历闰月?
      //八字
      this.cYear      = cYear;   //年柱, 2个中文
      this.cMonth     = cMonth;  //月柱, 2个中文
      this.cDay       = cDay;    //日柱, 2个中文

      this.color      = '';

      this.lunarFestival = ''; //农历节日
      this.solarFestival1 = ''; //国历节日1
	  this.solarFestival2 = ''; //国历节日2
	  this.solarFestival3 = ''; //国历节日3
      this.solarTerms = ''; //节气
}

//===== 某年的第n个节气为几日(从0小寒起算)
function sTerm(y,n) {
   var offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) + Date.UTC(1900,0,6,2,5) );
   return(offDate.getUTCDate());
}

//============================== 传回月历物件 (y年,m+1月)
/*
功能说明: 传回整个月的日期资料物件
使用方式: OBJ = new calendar(年,零起算月);
  OBJ.length      传回当月最大日
  OBJ.firstWeek   传回当月一日星期
  由 OBJ[日期].属性名称 即可取得各项值
  OBJ[日期].isToday  传回是否为今日 true 或 false
  其他 OBJ[日期] 属性参见 calElement() 中的注解
*/
function calendar(y,m) {

   var sDObj, lDObj, lY, lM, lD=1, lL, lX=0, tmp1, tmp2, tmp3;
   var cY, cM, cD; //年柱,月柱,日柱
   var lDPOS = new Array(3);
   var n = 0;
   var firstLM = 0;

   sDObj = new Date(y,m,1,0,0,0,0);    //当月一日日期


   this.length    = solarDays(y,m);    //国历当月天数
   this.firstWeek = sDObj.getDay();    //国历当月1日星期几

   ////////年柱 1900年春分后为庚子年(60进制36)
   if(m<2) cY=cyclical(y-1900+36-1);
   else cY=cyclical(y-1900+36);
   var term2=sTerm(y,2); //立春日期

   ////////月柱 1900年1月小寒以前为 丙子月(60进制12)
   var firstNode = sTerm(y,m*2) //传回当月「节」为几日开始
   cM = cyclical((y-1900)*12+m+12);

   //当月一日与 1900/1/1 相差天数
   //1900/1/1与 1970/1/1 相差25567日, 1900/1/1 日柱为甲戌日(60进制10)
   var dayCyclical = Date.UTC(y,m,1,0,0,0,0)/86400000+25567+10;

   for(var i=0;i<this.length;i++) {

      if(lD>lX) {
         sDObj = new Date(y,m,i+1);    //当月一日日期
         lDObj = new Lunar(sDObj);     //农历
         lY    = lDObj.year;           //农历年
         lM    = lDObj.month;          //农历月
         lD    = lDObj.day;            //农历日
         lL    = lDObj.isLeap;         //农历是否闰月
         lX    = lL? leapDays(lY): monthDays(lY,lM); //农历当月最后一天

         if(n==0) firstLM = lM;
         lDPOS[n++] = i-lD+1;
      }

      //依节气调整二月分的年柱, 以春分为界
      if(m==1 && (i+1)==term2) cY=cyclical(y-1900+36);
      //依节气月柱, 以「节」为界
      if((i+1)==firstNode) cM = cyclical((y-1900)*12+m+13);
      //日柱
      cD = cyclical(dayCyclical+i);

      this[i] = new calElement(y, m+1, i+1, nStr1[(i+this.firstWeek)%7],
                               lY, lM, lD++, lL,
                               cY ,cM, cD );
   }

   //节气
   tmp1=sTerm(y,m*2)-1;
   tmp2=sTerm(y,m*2+1)-1;
   this[tmp1].solarTerms = solarTerm[m*2];
   this[tmp2].solarTerms = solarTerm[m*2+1];
   //if(m==3) this[tmp1].color = 'red'; //清明颜色

   //国历节日
   for(i in sFtv)
      if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
         if(Number(RegExp.$1)==(m+1)) {
            this[Number(RegExp.$2)-1].solarFestival1 += RegExp.$4;
            //if(RegExp.$3=='*') this[Number(RegExp.$2)-1].color = 'red';
         }

   //月周节日
   for(i in wFtv)
      if(wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
         if(Number(RegExp.$1)==(m+1)) {
            tmp1=Number(RegExp.$2);
            tmp2=Number(RegExp.$3);
            if(tmp1<5)
               this[((this.firstWeek>tmp2)?7:0) + 7*(tmp1-1) + tmp2 - this.firstWeek].solarFestival2 += RegExp.$5;
            else {
               tmp1 -= 5;
               tmp3 = (this.firstWeek+this.length-1)%7; //当月最后一天星期?
               this[this.length - tmp3 - 7*tmp1 + tmp2 - (tmp2>tmp3?7:0) - 1 ].solarFestival2 += RegExp.$5;
            }
         }

   //农历节日
   for(i in lFtv)
      if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
         tmp1=Number(RegExp.$1)-firstLM;
         if(tmp1==-11) tmp1=1;
         if(tmp1 >=0 && tmp1<n) {
            tmp2 = lDPOS[tmp1] + Number(RegExp.$2) -1;
            if( tmp2 >= 0 && tmp2<this.length && this[tmp2].isLeap!=true) {
               this[tmp2].lunarFestival += RegExp.$4;
               //if(RegExp.$3=='*') this[tmp2].color = 'red';
            }
         }
      }

   //复活节只出现在3或4月
   if(m==2 || m==3) {
      var estDay = new easter(y);
      if(m == estDay.m)
         this[estDay.d-1].solarFestival3 = this[estDay.d-1].solarFestival3+'复活节';// Easter Sunday';
   }
}

//======================================= 传回该年的复活节(春分后第一次满月周后的第一主日)
function easter(y) {

   var term2=sTerm(y,5); //取得春分日期
   var dayTerm2 = new Date(Date.UTC(y,2,term2,0,0,0,0)); //取得春分的国历日期物件(春分一定出现在3月)
   var lDayTerm2 = new Lunar(dayTerm2); //取得取得春分农历

   if(lDayTerm2.day<15) //取得下个月圆的相差天数
      var lMlen= 15-lDayTerm2.day;
   else
      var lMlen= (lDayTerm2.isLeap? leapDays(y): monthDays(y,lDayTerm2.month)) - lDayTerm2.day + 15;

   //一天等于 1000*60*60*24 = 86400000 毫秒
   var l15 = new Date(dayTerm2.getTime() + 86400000*lMlen ); //求出第一次月圆为国历几日
   var dayEaster = new Date(l15.getTime() + 86400000*( 7-l15.getUTCDay() ) ); //求出下个周日

   this.m = dayEaster.getUTCMonth();
   this.d = dayEaster.getUTCDate();

}

///////////////////////////////////////////////////////////////////////////////

var cld;

function drawCld(SY,SM,sD) {
	
	var s1,s2,s3,s4,s5,lObj='',yDisplay;
	cld = new calendar(SY,SM);
	
	//显示农历年、属相
	yDisplay=LunarDate(SY,SM,sD);
	//yDisplay = cyclical(SY-1900+36) + '年 '+ Animals[(SY-4)%12] + ' ';
	
	sD--;
	
	if(sD>-1 && sD<cld.length) { //日期内
		
		s1 = cld[sD].lunarFestival;
		if(s1.length>0) //农历节日
			lObj += ' ' + s1.fontcolor('#FF3BEF');
		
		s2 = cld[sD].solarFestival1;
		if( s2.length>0 && (s1.length + s2.length) <= 8) //国历节日1
			lObj += ' ' + s2.fontcolor('#8FB4FF');
			
		s3 = cld[sD].solarFestival2;
		if( s3.length>0 && (s1.length + s2.length + s3.length) <= 8) //国历节日2
			lObj += ' ' + s3.fontcolor('#8FB4FF');
		
		s4 = cld[sD].solarFestival3;
		if( s4.length>0 && (s1.length + s2.length + s3.length + s4.length) <= 8) //国历节日3
			lObj += ' ' + s4.fontcolor('#8FB4FF');
	
		s5 = cld[sD].solarTerms;
		if( s5.length>0 && (s1.length + s2.length + s3.length + s4.length + s5.length) <= 8 ) //廿四节气
			lObj += ' ' + s5.fontcolor('limegreen');
			
	}
	else  //非日期
		lObj = '';

	document.write( yDisplay + lObj );
}

var Today = new Date();
var tY = Today.getFullYear();
var tM = Today.getMonth();
var tD = Today.getDate();
drawCld(tY,tM,tD); //可传入任意日期，如2007.6.24为 drawCld(2007,5,24);
