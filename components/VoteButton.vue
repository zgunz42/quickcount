<template>
  <b-button block variant="primary" @click="vote(docId)">Vote</b-button>
</template>
<script>
export default {
  props: {
    docId: {
      type: String,
      required: true,
      default: ''
    }
  },
  methods: {
    async vote(docId) {
      /* eslint-disable no-console */
      console.log('docId')
      const messageRef = this.$fireStore.collection('candidates').doc(docId)
      try {
        const messageDoc = await messageRef.get()
        await messageRef.set({
          name: messageDoc.data().name,
          earned_vote: messageDoc.data().earned_vote + 1
        })
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
