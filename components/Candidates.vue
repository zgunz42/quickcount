<template>
  <div>
    <ul class="list-unstyled">
      <b-media tag="li">
        <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder"></b-img>

        <h5 class="mt-0 mb-1">List-based media object</h5>
        <p class="mb-0">
          Cras sit amet nibh libero, in gravida nulla. 
          Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
          Fusce condimentum nunc
          ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
      </b-media>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    async writeToFirestore() {
      const messageRef = this.$fireStore.collection('candidates').doc('candidates')
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
        return
      }
    }
  }
}
</script>