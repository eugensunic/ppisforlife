$(document).ready(function(){
  var shown=true;
  var shown_2=true;
  var font_size=17;
  var header_array=[
    "Are PPIs safe long-term?","How do PPIs work?"
  ]
   for (var i = 0; i < document.getElementsByClassName("increment_number").length; i++) {
    document.getElementsByClassName("increment_number")[i].innerHTML=i+1+". ";
   }

   $('[data-toggle="popover"]').popover();
   $('#toadd').show();
  //  $('.popover-content').click(function(){
  //    alert();
  //  });
   $("#drugs_header").click(function(){

    location.href="#drugs_heading";
   });
   $("#condition_header").click(function(){
    location.href="#condition_heading";
   });
   $("#sides_header").click(function(){
    location.href="#sides_heading";
   });
   $("#general_header").click(function(){
    location.href="#general_heading";
   });
   $("#lifestyle_header").click(function(){
    location.href="#lifestyle_heading";
   });
   $("#other_header").click(function(){
    location.href="#other_heading";
   });
   $("#procedures_header").click(function(){
    location.href="#procedure_heading";
   });
   $("#statistic_header").click(function(){
    location.href="#procedure_heading";
   });

    $("#hide_show").click(function(){
         shown=!shown;
        $(".panel-body").toggle();
        if (shown===false){
        $("#hide_show").text("show");
        $("#hide_show").css('padding-bottom','4px');
        $("#hide_show").css('width','40px');

        }
        else{
          $("#hide_show").text("hide");
          $("#hide_show").css('padding-bottom','0px');
          $("#hide_show").css('width','34px');

        }
    });
    $("#hide_show_second").click(function(){

         shown_2=!shown_2;
        if (shown_2===true){
          $(".opinion,.knowledge,.interesting").show();
          $(this).text("hide");
          $(this).css("width","34px");
        }
        else{
          $(".opinion,.knowledge,.interesting").hide();
          $(this).text("show");
          $(this).css("width","40px");

        }
    });
    $("#default_font").click(function(){
      font_size=17;
     $(".card-block").css("font-size","17px");
     $("table p").css("font-size","17px");
    });
    $("#increase").click(function(){
      if (font_size<=25){
       font_size=font_size+1;
       var stringit=font_size+"px";
      $(".card-block").css("font-size",stringit);
      $("table p").css("font-size",stringit);
    }
    });
    $("#decrease").click(function(){

      if (font_size>=14){
        font_size=font_size-1;
        var stringit=font_size+"px";
      $(".card-block").css("font-size",stringit);
      $("table p").css("font-size",stringit);
    }
    });
    $("#word,#pdf,#xml").click(function(){
      document.getElementById('footer_0').style.pointerEvents = 'none';
      $("#soon_available").text("Soon available");
      setTimeout(function(){
        $("#soon_available").text("");
        document.getElementById('footer_0').style.pointerEvents = 'auto';
      }, 2000);
    });
});
