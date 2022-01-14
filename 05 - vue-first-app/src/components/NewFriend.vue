<template>
  <form @submit.prevent="addContact">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="phone" />
    </div>
    <div>
      <label>Email</label>
      <input type="text" v-model="email" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    addContact() {
      this.$emit("add-contact", this.name, this.phone, this.email);
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>
