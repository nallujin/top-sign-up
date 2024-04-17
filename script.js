const submitButton = document.getElementById("submit");


const phone = document.getElementById("phone");
phone.addEventListener("input", (e)=> {
    const input = e.target.value;
    const regex = /^[0-9]{0,12}$/;
    if (!regex.test(input)) {
        e.target.value = input.slice(0, -1);
    }
});

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const name = [firstName, lastName];
name.forEach((theName)=>{
    theName.addEventListener("input", (e)=>{
        const input = e.target.value;
        const regex = /^[A-Z, a-z]{0,20}$/;
        if (!regex.test(input)) {
            e.target.value = input.slice(0, -1);
        }
    })
})

const password = document.getElementById("password");
const rePass = document.getElementById("re-pass");
rePass.addEventListener("input", (e)=>{
    const pw = password.value;
    const rePw = rePass.value;
    if (pw !== rePw){
        submitButton.disabled = true;
        submitButton.textContent = "PASSWORD DOESN'T MATCH!"
        submitButton.style.opacity = "0.3";
        password.style.borderColor = "#ff0000";
        rePass.style.borderColor = "#ff0000";
    } else {
        submitButton.disabled = false;
        submitButton.textContent = "CREATE ACCOUNT"
        submitButton.style.opacity = "1";
        password.style.borderColor = "#000";
        rePass.style.borderColor = "#000";
    }
})
