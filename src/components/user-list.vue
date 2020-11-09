<template>
  <div>
    <h1>User List</h1>
    <div v-for="user in users" :key="user.id.value">
      <input v-model="user.name.value" />
      <input v-model="user.isAdmin.value" type="checkbox" /> admin
      <button v-if="user.wasChanged()" v-on:click="user.save()">
        save changes
      </button>
      <button v-on:click="doDelete(user)">delete</button>
      created on:{{user.createdDate.displayValue}}
    </div>
  </div>
</template>

<script lang="ts">
import context from "@/common/context";
import { Users } from "@/users/users";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class UserList extends Vue {
  users: Users[] = [];
  async loadUsers() {
    try {
      this.users = await context.for(Users).find({ orderBy: (u) => u.name });
    } catch (err) {
      alert(err.message);
    }
  }
  mounted() {
    this.loadUsers();
  }

  async doDelete(user: Users) {
    await user.delete();
    this.loadUsers();
  }
}
</script>