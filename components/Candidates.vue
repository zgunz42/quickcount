<template>
  <div>
    <ul class="list-unstyled">
      <li v-for="item in items" :key="item.id">
        <VoteItem
          :id="item.id"
          :name="item.name"
          :vote-count="item.voteCount"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import VoteItem from '~/components/VoteItem.vue'

export default {
  components: { VoteItem },
  data: function() {
    return {
      items: [
        {
          id: 'as',
          name: 'Jokowi',
          voteCount: 12
        },
        {
          id: 'asd',
          name: 'Prabowo',
          voteCount: 13
        },
        {
          id: 'asasd',
          name: 'Prabowo Adi',
          voteCount: 13
        }
      ]
    }
  },
  methods: {
    async writeToFirestore() {
      const messageRef = this.$fireStore
        .collection('candidates')
        .doc('candidates')
      try {
        await messageRef.set({
          message: 'Nuxt-Fire with Firestore rocks!'
        })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
    },
    async readFromFirestore() {
      const messageRef = this.$fireStore.collection('message').doc('message')
      try {
        const messageDoc = await messageRef.get()
        alert(messageDoc.data().message)
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
