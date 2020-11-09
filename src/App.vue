<template>
  <div id="app">
    <nav>
      <router-link to="/users">User List</router-link> |
      <router-link to="/add">Add User</router-link> |
      <router-link v-if="context.user" to="update-password"
        >Update Password</router-link> |
      <router-link v-if="!context.user" to="sign-in">Sign In</router-link>
      <span v-if="context.user">Hello {{ context.user.name }}</span>
      &nbsp;
      <button v-if="context.user" v-on:click="signOut">Sign Out</button>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import context, { Common } from "./common/context";
import router from "./router";
import { Users } from "./users/users";

@Component({
  components: {},
})
export default class App extends Vue {
  context = context;
  signOut() {
    Common.authorization.signOut();
    router.push({ path: "/sign-in" });
  }
  async errorCaptured(err: any) {
    alert(err.message);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
