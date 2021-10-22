// alert("Hello World!");
console.log("Hello avery website looks great!");

$(document).ready(function(){
    $("button").click(function(){

      if ($('button:contains("hide exercises")')){
        $("p").toggle();
        $(this).html('show exercise');
      
      

    });
});
    
      // $("p").toggle();
      // $("p").toggleClass('on');