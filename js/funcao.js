function logar() {
    
    var email = document.getElementById('email').value;
    var Password = document.getElementById('Password').value;


    if (email == "Hugo@gmail.com" && Password == "12345") {
       alert("Success");
       location.href = "inscreva.html";
    } else {
       alert("usuario ou senha incorreto!");
    }
}