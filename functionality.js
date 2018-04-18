var x=0;
var y=0;
var preguntas=[
  "debes presentar informativa de subsidio al empleo entregado y disminuido?",
  "Cuando es obligatorio emitir en complemento de pago del CFDI 3.3?",
  "A partir de que fecha debe solicitarse autorizacion al cliente para poder cancelar un CDFI 3.3?",
  "Si anotas como metodo de pago PPD Pago en parcialidades o diferido puedes utilizar como forma de pago una diferente a 99 por definir?",
  "Debes utilizar el adecuado manejo de CFDI de anticipos o un CFDI de egresos?",
  "En que medio pueden almacenarse los xml emitidos y recibidos? ",
  "que requisitos deben reunir las presentaciones impresas del CFDI?"
  ];
var respuestas=[
  "No, el SAT de ultimo momento ha confirmado que no es necesario",
  "A partir del 1ro de abril de 2018",
  "A partir del 1ro de julio de 2018",
  "NO, siempre que se utilice PPD debe anotarse como forma de pago 99 por definir",
  "Si es importante tener en cuenta que en general debes de emitir un CFDI de ingresos para anticipo, un segundo de ingresos para la operacion completa y uno de egresos para ajustar el anticipo",
  "Deberan almacenarlo en medios magneticos, opticos o de cualquier otra tecnologia",
  "los señalados en los articulos 29,29 A del CFF y regla 2.7.1.7"
];
// cuando pongas comitas dentro de otras comitas hay que usar ' en vez de " para no interferir
var imagenes=[
  "<iframe width='560' height='315' src='https://www.youtube.com/embed/_CxyQsDaHFk?rel=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
  "<a  href='http://www.eluniversal.com.mx/cartera/finanzas/enterate-10-practicas-indebidas-en-la-e-factura-que-el-sat-detecto' target='_blank'><amp-img id='im1' src='Articulos/articulo1.png' width='900' height='750' layout='responsive'></amp-img></a>",
  "<a  href='Fiscalizacion.docx' target='_blank'><img id='im2' src='Articulos/art2.png' class='fluid image im2'></a>",
  "<a  href='Riesgos.docx' target='_blank'><img id='im3' src='Articulos/art3.png' class='fluid image im3'></a>"
  ];


$(document).ready(function(){
  document.getElementById("uno").innerHTML=preguntas[0];
  document.getElementById("imash").innerHTML=imagenes[0];
  document.getElementById("dos").innerHTML=respuestas[0];

  $(".prev").click(function(){
    //cambiar mods a la cantidad de preguntas del array
    x=(x+1)%7;
    document.getElementById("uno").innerHTML=preguntas[x];
    document.getElementById("dos").innerHTML=respuestas[x];
  });
  $(".next").click(function(){
    //cambiar mods a la cantidad de preguntas del array YYY cambiar el 4 a la cantidad -1
    x=(x+6)%7;
    document.getElementById("uno").innerHTML=preguntas[x];
    document.getElementById("dos").innerHTML=respuestas[x];
  });
  $(".rightarrow").click(function(){
    y=(y+1)%4;
    document.getElementById("imash").innerHTML=imagenes[y];
  });
  $(".leftarrow").click(function(){
    y=(y+3)%4;
    document.getElementById("imash").innerHTML=imagenes[y];
  });
});
