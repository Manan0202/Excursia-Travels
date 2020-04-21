function openNav() {
    document.getElementById("NAVJS").style.width = "100%";
}

function closeNav() {
    document.getElementById("NAVJS").style.width = "0";
}

$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 1) {
    	$('.nav').addClass('cover');
    }
    else {
    $('.nav').removeClass('cover');
    }	
  });
});


function scrollToTop(){
		$(document).ready(function(){
    $(this).scrollTop(1);
});
}

function check() {
	var c=1;
	
	if (document.getElementById('field1').value == "") {
        alert("Please fill in the Name field.");
		c=0;
    }
	
	if (document.getElementById('field2').value == "") {
        alert("Please fill in the E-Mail ID field.");
		c=0;
    }
	
	
	if (document.getElementById('query').value == "") {
        alert("Please fill in the Feedback field.");
		c=0;
    }
	
	if (c!=0){
		window.open("thankyou.html",'Thanks for the feedback!','width=800,height=400')
	}
}