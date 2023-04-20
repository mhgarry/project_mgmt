// https://www.w3schools.com/howto/howto_js_dropdown.asp
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDownUser() {
  document.getElementById("userDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

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

const assignBtn = document.querySelector(".dropbtn");

// add an event listener to the button
assignBtn.addEventListener("click", function (event) {
  // prevent the default behavior of the button
  event.preventDefault();

  // your code to show/hide the dropdown content goes here
});
