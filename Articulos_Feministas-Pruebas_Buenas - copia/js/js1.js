var urll = encodeURIComponent("https://rawgit.com/borjadevelop/Articulos_Feministas.v2/Indent/noticia1.html");
var j = 0;
var jsons = 1;
var url = "https://rawgit.com/borjadevelop/Articulos_Feministas/Pruebas_Buenas/json/json";
var final = ".json";


$(document).ready(function() {




    var title = "Frida Kahlo";

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