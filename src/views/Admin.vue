<template>
  <div></div>
</template>

<script>
import { auth } from "@/plugin/firebaseConfig.js";
export default {
  beforeCreate() {
    auth.onAuthStateChanged( (user)=> {
      if (user!=null) {
        console.log(user);
      } else {
          this.$router.replace("/User");
        // No user is signed in.
      }
    });
  },
};
</script>

<style>
</style>