  $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#firstTime" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );
  $("#articlesContainer").accordion();


