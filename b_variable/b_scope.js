// // 지역 변수
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // 전역 변수
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// Node.js에서는 전역변수들을 모두 global 객체에서 관리한다.
// 브라우저에서는 window 객체에서 전역변수를 관리한다.
// 따라서 어디에서 사용될 지 모를 때에는 globalThis 객체를 사용하면 된다.
// 전역 변수
global.x = 10;
// let x = 10;

function f() {
    // 지역변수
    let x = 20;
    console.log(global.x, x);
}
