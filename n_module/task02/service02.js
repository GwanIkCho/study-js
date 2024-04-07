// const todoService = (() => {
//     const todosAll = async (callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/todos"
//         );
//         const todos = await response.json();
//         callback(todos);
//     };
//     return { todosAll: todosAll };
// })();

const todoService = (() => {
    const findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();
        callback(todos);
    };
    return { findAll: findAll };
})();
