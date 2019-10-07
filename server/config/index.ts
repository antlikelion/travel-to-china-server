export default {
    ...require(`./${process.env.NODE_ENV || 'development'}`).default
}
// es5에서는 module.exports를 쓰기 때문에, require로 호출함.
// es6에서는 export default로 내보내기 때문에, import로 호출함.
// 이제 require는 사용하지 않는 것이 좋으나, 여기에선 동적으로 호출할 필요가 있었음.
// import로는 해당 기능을 수행하기 어렵다.
// env라이브러리를 쓰면 환경별로 변수를 관리할 수 있지만, 이거 하나 때문에 라이브러리를 쓰는 것은
// 너무 비효율적임.
// 그래서 불가피하게 require를 썼음
// ...은 디스트럭처링의 하나임 그렇게만 기억해두자