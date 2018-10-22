function validar()
{
    var correo, rut,nombre,fecha,celular,tipovivienda;
    name = document.getElementById("name").value;
    run = document.getElementById("run").value;
    date = document.getElementById("date").value;
    phono = document.getElementById("phono").value;
    region = document.getElementById("region").value;
    comuna = document.getElementsByClassName("container-comuna").value;
    tipovivienda = document.getElementById("Tipovivienda").value;

    if(name === "" || run === "" || date === "" ||phono === "" || tipovivienda === "")
    {
        alert("Todos los campos son obligatorios");
    }
    else if(name.lenght>30) 
    {
        alert("El nombre es demasiado largo");
        return false;
    }
    else if(mail.lenght>100) 
    {
        alert("El correo es demasiado largo");
        return false;
    }
    else if(isNaN(phono)) 
    {
        alert("Ingrese numeros");
        return false;
    }

}
function Solonumeros(e){
    key=e.keyCode || e.which;
    teclado=String.fromCharCode(key);
    numero="0123456789";
    especiales="8-37-38-46";
    teclado_especial=false;

    for(var i in especiales)
    {
        if(key==especiales[i])
        {
            teclado_especial=true
        }
    }

    if(numero.indexOf(teclado)==-1 && !teclado_especial)
    {
        return false;
    }
}


$(document).ready(function(){
    $("#region").on('change', function(){
        if ($(this).val() == "Metropolitana"  ){
            $("#Region6").show();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "0"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "Arica"  ){
            $("#Region6").hide();
            $("#Region1").show();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "Tarapaca"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").show();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "Antofagasta"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").show();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "Atacama"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").show();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "Valparaiso"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").show();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "BernardoO'higgins"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").show();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "Maule"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").show();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "BioBio"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").show();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "Araucania"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").show();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "Ñuble"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").show();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "Rios"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").show();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "Lagos"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").show();
            $("#Region14").hide();
            $("#Region15").hide();
        }else if ($(this).val() == "Aysen"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").show();
            $("#Region15").hide();
        }else if ($(this).val() == "Magallanes"  ){
            $("#Region6").hide();
            $("#Region1").hide();
            $("#Region2").hide();
            $("#Region3").hide();
            $("#Region4").hide();
            $("#Region5").hide();
            $("#Region7").hide();
            $("#Region8").hide();
            $("#Region9").hide();
            $("#Region10").hide();
            $("#Region11").hide();
            $("#Region12").hide();
            $("#Region13").hide();
            $("#Region14").hide();
            $("#Region15").show();
        }
    })
})

function modificarTexto() {
    var letters = 
                [   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", 
                    "v", "w", "x", "y", "z", ",", ".", "!", "'", "$", "%", "&",
                    "/", "(", ")", "=", "?", "¿", "¡", ".", ","
                ]
    var txtRut = document.getElementById("txtRut")
    txtRut.value = txtRut.value.toLowerCase()
    for(let i in letters){
        txtRut.value = txtRut.value.replace(letters[i], "")
    }
    if(txtRut.value.includes("-")) {
        txtRut.value = txtRut.value.replace(/-/g, "")
        txtRut.value = txtRut.value.slice(0, txtRut.value.length - 1) + "-" + txtRut.value.slice(txtRut.value.length - 1)
    }else
    {
        txtRut.value = txtRut.value.slice(0, txtRut.value.length - 1) + "-" + txtRut.value.slice(txtRut.value.length - 1)
    }
    if(txtRut.value.includes("k")) {
        txtRut.value = txtRut.value.replace(/k/g, "")
        txtRut.value += "k"
    }
}