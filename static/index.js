let amount = document.getElementById("tempmail").value;
let xhr = new XMLHttpRequest();
xhr.open("GET","https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1",true);
xhr.send()
xhr.onload = function(){
    let emails = JSON.parse(this.responseText)
let getEmail = document.getElementById("generate");
getEmail.addEventListener("click",attach);
function attach(){
    let showEmail = document.getElementById("showmail");
        showEmail.innerText = emails
        console.log(emails)
};
};

