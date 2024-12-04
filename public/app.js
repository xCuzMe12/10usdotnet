document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app)


})


function googleLogin() {
  console.log("aaaa")
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
        .then(result => {
          const user = result.user;
          document.getElementById("logged-user").innerHTML = "Logged in as: " + user.displayName;
        })
        .catch(console.log)
}

let loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", e => {
  googleLogin();
})