const pwdbox=document.getElementById("password")
const genbtn=document.getElementById("btn")
const img=document.querySelector("img")
const alertmsg=document.querySelector(".alertmsg")
const length=12

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|{}[]<>?/";

const allchar=upperCase+lowerCase+numbers+symbols;

genbtn.addEventListener("click",()=>{
    let password="";
    for(let i=0; i<length;i++){
        const randomindex=Math.floor(Math.random()*allchar.length);
        password+=allchar[randomindex];
    }
    pwdbox.value=password;
})
img.addEventListener("click",()=>{
    pwdbox.select();
    pwdbox.setSelectionRange(0,9999)
    navigator.clipboard.writeText(pwdbox.value);
})
img.addEventListener("click", () => {
    if (pwdbox.value === "") {
        showAlert("Generate a password first!", "red");
        return;
    }

    navigator.clipboard.writeText(pwdbox.value);
    showAlert("Password Copied!", "green");
});
function showAlert(text, color) {
    alertmsg.textContent = text;
    alertmsg.style.color = color;
    alertmsg.classList.add("show");

    setTimeout(() => {
         alertmsg.classList.remove("show");
    }, 2000);
}