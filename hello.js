(function(){

var el=document.createElement("p"),
content=document.createTextNode("<strong>This was dynamically created</strong>");
el.appendChild(content);
el.setAttribute("align","center")
document.body.appendChild(el);

}());
