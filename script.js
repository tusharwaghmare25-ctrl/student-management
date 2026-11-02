
function loginUser() {
    let id = document.getElementById("login").value;
    let pass = document.getElementById("password").value;

    if (id === "admin" && pass === "1234") {
        document.getElementById("message").innerHTML =
            "Login Successful!";
    } else {
        document.getElementById("message").innerHTML =
            "Invalid Login!";
    }
}
