document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    displayAds();    

})


function googleLogin() {
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


function displayAds(filter=null) {
  const mainGrid = document.getElementById("main-grid");
  if (filter) {

  }
  else {
    const db = firebase.firestore();

    const postedAds = db.collection("items");

    postedAds.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const itemData = doc.data();
        
        const owner = itemData.Owner;
        const price = itemData.Price;
        const name = itemData.Name;
        const dateOfEntry = itemData['Date of entry'];

        console.log(owner + " " + price + " " + name);

        const adDiv = document.createElement("div");
        adDiv.classList.add("ad-item");
        adDiv.innerHTML = `
          <h3>${name}</h3>
          <p>Owner: ${owner}</p>
          <p>Price: $${price}</p>
          <p>Date of Entry: ${dateOfEntry}</p>
        `;

        mainGrid.appendChild(adDiv);

      })

  })

  }
}