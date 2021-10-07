<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <new-friend @add-contact="addNewContact" />
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
      />
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";
export default {
  components: { FriendContact, NewFriend },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {
    addNewContact(name, phone, email) {
      console.log(name, phone, email);
      this.friends.push({ id: new Date().toISOString(), name, phone, email });
    },
  },
};
</script>
