document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("resume.html")
    }
})

let file = {};

function chooseFile(event){
    file = event.target.files[0];
}

function signUp(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(auth => {
        firebase.storage().ref('users/' + auth.user.uid + '/profile.jpg').put(file).then(function () {
            console.log('succesfully uploaded') 
        })
    }).catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});