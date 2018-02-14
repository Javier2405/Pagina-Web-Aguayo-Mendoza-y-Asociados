var x=1;
var preguntas=[
  "una pregunta",
  "otra pregunta",
  "la tercera pregunta",
  "la 4ta pregunta"
  ];

$(document).ready(function(){
  document.getElementById("uno").innerHTML=preguntas[0];
  $("#dos").hide();
  $("#im1").hide();
  $("#im2").hide();
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
  $("#rightarrow").click(function(){
    if(x==1){
    $("#im1").show();
    $("#im2").hide();
    $("#im3").hide();
    x=3;
    }
    else if(x==2){
    $("#im1").hide();
    $("#im2").show();
    $("#im3").hide();
    x=1;
    }
    else{
      $("#im1").hide();
      $("#im2").hide();
      $("#im3").show();
      x=2;
    }
  });
  $("#leftarrow").click(function(){
    if(x==1){
    $("#im1").show();
    $("#im2").hide();
    $("#im3").hide();
    x=3;
    }
    else if(x==2){
    $("#im1").hide();
    $("#im2").show();
    $("#im3").hide();
    x=1;
    }
    else{
      $("#im1").hide();
      $("#im2").hide();
      $("#im3").show();
      x=2;
    }
  });
});
