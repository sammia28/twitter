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
        contador.innerHTML = 140;
        boton.disable = true;
    });
    ingresoTexto.addEventListener("keyup", function(){
        boton.disabled = false;
        var cantidadCaracteres = texto.value.length;
        contador.innerHTML = caracterMax-cantidadCaracteres;
        if (cantidadCaracteres === 0 ){
            boton.disabled  = true;
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
    texto.addEventListener("keyup", function(){
        if(window.event.keyCode == 13){
            if (this.value.split("\n").length != 0){
                this.rows = this.value.split("\n").length+2
            }else{
                this.rows = 2;
            };
        };
        /*var blablaContenido = document.getElementById("ingresoTexto");
        blablaContenido.addEventListener("keyup",function(){
            if( window.event)
        });*/
        
        
        
        
        
        
  /*      var textarea = document.getElementById("ingresoTexto");
        textarea.addEventListener("input", autosize);
        function autosize(){
            textarea.style.cssText = "padding:0";
            textarea.style.cssText = "height:0" + textarea.scrollHeight + "px";
        }*/
           
    }); 
})





