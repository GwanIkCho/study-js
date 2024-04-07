// const postService = (() => {
//     const findAll = async (callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         const posts = await response.json();
//         callback(posts);
//     };
//     return { findAll: findAll };
// })();

// const postService = (() => {
//     findAll = async (callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         const posts = await response.json();
//         callback(posts);
//     };
//     return { findAll: findAll };
// })();

const getPost = (() => {
    findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        callback(posts);
    };
    return { findAll: findAll };
})();

const postLayout = (() => {
    showList = (posts) => {
        const table = document.querySelector(".posts");
        let text = "";
        posts = posts.slice(0, 10);
        posts.forEach((post) => {
            text += `<tr><td>${post.id}</td><td>${post.title}</td></tr>`;
        });
        table.innerHTML = text;
    };
    return { showList: showList };
})();

const button = document.querySelector("#get-posts");
button.addEventListener("click", () => {
    getPost.findAll(postLayout.showList);
});
