function validar()
{
    var correo, rut,nombre,fecha,celular,tipovivienda;
    name= document.getElementById("name").value;
    run= document.getElementById("run").value;
    date= document.getElementById("date").value;
    phono= document.getElementById("phono").value;
    tipovivienda= document.getElementById("tipovivienda").value;

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