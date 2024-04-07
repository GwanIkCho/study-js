// const todoLayout = (() => {
//     const showList = (todos) => {
//         const table = document.getElementById("todo-list");
//         let text = "";
//         todos = todos.slice(0, 10);
//         todos.forEach((todo) => {
//             if (todo.completed) {
//                 text += `<tr><td>${todo.id}</td><td style = color:green>${todo.title}</td></tr>`;
//             } else if (!todo.completed) {
//                 text += `<tr><td>${todo.id}</td><td style = color:red>${todo.title}</td></tr>`;
//             }
//         });
//         table.innerHTML = text;
//     };
//     return { showList: showList };
// })();

const todoLayout = (() => {
    const showList = (todos) => {
        const table = document.getElementById("todo-list");
        let text = "";
        todos = todos.slice(0, 10);
        todos.forEach((todo) => {
            if (todo.completed) {
                text += `<tr><td>${todo.id}</td><td style = color:green>${todo.title}</td></tr>`;
            } else if (!todo.completed) {
                text += `<tr><td>${todo.id}</td><td style = color:red>${todo.title}</td></tr>`;
            }
            table.innerHTML = text;
        });
    };
    return { showList: showList };
})();
