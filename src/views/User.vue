<template>
  <b-container>
    <b-card class="text-center" md="2">
      <b-avatar size="250px" />
      <b-row class="mt-4">
        <b-col cols="12" md="6" class="mt-2">
          <input
            type="email"
            v-model="email"
            class="form-control"
            placeholder="Enter Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
        </b-col>
        <b-col cols="12" md="6" class="mt-2">
          <input
            type="password"
            v-model="password"
            class="form-control"
            placeholder="Enter Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
        </b-col>
        <b-col cols="12" class="mt-5">
          <b-button type="submit" @click="signUp" variant="success" class="mr-2"
            >Sign Up</b-button
          >
          <b-button type="submit" @click="signIn" variant="primary" class="mr-2"
            >Sign In</b-button
          >
         
          <b-button type="submit" @click="signOut" variant="danger"
            >Sign Out</b-button
          >
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>

import { auth } from "@/plugin/firebaseConfig.js";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential);
          alert("Sign up Successfully");
        })
        .catch((error) => {
          var errorCode = error.code;
          console.log(errorCode);
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    },
    signIn() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
          alert("Sign in");
          this.$router.replace("/menu");
        })
        .catch((error) => {
          var errorCode = error.code;
          console.log(errorCode);
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    },
    
    signOut() {
      auth
        .signOut()
        .then((userCredential) => {
          console.log(userCredential);
          alert("Sign Out");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>