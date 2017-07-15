#TITLE=XHTML 1.0 （中文版）
#INFO
Cliptext Library for HTML 4.0 originally written by ES-Computing.
Modified by Jim Granger to XHTML 1.0 standards
Referenced Material:	Sam's Teach Yourself
						Web Publishing With
						HTML & XHTML in 21 Days
						ISBN - 0-672-32077-0
						http://www.samspublishing.com
2008-1-16 1:15 整理修改 by linxz
#SORT=n

#T=*** 结构 ***
^!
#T=!DOCTYPE (严格型)
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
^!
#T=!DOCTYPE (过渡型)
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
^!
#T=!DOCTYPE (框架型)
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
^!
#T=HTML
<html>
^!
</html>
#T=Head
<head>
^!
</head>
#T=Title
<title>^!</title>
#T=Meta
<meta name="^!" content="" />
#T=CSS - <style>
<style type="text/css">
<!--
^!
-->
</style>
#T=Body
<body>
^!
</body>
#T=带class的span
<span class="">^!</span>
#T=带class的div
<div class="^!"></div>
#T=注释
<!-- ^! -->
#T=带id的span
<span id="">^!</span>
#T=带id的div
<div id="^!"></div>
#T=Bidirectional
<bdo dir="" lang="">^!</bdo>
#T=H1
<h1>^!</h1>
#T=H2
<h2>^!</h2>
#T=H3
<h3>^!</h3>
#T=H4
<h4>^!</h4>
#T=H5
<h5>^!</h5>
#T=H6
<h6>^!</h6>
#T=横线hr
<hr />
#T= 
^!
#T=*** 文章 段落 ***
^!
#T=abbr
<abbr>^!</abbr>
#T=acronym
<acronym>^!</acronym>
#T=address
<address>^!</address>
#T=引用 - blockquote
<blockquote cite="">^!</blockquote>
#T=换行 br
<br />
#T=引用 - cite
<cite>^!</cite>
#T=代码片段 - code
<code>^!</code>
#T=删除文字 - del
<del>^!</del>
#T=被下定义的词 术语 dfn
<dfn>^!</dfn>
#T=强调 - em
<em>^!</em>
#T=插入 - ins
<ins>^!</ins>
#T=用户输入 - kbd
<kbd>^!</kbd>
#T= 段落 - p
<p>^!</p>
#T= 预制成的 - pre
<pre>^!</pre>
#T=短的引用 - <q>
<q cite="">^!</q>
#T= 样品 例子 - samp
<samp>^!</samp>
#T=强壮的 - strong
<strong>^!</strong>
#T=下标 - sub
<sub>^!</sub>
#T=上标 - sup
<sup>^!</sup>
#T=可变的 变量 - var
<var>^!</var>
#T= 
^!
#T= *** 格式化 ***
^!
#T=粗体 - b
<b>^!</b>
#T=大的 - big
<big>^!</big>
#T=斜体 - i
<i>^!</i>
#T=小的 - small
<small>^!</small>
#T=打字机样式 - tt
<tt>^!</tt>
#T= 
^!
#T=*** 列表 ***
^!
#T=自定义列表
<dl>
	<dt>^!</dt>
	<dd></dd>
</dl>
#T=自定义列表 术语 - dt
<dt>^!</dt>
#T=自定义列表 描写 - dd
<dd>^!</dd>
#T=有序列表
<ol>
	<li>^!</li>
	<li></li>
</ol>
#T=无序列表
<ul>
	<li>^!</li>
	<li></li>
</ul>
#T=列表项目 - li
<li>^!</li>
#T= 
^!
#T=*** 连接 ***
^!
#T=锚 - a
<a title="" href="">^!</a>
#T=底层参考 - base
<base href="^!" />
#T=连接 - link
<link rel="^!" href="" type="" />
#T= 
^!
#T=*** 表单 ***
^!
#T=表单预设
<form method="post" action="">
	<label>
		^![Replace with label]
		<input type="" name="" />
	</label>
	<button type="submit">提交</button>
	<button type="reset"/>重设</button>
