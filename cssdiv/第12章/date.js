//isaac at Feb 23 2005 11:31
function astrology(month,day){
	document.write('<a href="/frames.html?mainurl=/bbsdoc.php?board=birthday" class="astro" title="点击进入birthday版">');
	var constellation = new Array(
		"摩羯", "水瓶", "双鱼", "牡羊", "金牛", "双子",
		"巨蟹", "狮子", "处女", "天秤", "天蝎", "射手");
	switch(month)
	{
		case 1:
			if (day < 21)
				document.write(constellation[0]);
			else
				document.write(constellation[1]);
			break;
		case 2:
			if (day < 19)
				document.write(constellation[1]);
			else
				document.write(constellation[2]);
			break;
		case 3:
			if (day < 21)
				document.write(constellation[2]);
			else
				document.write(constellation[3]);
			break;
		case 4:
			if (day < 21)
				document.write(constellation[3]);
			else
				document.write(constellation[4]);
			break;
		case 5:
			if (day < 21)
				document.write(constellation[4]);
			else
				document.write(constellation[5]);
			break;
		case 6:
			if (day < 22)
				document.write(constellation[5]);
			else
				document.write(constellation[6]);
			break;
		case 7:
			if (day < 23)
				document.write(constellation[6]);
			else
				document.write(constellation[7]);
			break;
		case 8:
			if (day < 23)
				document.write(constellation[7]);
			else
				document.write(constellation[8]);
			break;
		case 9:
			if (day < 23)
				document.write(constellation[8]);
			else
				document.write(constellation[9]);
			break;
		case 10:
			if (day < 24)
				document.write(constellation[9]);
			else
				document.write(constellation[10]);
			break;
		case 11:
			if (day < 23)
				document.write(constellation[10]);
			else
				document.write(constellation[11]);
			break;
		case 12:
			if (day < 22)
				document.write(constellation[11]);
			else
				document.write(constellation[0]);
			break;
		default:
			document.write('诡异');
	}
	document.write('</a>');
}

currentDate=new Date();
with (currentDate){
	year=getYear();
	day=getDay();
	month=getMonth()+1;

	if(year >= 2000)
		document.write(getYear()+'年'+month+'月'+getDate()+'日');
	if(year <= 99)
		document.write('19'+getYear()+'年'+month+'月'+getDate()+'日');
	if(year >= 100 && year < 2000){
		year=year-100+2000;
		document.write(year+'年'+month+'月'+getDate()+'日');}
	
	if(day==1){document.write('&nbsp;&nbsp;星期一&nbsp;&nbsp;');}
	else if(day==2){document.write('&nbsp;&nbsp;星期二&nbsp;&nbsp;');}
	else if(day==3){document.write('&nbsp;&nbsp;星期三&nbsp;&nbsp;');}
	else if(day==4){document.write('&nbsp;&nbsp;星期四&nbsp;&nbsp;');}
	else if(day==5){document.write('&nbsp;&nbsp;星期五&nbsp;&nbsp;');}
	else if(day==6){document.write('&nbsp;&nbsp;星期六&nbsp;&nbsp;');}
	else{document.write('&nbsp;&nbsp;星期日&nbsp;&nbsp;');}
	
	astrology(getMonth()+1,getDay());	//显示星座
}