<template>
  <div>
    <p>{{ user }}</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    // params의 id가 1이라고 가정
    async asyncData({ params, $http, error }) {
      try {
      const response = await axios.get(`http://localhost:3001/api/users/1`);
      //const response = await axios.get(`http://localhost:3001/api/users/${params.id}`);
      const user = response.data;
      return {user}
      } catch(e) {
        error({ statusCode: 503, message: 'API 요청이 실패했습니다 다시 시도해 주세요' })
      }
    }
  }
</script>

<style scoped>

</style>
