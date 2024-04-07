// const button = document.getElementById("button");
// button.addEventListener("click", (e) => {
//     todoService.todosAll(todoLayout.showList);
// });

const button = document.getElementById("button");
button.addEventListener("click", (e) => {
    todoService.findAll(todoLayout.showList);
});
