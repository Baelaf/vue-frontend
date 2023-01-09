<template>
  <div>
    <h1>
      <!-- pages의 vue component name과 매칭 -->
      <NuxtLink to="/">시작</NuxtLink>
      <NuxtLink to="/login">로그인</NuxtLink>
      <NuxtLink to="/main">메인</NuxtLink>
    </h1>
    <Nuxt/>
  </div>
</template>

<script>
export default {
  name: "default.vue"
}
</script>

<style scoped>

</style>
