 // Begin Worklist datatables 
 $(document).ready(function() {
		 $('#worklistTable tbody tr').each(function(idx){
    		 $(this).children().eq(1).html(idx + 1);
		 });
                 $('#worklistTable').dataTable({
			 "dom": 'l<"filters">fr<"searchbtn">tip',
			 "oLanguage": { "sSearch": "" },
			 //"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
			  responsive: true,
                         "aoColumnDefs": [
                            {
                                "bSortable": false,                     
				"responsive": true
                             }
                          ]
                  });
		  var table = $('#worklistTable').DataTable();    
		  new $.fn.dataTable.FixedHeader( table );
		  var searchfields = $('#search-filters').html();
		  $('#search-filters').html("");
		  var searchbtn = "<a class=\"btn btnPrimary\" href=\"#\">Search</a>";
		  $("div.filters").html(searchfields);
		  $("div.searchbtn").html(searchbtn);
         });
 // End Worklist datatables
