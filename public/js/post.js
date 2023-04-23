const postCard = async function (event) {
   event.preventDefault();
   
   const task_title = document.querySelector(".title-input");
   const task_desc = document.querySelector(".task-descrip");
   const task_cat = document.querySelector(".cat-input");
   const teammate_id = document.querySelector
   ("#userDropdown > a")
   
    await fetch ("/cards", {
        method: "POST",
        body: JSON.stringify({
            'task_title': task_title.value,
            'task_desc': task_desc.value,
            'task_cat': task_cat.value,
            'teammate_id': teammate_id.value
        }),
        headers: { "Content-Type": "application/json"}
    })

    task_title.value = '';
    task_desc.value = "";
    task_cat.value = "";
    teammate_id.value = ""

}

document.querySelector(".task-form").addEventListener("submit", postCard)