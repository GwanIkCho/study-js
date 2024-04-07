// // 1단계

// const userService = (() => {
//     // 회원가입
//     //  내가 받아야 하는 내용 받고 끝 (나머지는 통신파트)
//     const join = ({ id, email, password, name }) => {};

//     // 로그인
//     const login = ({ email, password }) => {};

//     // 마이페이지
//     const findByUser = () => {
//         // db조회 결과
//         const user = { id: 1, email: "iki980411@naver.com", name: "cho" };
//         return user || {};
//     };

//     // 회원수정
//     const update = ({ id, email, password, name }) => {};

//     // 회원탈퇴
//     const withraw = () => {};
// })();

// // 2단계

// const userService = (() => {
//     // 회원가입
//     //  내가 받아야 하는 내용 받고 끝 (나머지는 통신파트)
//     const join = ({ id, email, password, name }) => {};

//     // 로그인
//     const login = ({ email, password }) => {};

//     // 마이페이지
//     const findByUser = (callback) => {
//         // db조회 결과
//         const user = { id: 1, email: "iki980411@naver.com", name: "cho" };
//         if (callback) {
//             callback(user);
//         }
//     };

//     // 회원수정
//     const update = ({ id, email, password, name }) => {};

//     // 회원탈퇴
//     const withraw = () => {};
// })();

// 3단계

const userService = (() => {
    // 회원가입
    //  내가 받아야 하는 내용 받고 끝 (나머지는 통신파트)
    const join = ({ id, email, password, name }) => {};

    // 로그인
    const login = (email, password) => {};

    // 마이페이지
    const findByUser = (callback) => {
        // db조회 결과
        const user = { id: 1, email: "iki980411@naver.com", name: "cho" };
        if (callback) {
            callback(user);
        }
    };

    // 회원수정
    const update = ({ id, email, password, name }) => {};

    // 회원탈퇴
    const withraw = () => {};

    return {
        join: join,
        login: login,
        findByUser: findByUser,
        update: update,
        withraw: withraw,
    };
})();

// 회원가입
const user = { id: 1, email: "iki980411@naver.com", name: "cho" };
userService.join(user);

// 로그인
const email = "";
const password = "";
userService.login(email, password);

// 마이페이지
userService.findByUser((user) => {
    console.log(user);

    // 회원수정
    user.email = "asd123@gmail.com";
    userService.update(user);
});

// 회원탈퇴
userService.withraw();
