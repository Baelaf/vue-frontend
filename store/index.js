export const state = () => {
  user : {}
}

export const mutations = {
  setUser(state, user) {
    state.user = user;
  }
}

export const actions = {
  async fetchUser(context) {
    const response = await axios.get('http://localhost:3001/api/users/1');
    context.commit('setUser', response.data);
  }
}

/*
universal모드에서 사용할 수 있는 액션 함수
서버 사이드 렌더링 시점에 실행되기 때문에 스토어에 미리 데이터를 설정해 놓거나 서버에서만 접근할 수 있는 데이터를 다룰 때 유용
서버에서 세션을 관리하는 구조에 사용

actions : {
  nuxtServerInit(context, {req}) {
    if (req.session.user) {
      context.commit('user', req.session.user);
    }
  }

  ex)
  nuxtContext는 asyncData 메서드의 context 파라미터와 같습니다.
  nuxtServerInit(storeContext, nuxtContext) {
    storeContext.commit('뮤테이션 함수명');
    if (process.server) {
      const { req, res, beforeNuxtRender } = nuxtContext;
    }
  }
}
 */
