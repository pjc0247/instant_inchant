var mouse = {x: 0, y: 0};
var popup = null;

document.addEventListener('mousemove', function(e){ 
    mouse.x = e.clientX || e.pageX; 
    mouse.y = e.clientY || e.pageY 
});
document.addEventListener('mouseup',function(event){
	popup.remove();
});
document.addEventListener('mouseup',function(event){
    var sel = window.getSelection();
	var keyword = sel.toString();

	var iframe = document.createElement("iframe");
	iframe.src = chrome.extension.getURL('popup.html');
	iframe.style.position = "fixed";
	iframe.style.left = mouse.x.toString() + "px";
	iframe.style.top = mouse.y.toString() + "px";
	iframe.style.zIndex = 1000;
	document.body.appendChild(iframe);

	console.log(sel);
	popup = iframe;

	/* TODO : keyword를 가지고 인챈트 정보 검색 */
	/*           팝업 페이지에 반영*/
})
