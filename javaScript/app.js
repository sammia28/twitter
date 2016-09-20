window.addEventListener("load", function(){
    var boton = document.getElementById("publicar");
    boton.addEventListener("click",function(e){
        e.preventDefault();
        var texto = document.getElementById("ingreso-texto").value ;
        var newContenido = document.createElement ("div");
        newContenido.innerHTML  = texto;
        var publicacionesVarias = document.getElementById("publicacion");
        publicacionesVarias.insertBefore(newContenido, publicacionesVarias.childNodes[0]);
        document.getElementById("ingreso-texto").value = "";
    });
})

function contador (){
    var cantidadMax  = "140";
    var contenido = ingreso-texto.length;
    if( contenido < cantidadMax) {
        
    }else{
        
    }
}


var textoArea = document.getElementById("ingreso-texto").value;
var numeroCarateres = 