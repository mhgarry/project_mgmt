// https://www.w3schools.com/howto/howto_js_dropdown.asp
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

// USER
function dropDownUser() {
  document.getElementById("userDropdown").classList.toggle("show");
}
function dropDownUserAfter() {
  document.getElementById("userDropdown").classList.remove("show");
}

function selectUser(e) {
  console.log("User clicked ");
  console.log(e);
  document.querySelector('.selected-user p').innerHTML = e.target.text;
  document.querySelector('.selected-user p').setAttribute('user_id', e.target.attributes.user_id.value);
  dropDownUserAfter()
}

const aTags = document.querySelectorAll("#userDropdown > a");
for(let aTag of aTags) {
  aTag.onclick = selectUser;
}

// STATUS
function dropDownStatus() {
  document.getElementById("statusDropdown").classList.toggle("show");
}
function dropDownStatusAfter() {
  document.getElementById("statusDropdown").classList.remove("show");
}

function selectStatus(e) {
  console.log("Status clicked ");
  console.log(e);
  //e.target.text //email 
  //e.target.attributes.user_id.value
  document.querySelector('.selected-status p').innerHTML = e.target.text;
  document.querySelector('.selected-status p').setAttribute('status', e.target.text);
  dropDownUserAfter()
}

const aTags2 = document.querySelectorAll("#statusDropdown > a");
for(let aTag2 of aTags2) {
  aTag2.onclick = selectStatus;
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".Status")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtTeam")) {
//     var dropdowns = document.getElementsByClassName("dropdown-contentTeam");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

// Get the modal
const modal = document.getElementById("task-modal");

// Get the <span> element that closes the modal
const closeBtn = modal.querySelector(".close");

// Get the cancel and submit buttons
const cancelBtn = modal.querySelector("#cancel-task-btn");
const submitBtn = modal.querySelector("#submit-task-btn");

// Get the image element that triggers the modal
const plusImg = document.getElementById("plus");

// When the user clicks on the image, open the modal
plusImg.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks on the cancel button, close the modal
cancelBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks on the submit button, do something (you can change this)
submitBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const submitTaskBtn = document.querySelector("#submit-task-btn");
const card = document.querySelector(".task-form");

// submitTaskBtn.addEventListener("click", (event) => {
//   event.preventDefault(); // prevent default form submission behavior

//   const cardData = new Card(card);

//   fetch("/cards", {
//     method: "POST",
//     body: cardData,
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response error");
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// });
