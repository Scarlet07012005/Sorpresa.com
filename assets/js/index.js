function login() {
    var password = document.getElementById("password").value;

    if (password === "24102020") {
        document.getElementById("message").innerHTML = "Lo lograste!!.";
        window.location.href = "paginaEspecial.html";
    } else {
        document.getElementById("message").innerHTML = "Contraseña incorrecta. Es la fecha de nuestro aniversario.";
    }
}