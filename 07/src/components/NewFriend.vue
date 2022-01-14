<template>
    <form @submit.prevent="onFormSubmit">
        <div>
            <label>Name</label>
            <input type="text" v-model="newFriendData.name" required>
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="newFriendData.phone" required>
        </div>
        <div>
            <label>Email</label>
            <input type="email" v-model="newFriendData.email" required>
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-new-friend'],
    data() {
        return {
            newFriendData: {
                name: '',
                phone: '',
                email: ''
            }
        };
    },
    methods: {
        onFormSubmit() {
            this.$emit('add-new-friend', {...this.newFriendData, id: new Date().toISOString()});
            this.newFriendData = {
                name: '',
                phone: '',
                email: ''
            };
        }
    }
}
</script>