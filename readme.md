eRadio
------

**JavaScript function to create an HTML radio button list**

Example:
----

<pre>
&lt;div id="render">&lt;/div>
&lt;script>
document.getElementById("render").innerHTML = eRadio("myName", {
	options:[
			{ value:"1", text:"Option 1", selected: false, style: "color: red;" },
			{ value:"2", text:"Option 2", selected: true, style: "color: blue;" },
			{ value:"3", text:"Option 3", selected: false, style: "color: green;" },
			{ value:"4", text:"Option 4", selected: false, style: "color: orange;" }
		]
}, "eee", "fff", "alert(this.name + ' has changed.');");
&lt;/script>
</pre>

Parameters:
----
<pre>
eRadio(
	n = Radio button Name Field (required),
	d = Data to build the radio button in JSON format (optional - It will be empty without it),
	i = Radio button ID (optional),
	c = Class (optional),
	s = Stylize text (optional)
)
</pre>

JSON Data Set:
----
<pre>
{
	options:[
		{ 
			value:"Required", 
			text:"Optional - Renders value if not set",
			selected: "Optional - assume false if omitted",
			style: "Optional, some browsers ignore option styles" }
	]
)
</pre>

Generated HTML:
----
<pre>
&lt;table>
&lt;tr>
	&lt;td valign="top">&lt;input type="radio" name="myName" id="myName_1" value="1" onclick="alert(this.name + ' has changed.');" />&lt;/td>
	&lt;td valign="top" style="color: red;">Option 1&lt;/td>
&lt;/tr>
&lt;tr>
	&lt;td valign="top">&lt;input type="radio" name="myName" id="myName_2" value="2" checked="checked" onclick="alert(this.name + ' has changed.');" />&lt;/td>
	&lt;td valign="top" style="color: blue;">Option 2&lt;/td>
&lt;/tr>
&lt;tr>
	&lt;td valign="top">&lt;input type="radio" name="myName" id="myName_3" value="3" onclick="alert(this.name + ' has changed.');" />&lt;/td>
	&lt;td valign="top" style="color: green;">Option 3&lt;/td>
&lt;/tr>
&lt;tr>
	&lt;td valign="top">&lt;input type="radio" name="myName" id="myName_4" value="4" onclick="alert(this.name + ' has changed.');" />&lt;/td>
	&lt;td valign="top" style="color: orange;">Option 4&lt;/td>
&lt;/tr>
&lt;/table>
</pre>


Disclaimer
----
This code is provided without warranty. While I strive to maintain backwards compatibility with previous versions, the code is still under active development. As this is the case, some revisions may break compatibility with earlier versions of the library. Please keep this in mind when using eTable.

Copyright and Licensing
----
Copyright (c) 2012 Ervin Kosch, released under the GPL 3 license