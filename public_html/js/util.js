/* 
 * Fuentes Javascript con funcones de utilidades
 * Curso Java Enterprise
 */

//Función que valida los campos
function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try { 
        x = Number(x);
        if(x === "")  throw "is empty";
        if(isNaN(x)) throw "is not a number";
        if(x > 10)   throw "is too high";
        if(x < 5)    throw "is too low";
    }
    catch(err) {
        message.innerHTML = "Input " + err;
    }
    finally {
        document.getElementById("demo").value = "";
    }
}


