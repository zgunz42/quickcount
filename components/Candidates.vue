<template>
  <div class="border rounded bg-white">
    <h2 class="p-4 bg-primary text-white font-weight-bold">
      Calon Presiden Online
    </h2>
    <ul class="list-unstyled">
      <li v-for="item in items" :key="item.id" class="candidate">
        <VoteItem
          :id="item.id"
          :name="item.name"
          :vote-count="item.voteCount"
          class="p-4"
        />
      </li>
      <div v-show="items.length == 0">
        <Loading />
      </div>
    </ul>
  </div>
</template>

<script>
import VoteItem from '~/components/VoteItem.vue'
import Loading from '~/components/Loading.vue'

export default {
  components: { VoteItem, Loading },
  data: function() {
    return {
      text: '',
      items: []
    }
  },
  beforeCreate: function() {
    this.$fireStore.collection('candidates').onSnapshot(snapshot => {
      this.items = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        voteCount: doc.data().earned_vote
      }))
    })
  }
}
</script>
<style>
.list-unstyled li.candidate:last-child {
  border-bottom: 0;
}
.list-unstyled .candidate {
  border-bottom: 1px solid #f5eeee;
}
</style>
