const nameInput = document.getElementById("nameInput");
const mail = document.getElementById("mail");
const telNumber = document.getElementById("telNumber");
const submitBtn = document.getElementById("submitBtn");
const infoBox = document.getElementById("infoBox");


printAdressBok();
function printAdressBok() {

fetch(`http://localhost:3000/users`)
.then(response => response.json())
.then(data => {
  console.log(data);

  infoBox.innerHTML = "";

  for(person in data) {
    infoBox.insertAdjacentHTML("afterbegin", `<ul><li>Namn: ${data[person].name}</li><li>E-mail: ${data[person].mail}</li><li>Telefon nummer: ${data[person].telNumber}</li></ul>`)
  }
})

}


submitBtn.addEventListener("click", () => {
  let newPerson = {name: nameInput.value, mail: mail.value, telNumber: telNumber.value}

  fetch(`http://localhost:3000/users/new`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPerson)
  })
  .then(response => response.json())
  .then(data => {

    printAdressBok();

  });
  
});