</form>
#T=标签（预设） - label
<label>
	^!
	<input type="" name="" />
</label>
#T=标签 - label
<label for="">^!</label>
#T=重设按钮 button
<button type="reset" value="Reset">^!</button>
#T=提交按钮 button
<button type="submit" value="Submit">^!</button>
#T=按钮
<button type="button" value="^!"></button>
#T=Input: 普通
<input type="^!" name="" />
#T=Input: 按钮
<input type="button" name="^!" value="" onclick="" />
#T=Input: 复选框
<input type="checkbox" name="^!" value="" checked="" />
#T=Input: 文件
<input type="file" name="^!" />
#T=Input: 隐藏
<input type="hidden" name="^!" />
#T=Input: 图片
<input type="image" name="^!" />
#T=Input: 密码
<input type="password" name="^!" />
#T=Input: 单选框
<input type="radio" name="^!" value="" checked="" />
#T=Input: 重设
<input type="reset" value="Reset" />
#T=Input: 提交
<input type="submit" value="Submit" />
#T=Input: 文本
<input type="text" name="^!" />
#T=Textarea 文本域
<textarea name="">^!</textarea>
#T=Fieldset（预设）
<fieldset>
	<legend>^!</legend>
</fieldset>
#T=Legend
<legend>^!</legend>
#T=Select（下拉框预设）
<select name="">
	<option>^!</option>
	<option></option>
	<option></option>
</select>
#T=Option 下拉选项
<option>^!</option>
#T= 
^!
#T=*** 框架 ***
^!
#T=Frameset（框架集预设）
<frameset rows="^!," cols=",">
	<frame src="" name="" />
	<frame src="" name="" />
</frameset>
#T=Frame 框架
<frame src="^!" name="" />
#T=内嵌框架(IE only) iframe
<iframe name="" src="" width="" height="">^!</iframe>
#T=无框架 noframes
<noframes>
^!
</noframes>
#T= 
^!
#T=*** 表格 ***
^!
#T=表格（预设）
<table border="" cellpadding="" cellspacing="" width="" >
	<tr>
		<th>^!</th>
		<th></th>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>
#T=Caption 标题
<caption>^!</caption>
#T=纵栏组合（预设） - colgroup col
<colgroup>
    <col span="^!" width="" />
</colgroup>
#T=纵栏组合 - colgroup
<colgroup span="^!" width=""></colgroup>
#T=纵栏属性 - col
<col span="^!" width="" />
#T=标题行 - thead
<thead>^!</thead>
#T=页脚行 - tfoot
<tfoot>^!</tfoot>
#T=内容行 - tbody
<tbody>^!</tbody>
#T=表格行 - tr
<tr>^!</tr>
#T=表格头单元 - th
<th>^!</th>
#T=表格数据 - td
<td>^!</td>
#T= 
^!
#T=*** 植入的 ***
^!
#T=Java Applet
<applet code="^!" width="" height="">
</applet>
#T=Image
<img src="^!" alt="" />
#T=Map Area
<area shape="^!" href="" coords="" alt="" />
#T=Map Name
<map name="^!"></map>
#T=Object
<object id="" width="" height="" classid="">
^!
</object>
#T=初始化 - <param>
<param name="^!" value="" />
#T= 
^!
#T=*** 脚本 ***
^!
#T=Script
<script language="javascript">
<!--
^!
// -->
</script>
#T=No Script
<noscript>
    ^!
</noscript>
#T= 
^!
#T=*** 不赞成地 ***
^!
#T=<basefont>
<basefont size="^!" />
#T=<center>
<center>^!</center>
#T=<dir>
<dir>^!</dir>
#T=<font>
<font size="">^!</font>
#T=<isindex>
<isindex />
#T=<menu>
<menu>^!</menu>
#T=<optgroup>
<optgroup label="">
^!
</optgroup>
#T=<s>
<s>^!</s>
#T=<strike>
<strike>^!</strike>
#T=<u>
<u>^!</u>
#