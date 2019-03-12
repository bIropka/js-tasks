window.onscroll = function() {
	var scrollTop = document.documentElement.scrollTop,
		headerHeight = document.getElementsByTagName("header")[0].offsetHeight,
		sticky = document.getElementById("sticky-block"),
		stickyWrap = document.getElementById("sticky-wrapper");
		stickyWrapPadding = parseInt(window.getComputedStyle(stickyWrap, null).getPropertyValue('padding-bottom'));
	if(scrollTop <= headerHeight){
		sticky.style.cssText = '';
	} else if (scrollTop >= (headerHeight + stickyWrap.offsetHeight - sticky.offsetHeight - stickyWrapPadding)){
		sticky.style.cssText = 'position:absolute; top:auto;';
		sticky.style.bottom = stickyWrapPadding + 'px';
	} else{
		sticky.style.cssText = 'position:fixed; bottom:auto;';
		sticky.style.top = stickyWrapPadding + 'px';
	}
}
