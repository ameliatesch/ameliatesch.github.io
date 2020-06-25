
var modal = window.location.href.split('?')[1];

if (modal != 'SAA' && modal != 'TJ' && modal != 'HEB') {
	modal = 'SAA';
}

$("#modalContent").load(modal + ".html")
