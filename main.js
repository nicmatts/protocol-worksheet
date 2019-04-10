jQuery(document).ready(function($){
    $( "#protocol" ).hide();

    $( "#submit" ).click(function() {
        var itemNumber = $("#item-number").val();
        var itemTitle = $("#item-title").val();
        

        $( "span#show-item-number" ).append(itemNumber);  
        $( "span#show-item-title" ).append(itemTitle); 
        console.log(itemNumber); 
        console.log(itemTitle);
        $( "#form-container").hide();
        $( "#protocol" ).show();
        
        $('#reload').click(function() {
            location.reload();
        });

      });
});