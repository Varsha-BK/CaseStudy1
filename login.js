function validate() {
    let username = document.getElementById("username");
    let pwd = document.getElementById("pwd");
    if (username.value=="admin" && pwd.value==12345){
        window.location.href = "/mytodo.html";
    }
    else{
        alert("Invalid Credentials");
        return false;
    }
}
