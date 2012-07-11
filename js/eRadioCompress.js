/* 
** eRadio **
JavaScript function to create an HTML radio button list
Copyright (c) 2012 Ervin Kosch, released under the GPL 3 license
https://github.com/tekrat/eDrop
*/
function eRadio(a,b,c,d,e){var f="<table";if(typeof c!="undefined"){c+=' class="'+c+'"'}f+=">\r\n";var g=1;if(typeof b!="undefined"){for(vs in b.options){f+="<tr>\r\n";f+='	<td valign="top"><input type="radio"';if(typeof a!="undefined"){f+=' name="'+a+'" id="'+a+"_"+g+'"'}if(typeof b.options[vs].value!="undefined"){f+=' value="'+b.options[vs].value+'"'}if(b.options[vs].selected==true||b.options[vs].selected==1||b.options[vs].selected=="1"){f+=' checked="checked"'}if(typeof e!="undefined"){f+=' onclick="'+e+'"'}f+=" /></td>\r\n";f+='	<td valign="top"';if(typeof b.options[vs].style!="undefined"){f+=' style="'+b.options[vs].style+'"'}f+=">";if(typeof b.options[vs].text!="undefined"){f+=b.options[vs].text}else{f+=b.options[vs].value}f+="</td>\r\n";f+="</tr>\r\n";g++}}f+="</table>\r\n";alert(f);return f}