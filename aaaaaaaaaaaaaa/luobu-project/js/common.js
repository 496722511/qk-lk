	$(function(){
		var html =  "<div class='swiper-container'>"
		    html += "<div class='swiper-wrapper'>"
			html +=	"<div class='swiper-slide'>"
	        html += "<img src='img/show1_01.png'/>"
		    html += "</div>"
		    html += "<div class='swiper-slide'>"
	        html += "<img src='img/show2.png'/>"
		    html += "</div>"
		    html += "<div class='swiper-slide'>"
	        html += "<img src='img/show3.png'/>"
		    html += "</div>"
			html += "</div>"
			html += "<div class='swiper-pagination'></div>"
			html += "</div>";
		$(".show").append(html);
		
		var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        paginationClickable: true,
	        spaceBetween: 0,
	        centeredSlides: true,
	        autoplay: 2000,
	        autoplayDisableOnInteraction: false,
	        loop: true
	    });
	});
	