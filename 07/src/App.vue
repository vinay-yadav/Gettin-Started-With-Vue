<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <NewFriend @add-new-friend="addNewFriend"/>
        <ul>
            <FriendContact
                v-for="(friend, index) in friends"
                :friend="friend"
                :key="index"
                @delete-contact="deleteContact"
            />
        </ul>
    </section>
</template>

<script>
import FriendContact from "@/components/FriendContact";
import NewFriend from "@/components/NewFriend";

export default {
    components: {FriendContact, NewFriend},
    data() {
        return {
            components: {
                FriendContact
            },
            friends: [
                {
                    id: 'max',
                    name: 'Maxy',
                    phone: '9876543210',
                    email: 'max@cc.com'
                },
                {
                    id: 'nile',
                    name: 'Nile',
                    phone: '9976543210',
                    email: 'nile@cc.com'
                },
            ]
        };
    },
    methods: {
        addNewFriend(friendObj) {
            this.friends.push(friendObj);
        },
        deleteContact(id) {
            const index = this.friends.findIndex(item => item.id === id);
            this.friends.splice(index, 1);
        },
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: "Jost", sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li,
#app form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
}

#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
    font: inherit;
    padding: 0.15rem;
}
#app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}
#app form div {
    margin: 1rem 0;
}
</style>
