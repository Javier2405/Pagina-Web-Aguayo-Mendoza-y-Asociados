var x=0;
var y=0;
var preguntas=[
  "¿Debes presentar informativa de subsidio al empleo entregado y disminuido?",
  "¿ Cuando es obligatorio emitir en complemento de pago del CFDI 3.3?",
  "¿A partir de que fecha debe solicitarse autorización al cliente para poder cancelar un CFDI 3.3?",
  "¿ Si anotas como método de pago PPD Pago en parcialidades o diferido puedes utilizar como Forma de Pago una diferente a 99 Por Definir?",
  "¿Debes utilizar para el adecuado manejo de CFDI de anticipos un CFDI de Egresos?"
  ];
var respuestas=[
  "NO, el Sat de ultimo momento ha confirmado que no es necesario",
  "A partir del 1 de Abril de 2018",
  "A partir del 1 de Julio de 2018",
  "NO, siempre que se utilice PPD debe anotarse como forma de pago 99 Por Definir",
  "Si es importante tener en cuenta que en general debes emitir un CFDI de Ingresos para anticipo, un segundo de Ingresos para la operación completa y uno de Egresos para “ajustar” el anticipo."
];
// cuando pongas comitas dentro de otras comitas hay que usar ' en vez de " para no interferir
var imagenes=[
  "<a  href='http://www.eluniversal.com.mx/cartera/finanzas/enterate-10-practicas-indebidas-en-la-e-factura-que-el-sat-detecto' target='_blank'><img id='im1' src='Articulos/articulo1.png' class='fluid image'></a>",
  "<a  href='Fiscalizacion.docx' target='_blank'><img id='im2' src='Articulos/art2.png' class='fluid image'></a>",
  "<a  href='Riesgos.docx' target='_blank'><img id='im3' src='Articulos/art3.png' class='fluid image'></a>"
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
