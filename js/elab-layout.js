var $duration = 1000;
$(document).ready(function(){
	// - ACCOUNT DROPDOWN
	$('.ui.admindropdown').dropdown({
		transition: 'drop',
		on : 'click',
		duration  : 500		
	});
	$('.ui.moredropdown').dropdown({
		transition: 'fade down',
		duration  :300
	});

	// - SHOW & HIDE SIDEBAR
    $("#showmobiletabletsidebar").click(function(){
        $('.mobiletabletsidebar.animate .menu').transition({
		  	animation : 'swing right',
		    duration  : $duration
		  })
		;
		$('#mobiletabletsidebar').removeClass('hidden');
    });
    $("#hidemobiletabletsidebar").click(function(){
        $('.mobiletabletsidebar.animate .menu')
		  .transition({
		  	animation : 'fade',
		    duration  : $duration
		  });
    });
    $(".ui.accordion").accordion({
		exclusive: false
	});
});

//////// data table
$(document).ready(function(){
	// - MESSAGES
	$('.message .close').on('click', function() {
		$(this).closest('.message').transition('fade');
	});
	// - DATATABLES
	$(document).ready(function(){
		$('#list_of_experiment_id').DataTable();
	});
	var table = $('#list_of_experiment_id').DataTable({
		lengthChange: false,
		buttons: [ 'colvis', 'excel', 'pdf' ]
	});
	table.buttons().container().appendTo(
		$('div.eight.column:eq(0)', table.table().container())
	);
});


$(".openbtn").on("click", function() {
		$(".asd").toggleClass("marginlefting")
 
  })


  $(document).ready(function() {
    var table = $('#list_of_experiment_id').DataTable({
        searchPanes: true
    });
    table.searchPanes.container().prependTo(table.table().container());
    table.searchPanes.resizePanes();
});
  
 