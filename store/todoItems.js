// index.js를 생성하고 다른 이름의 자바스크립트 파일을 생성하면 뷰엑스의 모듈이 된다.
export const state = () => ({
  todoItems : []
})

export const mutations = {
  addTodoItems(state, item) {
    state.todoItems.push(item);
  }
}
