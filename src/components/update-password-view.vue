<template>
  <div>
    <h1>Update Password</h1>
    <input
      v-model="controller.password.value"
      placeholder="password"
      type="password"
    />
    <input
      v-model="controller.confirmPassword.value"
      placeholder="confirm password"
      type="password"
    />
    <button v-on:click="updatePassword">Update Password</button>
  </div>
</template>

<script lang="ts">
import context from "@/common/context";
import router from "@/router";
import { Component, Vue } from "vue-property-decorator";
import { UpdatePasswordController } from "./update-password-controller";

@Component
export default class UpdatePasswordView extends Vue {
  controller = new UpdatePasswordController(context);
  async updatePassword() {
    await this.controller.SavePassword();
    alert("Password saved");
  }
}
</script>

<style scoped>
</style>