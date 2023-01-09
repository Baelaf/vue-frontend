<template>
  <div>
    <h1>main</h1>
    <UserProfile/>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
  name: 'IndexPage',
  components : {
    UserProfile
  }
}
</script>
