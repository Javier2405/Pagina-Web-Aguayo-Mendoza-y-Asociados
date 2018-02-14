var x=0;
var y=1;
var preguntas=[
  "una pregunta",
  "otra pregunta",
  "la tercera pregunta",
  "la 4ta pregunta"
  ];

$(document).ready(function(){
  document.getElementById("uno").innerHTML=preguntas[0];
  $("#im1").hide();
  $("#im2").hide();
  $("#prev").click(function(){
    //cambiar mods a la cantidad de preguntas del array
    x=(x+1)%5;
    document.getElementById("uno").innerHTML=preguntas[x];
  });
  $("#next").click(function(){
    //cambiar mods a la cantidad de preguntas del array YYY cambiar el 4 a la cantidad -1
    x=(x+4)%5;
    document.getElementById("uno").innerHTML=preguntas[x];
  });
  $("#rightarrow").click(function(){
    if(y==1){
    $("#im1").show();
    $("#im2").hide();
    $("#im3").hide();
    y=3;
    }
    else if(y==2){
    $("#im1").hide();
    $("#im2").show();
    $("#im3").hide();
    y=1;
    }
    else{
      $("#im1").hide();
      $("#im2").hide();
      $("#im3").show();
      y=2;
    }
  });
  $("#leftarrow").click(function(){
    if(y==1){
    $("#im1").show();
    $("#im2").hide();
    $("#im3").hide();
    y=3;
    }
    else if(y==2){
    $("#im1").hide();
    $("#im2").show();
    $("#im3").hide();
    y=1;
    }
    else{
      $("#im1").hide();
      $("#im2").hide();
      $("#im3").show();
      y=2;
    }
  });
});
