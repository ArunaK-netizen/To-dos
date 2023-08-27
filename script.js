document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const input = document.getElementById("input");
    const todos = document.getElementById("todos");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const todoText = input.value;

        if(todoText){
            const todoel = document.createElement("li");
            todoel.innerText = todoText;

            todoel.addEventListener("click",(e) => {
                todoel.classList.toggle("completed");
            })

            todoel.addEventListener("contextmenu",(e) => {
                e.preventDefault();
                todoel.remove();
            })

            todos.appendChild(todoel);
            input.value = "";
            
        }
    });
});
