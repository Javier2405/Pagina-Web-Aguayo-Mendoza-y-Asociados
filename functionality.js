var x=1;


$(document).ready(function(){
  $("#uno").hide();
  $("#dos").hide();
  $("#prev").click(function(){
    if(x==1){
    $("#uno").show();
    $("#dos").hide();
    $("#tres").hide();
    x=2;
    }
    else if(x==2){
    $("#uno").hide();
    $("#dos").show();
    $("#tres").hide();
    x=3;
    }
    else{
      $("#uno").hide();
      $("#dos").hide();
      $("#tres").show();
      x=1;
    }
  });
  $("#next").click(function(){
    if(x==1){
    $("#uno").show();
    $("#dos").hide();
    $("#tres").hide();
    x=3;
    }
    else if(x==2){
    $("#uno").hide();
    $("#dos").show();
    $("#tres").hide();
    x=1;
    }
    else{
      $("#uno").hide();
      $("#dos").hide();
      $("#tres").show();
      x=2;
    }
  });
});
