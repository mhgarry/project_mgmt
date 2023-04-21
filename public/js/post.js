const postCard = async function (event) {
   event.preventDefault();
   
   const title = document.querySelector(".title-input").value;
   const description = document.querySelector(".task-descrip").value;

    await fetch ("/cards", {
        method: "POST",
        body: JSON.stringify({
            title,
            description
        }),
        headers: { "Content-Type": "application/json"}
    })

}

document.querySelector(".task-form").addEventListener("submit", postCard)