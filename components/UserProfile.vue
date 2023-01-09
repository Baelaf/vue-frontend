<template>
  <div>
    <article>
      <p v-if="$fetchState.pending">API 호출 중</p>
      <p v-else-if="$fetchState.error">에러</p>
      <div v-else>{{user}}</div>
    </article>
    <button @click="fetchUser">호출</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserProfile",
  data() {
    return {
      user : {}
    }
  },
  methods : {
    fetchUser() {
      // fetch 속성의 로직을 실행
      this.$fetch();
    }
  },
  async fetch() {
    const res = await axios.get('http://localhost:3001/api/users/1');
    this.user = res.data;
  },
  fetchOnServer : false
}
</script>

<style scoped>

</style>
