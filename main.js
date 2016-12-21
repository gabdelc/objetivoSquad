
function calcular()
{
 
var puntos = document.getElementById("puntos").value;
var max_puntos = document.getElementById("max_puntos").value;
var porcentaje = (100 * puntos) / max_puntos;
// (100 * puntos ) / max-puntos

if(porcentaje >= 80)
    {
       document.getElementById("salida").innerHTML = "muy bien squad";
    } else {
       document.getElementById("salida").innerHTML = "pueden hacerlo mejor";
    }
   
}