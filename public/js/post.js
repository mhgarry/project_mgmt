const postCard = async function (event) {
   event.preventDefault();
   
   const task_title = document.querySelector(".title-input");
   const task_desc = document.querySelector(".task-descrip");
   const task_cat = document.querySelector(".cat-input");

    await fetch ("/cards", {
        method: "POST",
        body: JSON.stringify({
            'task_title': task_title.value,
            'task_desc': task_desc.value,
            'task_cat': task_cat.value
        }),
        headers: { "Content-Type": "application/json"}
    })

    task_title.value = '';
    task_desc.value = "";
    task_cat.value = ""

}

document.querySelector(".task-form").addEventListener("submit", postCard)