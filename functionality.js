var x=0;
var y=0;
var preguntas=[
  "una pregunta",
  "otra pregunta",
  "la tercera pregunta",
  "la 4ta pregunta",
  "la 5ta pregunta"
  ];
var respuestas=[
  "una respuesta",
  "otra respuesta",
  "la tercera respuesta",
  "la cuarta respuesta",
  "la quinta respuesta"
];
// cuando pongas comitas dentro de otras comitas hay que usar ' en vez de " para no interferir
var imagenes=[
  "<a  href='http://www.eluniversal.com.mx/cartera/finanzas/enterate-10-practicas-indebidas-en-la-e-factura-que-el-sat-detecto'><img id='im1' src='Articulos/articulo1.png' class='fluid image'></a>",
  "<img id='im2' src='Imagenes/Javier1.png' class='fluid image'>",
  "<img id='im3' src='Imagenes/Javier2.png' class='fluid image'>"
  ];


$(document).ready(function(){
  document.getElementById("uno").innerHTML=preguntas[0];
  document.getElementById("imash").innerHTML=imagenes[0];
  document.getElementById("dos").innerHTML=respuestas[0];
  
  $("#prev").click(function(){
    //cambiar mods a la cantidad de preguntas del array
    x=(x+1)%5;
    document.getElementById("uno").innerHTML=preguntas[x];
    document.getElementById("dos").innerHTML=respuestas[x];
  });
  $("#next").click(function(){
    //cambiar mods a la cantidad de preguntas del array YYY cambiar el 4 a la cantidad -1
    x=(x+4)%5;
    document.getElementById("uno").innerHTML=preguntas[x];
    document.getElementById("dos").innerHTML=respuestas[x];
  });
  $("#rightarrow").click(function(){
    y=(y+1)%3;
    document.getElementById("imash").innerHTML=imagenes[y];
  });
  $("#leftarrow").click(function(){
    y=(y+2)%3;
    document.getElementById("imash").innerHTML=imagenes[y];
  });
});
