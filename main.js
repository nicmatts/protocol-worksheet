jQuery(document).ready(function($){
    $( "#protocol" ).hide();

    $( "#submit" ).click(function() {
        var itemNumber = $("#item-number").val();
        var itemTitle = $("#item-title").val();
    
        document.title = "Public Hearing: " + itemTitle;

        $( "span#show-item-number" ).append(itemNumber);  
        $( "span#show-item-title" ).append(itemTitle); 

        $( "#form-container").hide();
        $( "#protocol" ).show();
        
        $('#reload').click(function() {
            location.reload();
        });

    });
      
    $( "li" ).click(function() {
        $( this ).toggleClass( "strike" );
    }); 
});