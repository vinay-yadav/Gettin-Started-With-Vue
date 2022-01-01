<template>
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="showDetails = !showDetails">Show Details</button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
<!--      <button @click="onDelete(friend.id)">Delete</button>-->
      <button @click="$emit('delete-contact', friend.id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: ['friend'],
    emits: ['delete-contact'],
  data() {
    return {
      showDetails: false,
    }
  },
    methods: {
        onDelete(id) {
            this.$emit('delete-contact', id);
        }
    }
}
</script>

