var urll = encodeURIComponent("https://rawgit.com/borjadevelop/Articulos_Feministas.v2/Indent/index.html");
var j = 0;
var x = 0;
var jsons = 1;
var url = "https://rawgit.com/borjadevelop/Articulos_Feministas/Pruebas_Buenas/json/json";
var final = ".json";


$(document).ready(function() {



    $("#boton1").click(function() {
        $.getJSON(url + jsons + final, function(objeto) {

            pintar(objeto);
            if (j == 6) {

                $("#boton1").css({
                    "display": "none"
                })
            }
            jsons++;
        });



    });




    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 10) {

            if (x < 2) {

                $.getJSON(url + jsons + final, function(objeto) {
                    pintar(objeto);
                    if (j == 6) {
                        $("#boton1").css({
                            "display": "none"
                        });
                    };
                    jsons++;
                    x++;

                });
            }




        }
    });




    hoverMore();




    var title = "Página de artículos feministas";

    $("#face").append($("<a>", {
        href: "https://www.facebook.com/share.php?u=" + urll,
        rel: "nofollow",
        id: "face1"
    }));
    $("#face1").append($('<img>', {
        src: "img/ico_face1.png"
    }));

    $("#twitter").append($("<a>", {
        href: "https://twitter.com/share?text=" + title + "&url=" + urll,
        rel: "nofollow",
        id: "twitter1"
    }));
    $("#twitter1").append($("<img>", {
        src: "img/ico_face.png"
    }));



});



function pintar(json) {

    $.each(json, function(i, noticia) {



        $("#noticiasVarias").append($(' <a > ', {
            href: "noticia1.html",
            id: "enlc1" + (j + 1)
        }));
        $("#" + "enlc1" + (j + 1)).append($('<div >', {
            class: "row",
            id: "row" + (j + 1)
        }));

        $("#" + "row" + (j + 1)).append($('<div>', {
            class: "col-sm-5",
            id: "imgdiv" + (j + 1)
        }));
        $("#" + "imgdiv" + (j + 1)).append($('<img>', {
            src: noticia.url,
            class: "img-responsive",
            style: "width:100%",
            alt: "Image"
        }));
        $("#" + "imgdiv" + (j + 1)).append($('<p>', {
            text: noticia.foto
        }));
        $("#" + "row" + (j + 1)).append($('<div>', {
            class: "col-sm-5",
            id: "divtot" + (j + 1)
        }));
        $("#" + "divtot" + (j + 1)).append($('<h3>', {
            text: noticia.tittle
        }));
        $("#" + "divtot" + (j + 1)).append($('<hr />', {}));
        $("#" + "divtot" + (j + 1)).append($('<p>', {
            text: noticia.descripcionCorta
        }));
        $("#" + "divtot" + (j + 1)).append($('<hr />', {}));
        $("#" + "divtot" + (j + 1)).append($('<small>', {
            text: noticia.AutorYFecha
        }));
        $("#" + "noticiasVarias").append($('<div>', {
            class: "col-sm-12",
            id: "separator" + (j + 1)
        }));
        $("#" + "separator" + (j + 1)).append($('<hr />', {}));


        j++;

    });


}




function hoverMore() {

    $("#boton1").mouseover(function() {
        $("#boton1").css({
            "box-shadow": "0px 5px 10px 6px",
            "z-index": "50",
            "border": "5"
        });
        $("#masNoticias").css({
            "font-weight": "bold"
        });
    });
    $("#boton1").mouseout(function() {
        $("#boton1").css({
            "box-shadow": "0px 0px 0px 0px",
        });
        $("#masNoticias").css({
            "font-weight": "normal"
        });
    });
}




/*
<div class="row" id="noticia123">
                        <div class="col-sm-5">
                            <img src="img/noticias/noticia1/imgM1.png" class="img-responsive" style="width:100%" alt="Image">
                            <p>Diferentes mujeres del mundo feminista.</p>
                        </div>


                        <div class="col-sm-5"> <h3>Mujeres feministas del mundo</h3>
                            <hr />
                            <p>blabla bla blablablablaablabalbalbablasdasdas das das dasdasdas das dasdasda sdas<hr /><small> Autor de la noticia / fecha y hora edicion. </small> </p>    
                        </div>
                    </div>  

                    <div id="separator" class="col-sm-12"> 
                        <hr />
                    </div>




FUNCION DE HOVER FUNCIONANDO



function hoverMore(){

    $("#boton1").mouseover(function(){
        $("#boton1").css({"box-shadow": "0px 5px 10px 6px", "z-index": "50", "border": "5"});
        $("#masNoticias").css({"font-weight":"bold" });
    });
    $("#boton1").mouseout(function(){
        $("#boton1").css({"box-shadow": "0px 0px 0px 0px"});
  });}








INTENTO DE BOTON :


$( "#boton1" ).click(function() {
  $.getJSON( url+jsons+final, function(objeto) {
    alert("entra a a las funciones del json");
    pintar(objeto);
    jsons++;
  });



});


CONSEGUIR EL JSON FUNCIONANDO

  $.getJSON( "https://rawgit.com/borjadevelop/Articulos_Feministas/Pruebas_Buenas/json/json1.json", function(objeto) {
    alert("entra a a las funciones del json");
    pintar(objeto);
  });







                        /*
                        Activar el scroll down
                        $(document).ready(function() {
                        $(window).scroll(function(){
                        if($(window).scrollTop()+$(window).height()>$(document).height()-10){
                            alert("estoy abajo del todo");
                              }
                            });
  
                  });





                        Subir el scroll al top de la pagina
                        $(window).scrollTop(0);

                        */