/*
$(".left").on("click", function (event){
	
	event.preventDefault()
	
});
*/


// Responsive Menu
$('#toggle').click(function () {
        $(this).toggleClass('active');
        $('.slidemenu').toggleClass('open');
//        $('body').toggleClass('mobile-nav-open');
});