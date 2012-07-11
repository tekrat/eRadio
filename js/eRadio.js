/* 
** eRadio **
JavaScript function to create an HTML radio button list
Copyright (c) 2012 Ervin Kosch, released under the GPL 3 license
https://github.com/tekrat/eDrop
*/
function eRadio(n, d, c, s, f){
	var r = "<table"
	if(typeof c != "undefined"){ c += ' class="' + c + '"'; }
	r += ">\r\n";
	
	var ic = 1;
	if(typeof d != "undefined"){
		// Loop through value sets (vs)
		for(vs in d.options){
			r += "<tr>\r\n";
			r += "	<td valign=\"top\"><input type=\"radio\"";
			if(typeof n != "undefined"){ r += ' name="' + n + '" id="' + n + '_' + ic + '"'; }
			if(typeof d.options[vs].value != "undefined"){ r += ' value="' + d.options[vs].value + '"'; }
			if(d.options[vs].selected == true || d.options[vs].selected == 1 || d.options[vs].selected == "1"){ 
				r += ' checked="checked"'; 
			}
			if(typeof f != "undefined"){ r += ' onclick="' + f + '"'; }
			r += " /></td>\r\n";
			r += "	<td valign=\"top\"";
			if(typeof d.options[vs].style != "undefined"){ r += ' style="' + d.options[vs].style + '"'; }
			r += ">"
			if(typeof d.options[vs].text != "undefined"){ r += d.options[vs].text; }else{ r += d.options[vs].value; }
			r += "</td>\r\n";
			r += "</tr>\r\n";
			ic++;
			
			
		}
	}
	r += "</table>\r\n";
	alert(r);
	return r;
}