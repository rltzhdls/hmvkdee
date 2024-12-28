$(document).ready(function () {
	if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
     var logo = document.querySelector('.logo');
        if (logo) { 
            logo.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqvycUcYqOgjrA5YbCqg0LjLBrPZkq-dcr1ygmcIbhb8NigQjn42FbtWccGwT2NIMZ_O2nOgpE5LpjBdL92Jc5qAQJ3uKwmPwjHao0VhiNPixLGhYbk-lyRzmBjTW2qSSSFzrDgmiZUpMrIFTXhz1Me2Q5nf1TXdt5JuWe5uqmQQKLDK-N7pNGoyNbiKU/s16000/heven.png';
        }
	
	var vds = document.getElementById('vds');
    
    if (vds) {
        vds.src = "https://vod.plaync.com/lineage/update/240620/title_bg.mp4#t=0.1";
        document.getElementById('vd').load();
    }
	}

});

