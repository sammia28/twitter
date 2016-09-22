window.addEventListener("load", function(){
    var boton = document.getElementById("publicar");
    var contador =  document.getElementById("contador");
    var caracterMax = 140;
    boton.disabled = true;
    contador.innerHTML = 140;
    var texto = document.getElementById("ingresoTexto");
    var textoIngresado = 150;
    boton.addEventListener("click",function(e){
        e.preventDefault();
        var newContenido = document.createElement ("div");
        newContenido.innerHTML  = texto.value;
        var publicacionesVarias = document.getElementById("tweet-publicado");
        publicacionesVarias.insertBefore(newContenido, publicacionesVarias.childNodes[0]);
        document.getElementById("ingresoTexto").value = "";
        horaPublicacion(newContenido);
        contador.innerHTML = 140;
        boton.disable = true;
    });
    function horaPublicacion (newContenido){
        var horaActual = new Date ();
        var hora = horaActual.getHours();
        var minuto = horaActual.getMinutes();
        var horaActual = hora + ":"+ minuto;
        var horaContenedor = document.createElement("div");
        horaContenedor.innerHTML = horaActual;
        newContenido.insertBefore(horaContenedor, newContenido.childNodes[0]);
    };
    ingresoTexto.addEventListener("keypress", function(){
        boton.disabled = false;
        var cantidadCaracteres = texto.value.length;
        contador.innerHTML = caracterMax-cantidadCaracteres;
        if (cantidadCaracteres === 0 ){
            boton.disabled  = true;
        }
        if(cantidadCaracteres < 0){
            boton.disabled = true;
        }
        if( cantidadCaracteres > 140){
            boton.disabled = true;
        }
        if ( cantidadCaracteres > caracterMax){
            boton.disabled = true;
        }
        if( cantidadCaracteres > 120 ){
            contador.style.color = "blue";
        }else{
            contador.style.color= "black";
        }
        if( cantidadCaracteres > 130 ){
            contador.style.color = "red";
        }
    });
    texto.addEventListener("kepress", function(){
        if(window.event.keyCode == 13){
            if (this.value.split("\n").length != 0){
                this.rows = this.value.split("\n").length+2
            }else{
                this.rows = 2;
            };
        };
    }); 
    texto.addEventListener("keypress", function(){
        texto.style.cssText = "height:auto; padding: 0";
        texto.style.cssText = "height : " + texto.scrollHeight + "px"; 
     });
})







