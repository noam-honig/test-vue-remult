<template>
  <div>
    <h1>Sign In</h1>
    <input v-model="name" /> <button v-on:click="signIn">Sign In</button>
  </div>
</template>

<script lang="ts">
import { Common } from "@/common/context";
import router from "@/router";
import { Users } from "@/users/users";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SignIn extends Vue {
  name = "";
  async signIn() {
    const jwt = await Users.SignIn(this.name);
    Common.authorization.afterSignIn(jwt, true);
    router.push({ path: "/users" });
  }
}
</script>

<style scoped>
</style>