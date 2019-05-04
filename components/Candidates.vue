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
      <p>{{ text }}</p>
    </ul>
  </div>
</template>

<script>
import VoteItem from '~/components/VoteItem.vue'

export default {
  components: { VoteItem },
  data: function() {
    return {
      text: '',
      items: []
    }
  },
  beforeCreate: function() {
    /* eslint-disable no-console */
    this.$fireStore.collection('candidates').onSnapshot(snapshot => {
      this.items = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        voteCount: doc.data().earned_vote
      }))
    })
  },
}
</script>
