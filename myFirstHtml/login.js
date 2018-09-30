function onClickLogin(){
    var str1 = new RegExp("^[a-zA-Z]+$");
    var str2 = new RegExp("^.{6,12}$");
    if(!str1.test(document.forms[0].username.value)){
        alert("Please check the username");
        document.forms[0].username.focus();
        return;
    }
    if(!str2.test(document.forms[0].password.value)){
        alert("Please check the password");
        document.forms[0].password.focus();
        return;
    }
    window.location.href = "table.html";
}

