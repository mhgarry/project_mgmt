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

const submitTaskBtn = document.querySelector("#submit-task-btn");
const card = document.querySelector(".task-form");

submitBtn.onclick = async function () {
  const form = document.querySelector('.task-form');
  const formData = new Card(form);

  try {
    const response = await fetch('/cards', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      console.log('Task created successfully!');
      modal.style.display = 'none';
    } else {
      console.error('Error creating task:', response.statusText);
    }
  } catch (error) {
    console.error('Error creating task:', error);
  }
};

submitTaskBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const cardData = new Card(card);
  try {
    const response = await fetch("/cards", {
      method: "POST",
      body: JSON.stringify(cardData),
      headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});

const taskHandler = async (event) => {
  event.preventDefault();

  const titleInput = document.querySelector('.title-input').value;
  const taskDescripInput = document.querySelector('.task-descrip').value;
  const catInput = document.querySelector(".cat-input").value;
  const assignUserInput = document.querySelector("userDropdown").value

  if (titleInput && taskDescripInput) {
    const response = await fetch('/cards', {
      method: 'POST',
      body: JSON.stringify({ 
        task_title: titleInput,
        task_desc: taskDescripInput,
        task_cat: catInput,
        teammate_id: assignUserInput,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
