$('.nav-toggle').click(function(){
	$('body').toggleClass('nav-open');

	// $('.nav-main').attr('style', function(index, attr){
	// 	return attr == "display:inline-grid !important;" ? "display: none;" : "display:inline-grid !important;";
	// });

	$('.nav-main').toggleClass('off on');
});

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});

// Modal Controls for loading on Document Ready
// $(document).ready(function(){
//     // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
// $('#modal1').modal('open');
// });

// Modal Attrs
$('.modal').modal({
	dismissible: true, // Modal can be dismissed by clicking outside of the modal
	opacity: .5, // Opacity of modal background
	inDuration: 300, // Transition in duration
	outDuration: 200, // Transition out duration
	startingTop: '4%', // Starting top style attribute
	endingTop: '10%', // Ending top style attribute
	ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
	  alert("Ready");
	  console.log(modal, trigger);
	},
	complete: function() { alert('Closed'); } // Callback for Modal close
  }
);

$('.carousel.carousel-slider').carousel({fullWidth: true});

$(document).ready(function(){
	// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
	$('#add-modal').modal('open');
});

$('.datepicker').pickadate({
	selectMonths: true, // Creates a dropdown to control month
	selectYears: 99, // Creates a dropdown of 15 years to control year,
	today: 'Today',
	clear: 'Clear',
	close: 'Ok',
	closeOnSelect: false // Close upon selecting a date,
});

function myFunction() {
	console.log(document.getElementById("edit").contentEditable)
	var x = (document.getElementById("edit").contentEditable = true)

}